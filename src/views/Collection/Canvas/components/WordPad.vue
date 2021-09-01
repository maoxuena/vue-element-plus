<template>
  <div class="word-pad-container">
    <canvas class="canvas-box"
            ref="canvas"
            @mousedown="mousedown($event)"
            @mousemove="mousemove($event)"
            @mouseup="mouseup"
            @mouseout="mouseout"></canvas>
    <div class="color-box">
      <span v-for="(item,index) in colors"
            :key="index"
            class="color-item"
            :class="[item,{'active': active===index}]"
            @click="selectColor(index,item)"></span>
    </div>
    <div class="btn-box">
      <div class="btn"
           @click="clearDraw()">清除</div>
      <div class="btn"
           @click="generateBase64()">生成base64</div>
    </div>
    <el-input type="textarea"
              class="base64-box"
              rows="6"
              v-model="base64"></el-input>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'WordPad',
  setup () {

    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black']
    let active = ref(-1)
    const canvas = ref(null)
    let context
    let isDraw = false  //定义变量控制画笔是否可用
    let movePos                  //定义变量存放初始画笔开始位置
    let linWidth = 10
    let linColor = '#333'
    const canvasWidth = 400
    const canvasHeight = 400
    const base64 = ref('')


    const draw = () => {
      canvas.value.width = canvasWidth
      canvas.value.height = canvasHeight

      context.strokeStyle = "red"
      context.lineWidth = 10

      context.beginPath()
      context.strokeRect(0, 0, canvasWidth, canvasHeight)

      //设置画笔颜色，宽度
      context.strokeStyle = "red"
      context.lineWidth = 1

      //使线段连续，圆滑
      context.lineCap = "round"
      context.lineJoin = "round"


      drawDashedLine(context, 0, 0, canvasWidth, canvasHeight)

      drawDashedLine(context, 0, canvasWidth, canvasHeight, 0)

      drawLine(context, 0, canvasHeight / 2, canvasWidth, canvasHeight / 2)

      drawLine(context, canvasWidth / 2, 0, canvasWidth / 2, canvasHeight)
    }

    //画虚线（参照网上大神）
    const drawDashedLine = (context, x1, y1, x2, y2, dashLength) => {
      dashLength = dashLength === undefined ? 5 : dashLength
      var deltaX = x2 - x1
      var deltaY = y2 - y1
      var numDashes = Math.floor(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength)
      for (var i = 0; i < numDashes; ++i) {
        context[i % 2 === 0 ? 'moveTo' : 'lineTo'](x1 + (deltaX / numDashes) * i, y1 + (deltaY / numDashes) * i)
      }
      context.stroke()
    }

    //画直线
    const drawLine = (context, x1, y1, x2, y2) => {
      context.moveTo(x1, y1)
      context.lineTo(x2, y2)
      context.stroke()
    }

    //获取鼠标相对与canvas位置
    const getPos = (x, y) => {
      var box = canvas.value.getBoundingClientRect()
      return { x: x - box.left, y: y - box.top }
    }

    //画笔
    const drawing = (e) => {
      if (isDraw) {
        var position = getPos(e.clientX, e.clientY)
        context.strokeStyle = linColor
        context.lineWidth = linWidth
        context.save()
        context.beginPath()
        context.moveTo(movePos.x, movePos.y)
        context.lineTo(position.x, position.y)
        context.stroke()
        movePos = position
        context.restore()
      }

    }

    //鼠标点下
    const mousedown = (e) => {
      isDraw = true
      movePos = getPos(e.clientX, e.clientY)
      drawing(e)
    }

    //鼠标移动
    const mousemove = (e) => {
      drawing(e)
    }

    //鼠标松开
    const mouseup = () => {
      isDraw = false
    }

    //鼠标离开
    const mouseout = () => {
      isDraw = false
    }

    //选择画笔颜色
    const selectColor = (index, item) => {
      active.value = index
      linColor = item
    }

    //清除
    const clearDraw = () => {
      context.clearRect(0, 0, 500, 500)
      draw()
    }

    // 生成base64
    const generateBase64 = () => {
      // canvas.toDataURL 返回的是一串Base64编码的URL
      base64.value = canvas.value.toDataURL("image/png")
    }

    onMounted(() => {
      context = canvas.value.getContext("2d")
      draw()
    })

    return {
      colors,
      active,
      canvas,
      base64,
      generateBase64,
      selectColor,
      clearDraw,
      mousedown,
      mousemove,
      mouseup,
      mouseout
    }
  }
}
</script>

<style lang="scss" scoped>
.word-pad-container {
  position: relative;

  .canvas-box {
    display: block;
    margin: 20px auto;
    background: #f5f5f5;
  }

  .color-box {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 60px;

    .color-item {
      display: inline-block;
      width: 48px;
      height: 24px;
      margin: 10px auto 0;
      background: #989898;
      cursor: pointer;

      &.red {
        background: #e01d5b;
      }

      &.blue {
        background: #1d6ae0;
      }

      &.green {
        background: #1de087;
      }

      &.yellow {
        background: #f3e41d;
      }

      &.orange {
        background: #f9850b;
      }

      &.black {
        background: #333;
      }

      &.active {
        border: solid 3px #565656;
      }
    }
  }

  .btn-box {
    text-align: center;

    .btn {
      width: 120px;
      text-align: center;
      margin: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .base64-box {
    display: block;
    width: 80%;
    margin: 10px auto;
  }
}
</style>