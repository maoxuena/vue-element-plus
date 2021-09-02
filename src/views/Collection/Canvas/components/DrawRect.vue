<template>
  <div class="draw-rect">
    <el-color-picker v-model="color" show-alpha @change="changeColor"></el-color-picker>
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
    const color = ref('rgba(19, 206, 102, 0.8)')
    const step = 25

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
      // startx = (e.pageX - e.target.offsetLeft + e.target.parentElement.scrollLeft) / scale
      // starty = (e.pageY - e.target.offsetTop + e.target.parentElement.scrollTop) / scale
      startx = (e.pageX - e.target.getBoundingClientRect().left) / scale
      starty = (e.pageY - e.target.getBoundingClientRect().top) / scale
      currentR = isPointInRetc(startx, starty)
      console.log(currentR)
      if(currentR){
        leftDistance = startx - currentR.x1
        topDistance = starty - currentR.y1
      }
      // context.strokeRect(x, y, 0, 0)
      context.strokeStyle = color.value
      context.fillStyle = color.value
      context.fillRect(x, y, 0, 0) 

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
      context.strokeStyle = color.value
      context.fillStyle = color.value
      canvas.value.style.cursor = "default"
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      if(flag && oper == 1){
        // context.strokeRect(startx, starty, x-startx, y-starty)
        context.fillRect(startx, starty, x-startx, y-starty) 
      }
      context.restore()
      reshow(x, y)
    }

    //鼠标松开
    const mouseup = () => {
      console.log(oper,color.value)
      if(oper == 1){
        layers.push(fixPosition({
          x1: startx,
          y1: starty,
          x2: x,
          y2: y,
          strokeStyle: color.value,
          fillStyle: color.value,
          type: type
        }))
      } else if(oper >= 3){
        fixPosition(currentR)
      }
      // currentR=null
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
      if(position.width<step*2){
        position.width=step*2+10
        position.x2+=position.x1+step*2+10
      }      
      if(position.height<step*2){
        position.height=step*2+10
        position.y2+=position.y1+step*2+10
      }
      return position
    }


    const reshow = (x,y) => {
      let allNotIn = 1
      layers.forEach(item=>{
        context.beginPath()
        context.rect(item.x1,item.y1,item.width,item.height)
        context.strokeStyle=item.strokeStyle
        context.fillStyle=item.fillStyle
        context.fillRect(item.x1,item.y1,item.width,item.height)

        const x1Left = (item.x1 - step) / scale
        const x1Right = (item.x1 + step) / scale

        const x2Left = (item.x2 - step) / scale
        const x2Right = (item.x2 + step) / scale

        const y1Top = (item.y1 - step) / scale
        const y1Bottom = (item.y1 + step) / scale

        const y2Top = (item.y2 - step) / scale
        const y2Bottom = (item.y2 + step) / scale

        if(x >= x1Left && x <= x1Right && y <= y2Top && y >= y1Bottom){
          resizeLeft(item) // 左
        }else if(x >= x2Left && x <= x2Right && y <= y2Top && y >= y1Bottom){
          resizeWidth(item) // 右
        }else if(y >= y1Top && y <= y1Bottom && x <= x2Left && x >= x1Right){
          resizeTop(item) // 上
        }else if(y >= y2Top && y <= y2Bottom && x <= x2Left && x >= x1Right){
          resizeHeight(item) // 下
        }else if(x >= x1Left && x <= x1Right && y <= y1Bottom && y >= y1Top){
          resizeLT(item) // 左上
        }else if(x >= x2Left && x <= x2Right && y <= y2Bottom && y >= y2Top){
          resizeWH(item) // 右下
        }else if(x >= x1Left && x <= x1Right && y <= y2Bottom && y >= y2Top){
          resizeLH(item) // 左下
        }else if(x >= x2Left && x <= x2Right && y <= y1Bottom && y >= y1Top){
          resizeWT(item) // 右上
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

    // 左
    const resizeLeft = (rect) => {
      canvas.value.style.cursor="w-resize"
      if(flag&&oper==0){oper=3}
      if(flag&&oper==3){
        if(!currentR){currentR=rect}
        currentR.x1=x
        currentR.width=currentR.x2-currentR.x1
      }
    }

    // 上
    const resizeTop = (rect) => {
      canvas.value.style.cursor="s-resize"
      if(flag&&oper==0){oper=4}
      if(flag&&oper==4){
        if(!currentR){currentR=rect}
        currentR.y1=y
        currentR.height=currentR.y2-currentR.y1
      }
    }

    // 右
    const resizeWidth = (rect) => {
      canvas.value.style.cursor="w-resize"
      if(flag&&oper==0){oper=5}
      if(flag&&oper==5){
        if(!currentR){currentR=rect}
        currentR.x2=x
        currentR.width=currentR.x2-currentR.x1
      }
    }

    // 下
    const resizeHeight = (rect) => {
      canvas.value.style.cursor="s-resize"
      if(flag&&oper==0){oper=6}
      if(flag&&oper==6){
        if(!currentR){currentR=rect}
        currentR.y2=y
        currentR.height=currentR.y2-currentR.y1
      }
    }

    // 左上
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

    // 右下
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

    // 左下
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

    // 右上
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

    const changeColor = (value) => {
      color.value = value
      if(currentR){
        currentR.fillStyle = value
        currentR.strokeStyle = value
      }
    }

    onMounted(() => {
      context = canvas.value.getContext("2d")
      initCanvas()
    })

    return{
      color,
      changeColor,
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