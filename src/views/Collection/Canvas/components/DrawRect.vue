<template>
  <div class="draw-rect">
    <canvas class="canvas-box"
            ref="canvas"
            @mousedown="mousedown($event)"
            @mousemove="mousemove($event)"
            @mouseup="mouseup"
            @mouseout="mouseout"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'DrawRect',
  setup () {
    const elementWidth=800,elementHeight=400;

    let startx // 起始x坐标
    let starty // 起始y坐标
    let flag // 是否点击鼠标的标志
    
    let x
    let y
    let leftDistance
    let topDistance

    let oper = 0 // oper操作类型: 0 无操作 1 画矩形框 2 拖动矩形框
    let scale = 1 // 缩放比

    let type = 0
    let layers = [] // 图层
    let currentR // 当前点击的矩形框

    const canvas = ref(null)
    let context
    const canvasWidth = 800
    const canvasHeight = 400

    const initCanvas = () => {
      canvas.value.width = canvasWidth
      canvas.value.height = canvasHeight
    }

    //鼠标点下
    const mousedown = (e) => {
      console.log(e)
      console.log(e.pageX, e.pageY)
      console.log(e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().top)
      console.log('----------------')
      console.log(e.target.offsetLeft, e.target.offsetRight)
      console.log(canvas.value.offsetLeft, canvas.value.offsetLeft)
      console.log('----------------')
      console.log(e.target.parentElement.scrollLeft, e.target.parentElement.scrollTop)
      console.log(canvas.value.parentElement.scrollLeft, canvas.value.parentElement.scrollTop)
      // startx = (e.pageX - e.target.offsetLeft + e.target.parentElement.scrollLeft) / scale
      // starty = (e.pageY - e.target.offsetTop + e.target.parentElement.scrollTop) / scale
      startx = (e.pageX - e.target.getBoundingClientRect().left) / scale
      starty = (e.pageY - e.target.getBoundingClientRect().top) / scale
      currentR = isPointInRetc(startx, starty)
      if(currentR){
        leftDistance = startx - currentR.x1
        topDistance = starty - currentR.y1
      }
      context.strokeRect(x, y, 0, 0)
      context.strokeStyle = "#0000ff"
      flag=1
    }

    //鼠标移动
    const mousemove = (e) => {
      // x = (e.pageX - canvas.value.offsetLeft + canvas.value.parentElement.scrollLeft) / scale
      // y = (e.pageY - canvas.value.offsetTop + canvas.value.parentElement.scrollTop) / scale
      x = (e.pageX - e.target.getBoundingClientRect().left) / scale
      y = (e.pageY - e.target.getBoundingClientRect().top) / scale
      context.save()
      context.setLineDash([5])
      canvas.value.style.cursor = "default"
      context.clearRect(0, 0, elementWidth, elementHeight)
      if(flag && oper == 1){
        context.strokeRect(startx, starty, x-startx, y-starty)
      }
      context.restore()
      reshow(x, y)
    }

    //鼠标松开
    const mouseup = () => {
      if(oper == 1){
        layers.push(fixPosition({
          x1: startx,
          y1: starty,
          x2: x,
          y2: y,
          strokeStyle: '#0000ff',
          type: type
        }))
      } else if(oper >= 3){
        fixPosition(currentR)
      }
      currentR=null
      flag=0
      reshow(x,y)
      oper=0
    }

    //鼠标离开
    const mouseout = () => {
    }

    function render(rect){
      canvas.value.style.cursor="move"
      if(flag&&oper==0){oper=2}
      if(flag&&oper==2){
        if(!currentR){currentR=rect}
        currentR.x2+=x-leftDistance-currentR.x1
        currentR.x1+=x-leftDistance-currentR.x1
        currentR.y2+=y-topDistance-currentR.y1
        currentR.y1+=y-topDistance-currentR.y1
      }
    }

    const isPointInRetc = (x,y) => {
      let len=layers.length
      for(let i=0;i<len;i++){
        if(layers[i].x1<x&&x<layers[i].x2&&layers[i].y1<y&&y<layers[i].y2){
          return layers[i]
        }
      }
    }

    const fixPosition = (position) => {
      if(position.x1>position.x2){
        let x=position.x1
        position.x1=position.x2
        position.x2=x
      }
      if(position.y1>position.y2){
        let y=position.y1
        position.y1=position.y2
        position.y2=y
      }
      position.width=position.x2-position.x1
      position.height=position.y2-position.y1
      if(position.width<50||position.height<50){
        position.width=60
        position.height=60
        position.x2+=position.x1+60
        position.y2+=position.y1+60
      }
      return position
    }


    const reshow = (x,y) => {
      let allNotIn = 1
      layers.forEach(item=>{
        context.beginPath()
        context.rect(item.x1,item.y1,item.width,item.height)
        context.strokeStyle=item.strokeStyle
        if(x >= (item.x1 -25 / scale) && x <= (item.x1 +25 / scale) && y <= (item.y2 -25 / scale) && y >= (item.y1 +25 / scale)){
          resizeLeft(item)
        }else if(x >= (item.x2 -25 / scale) && x <= (item.x2 +25 / scale) && y <= (item.y2 -25 / scale) && y >= (item.y1 +25 / scale)){
          resizeWidth(item)
        }else if(y >= (item.y1 -25 / scale) && y <= (item.y1 +25 / scale) && x <= (item.x2 -25 / scale) && x >= (item.x1 +25 / scale)){
          resizeTop(item)
        }else if(y >= (item.y2 -25 / scale) && y <= (item.y2 +25 / scale) && x <= (item.x2 -25 / scale) && x >= (item.x1 +25 / scale)){
          resizeHeight(item)
        }else if(x >= (item.x1 -25 / scale) && x <= (item.x1 +25 / scale) && y <= (item.y1 +25 / scale) && y >= (item.y1 -25 / scale)){
          resizeLT(item)
        }else if(x >= (item.x2 -25 / scale) && x <= (item.x2 +25 / scale) && y <= (item.y2 +25 / scale) && y >= (item.y2 -25 / scale)){
          resizeWH(item)
        }else if(x >= (item.x1 -25 / scale) && x <= (item.x1 +25 / scale) && y <= (item.y2 +25 / scale) && y >= (item.y2 -25 / scale)){
          resizeLH(item)
        }else if(x >= (item.x2 -25 / scale) && x <= (item.x2 +25 / scale) && y <= (item.y1 +25 / scale) && y >= (item.y1 -25 / scale)){
          resizeWT(item)
        }
        if(context.isPointInPath(x*scale, y*scale)){
          render(item)
          allNotIn = 0
        }
        context.stroke()
      })
      if(flag && allNotIn && oper < 3){
        oper = 1
      }	
    }

    const resizeLeft = (rect) => {
      canvas.value.style.cursor="w-resize"
      if(flag&&oper==0){oper=3}
      if(flag&&oper==3){
        if(!currentR){currentR=rect}
        currentR.x1=x
        currentR.width=currentR.x2-currentR.x1
      }
    }

    const resizeTop = (rect) => {
      canvas.value.style.cursor="s-resize"
      if(flag&&oper==0){oper=4}
      if(flag&&oper==4){
        if(!currentR){currentR=rect}
        currentR.y1=y
        currentR.height=currentR.y2-currentR.y1
      }
    }

    const resizeWidth = (rect) => {
      canvas.value.style.cursor="w-resize"
      if(flag&&oper==0){oper=5}
      if(flag&&oper==5){
        if(!currentR){currentR=rect}
        currentR.x2=x
        currentR.width=currentR.x2-currentR.x1
      }
    }

    const resizeHeight = (rect) => {
      canvas.value.style.cursor="s-resize"
      if(flag&&oper==0){oper=6}
      if(flag&&oper==6){
        if(!currentR){currentR=rect}
        currentR.y2=y
        currentR.height=currentR.y2-currentR.y1
      }
    }

    const resizeLT = (rect) => {
      canvas.value.style.cursor="se-resize"
      if(flag&&oper==0){oper=7}
      if(flag&&oper==7){
        if(!currentR){currentR=rect}
        currentR.x1=x
        currentR.y1=y
        currentR.height=currentR.y2-currentR.y1
        currentR.width=currentR.x2-currentR.x1
      }
    }

    const resizeWH = (rect) => {
      canvas.value.style.cursor="se-resize"
      if(flag&&oper==0){oper=8}
      if(flag&&oper==8){
        if(!currentR){currentR=rect}
        currentR.x2=x
        currentR.y2=y
        currentR.height=currentR.y2-currentR.y1
        currentR.width=currentR.x2-currentR.x1
      }
    }

    const resizeLH = (rect) => {
      canvas.value.style.cursor="ne-resize"
      if(flag&&oper==0){oper=9}
      if(flag&&oper==9){
        if(!currentR){currentR=rect}
        currentR.x1=x
        currentR.y2=y
        currentR.height=currentR.y2-currentR.y1
        currentR.width=currentR.x2-currentR.x1
      }
    }

    const resizeWT = (rect) => {
      canvas.value.style.cursor="ne-resize"
      if(flag&&oper==0){oper=10}
      if(flag&&oper==10){
        if(!currentR){currentR=rect}
        currentR.x2=x
        currentR.y1=y
        currentR.height=currentR.y2-currentR.y1
        currentR.width=currentR.x2-currentR.x1
      }
    }

    onMounted(() => {
      context = canvas.value.getContext("2d")
      initCanvas()
    })

    return{
      canvas,
      mousedown,
      mousemove,
      mouseup,
      mouseout
    }
  }
}
</script>

<style lang="scss" scoped>
.draw-rect {
  position: relative;

  .canvas-box {
    display: block;
    margin: 20px auto;
    background: #fff;
  }
}
</style>