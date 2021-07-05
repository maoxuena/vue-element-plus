<template>
  <div class="within-polygon-container">
    <svg
      class="show-svg"
      height="500"
      width="500"
      @mousedown="getPoint($event)"
    >
      <polygon
        id="polygon"
        points="407,424 110,424 110,245 167,309 233,245 233,359 407,359 450,390"
        style="fill: bisque; stroke: purple; stroke-width: 1"
      />
    </svg>
    <div class="show-text">{{ text }}</div>
  </div>
</template>

<script>
import { nextTick, onMounted, ref } from 'vue'
export default {
  name: 'WithinPolygon',
  setup () {
    let polygon
    let xx
    const text = ref('')

    /**
     * nvert 代表多边形有几个点
     * testx,testy代表待测试点的横坐标和纵坐标，
     * 
     * 每次计算都涉及到相邻的两个点和待测试点，然后考虑两个问题：
     * 1. 被测试点的纵坐标testy是否在本次循环所测试的两个相邻点纵坐标范围之内？即
     * verty[i] <testy < verty[j]
     * 或者
     * verty[j] <testy < verty[i]
     * 2. 待测点test是否在i,j两点之间的连线之下？（可以在纸上写下i,j两点间的斜率公式，要用到一点初中解析几何和不等式的知识范畴）
     * 然后每次这两个条件同时满足的时候我们把返回的布尔量取反。
     * 
     * 随便画个多边形，随便定一个点，然后通过这个点水平划一条线，
     * 先数数看这条横线和多边形的边相交几次，（或者说先排除那些不相交的边，第一个判断条件），
     * 然后再数这条横线穿越多边形的次数是否为奇数，
     * 如果是奇数，那么该点在多边形内，
     * 如果是偶数，则在多边形外。
     */
    const pnpoly = (nvert, testx, testy) => {
      var i, j, c = false;
      for (i = 0, j = nvert - 1; i < nvert; j = i++) {
        console.log(i)
        var posI = polygon.points.getItem(i);
        var posJ = polygon.points.getItem(j);

        // 在顶点
        if (posI.x == testx && posI.y == testy) {
          console.log("在顶点")
          c = 1
          break
        }

        // 水平边
        if (posI.y == posJ.y) {
          if (testy == posI.y && ((posI.x > testx) != (posJ.x > testx))) {
            // 点在水平边上
            console.log("点在水平边上")
            c = 1
            break
          } else {
            //点在水平边的延伸线上
            console.log("点在水平边的延伸线上，则水平边不做考虑")
            continue
          }
        }

        // 水平线与边相交点的x轴坐标
        const x0 = parseInt((posJ.x - posI.x) * (testy - posI.y) / (posJ.y - posI.y) + posI.x)

        console.log(posI, posJ, 'testx:' + testx, 'testy:' + testy, x0)


        if ((posI.y > testy) != (posJ.y > testy)) {
          // 筛选出会相交的边
          // 如果与多边形顶点相交，且相交的点是纵坐标较大的顶点，则计数，否则忽略该顶点（或者相交的点是纵坐标较小的顶点，则计数，否则忽略该顶点）
          console.log("筛选出会相交的边")
          if (testx == x0) { // 正好在边上
            console.log("正好在边上")
            c = 1
            break
          }
          if (testx < x0) { // 筛选出会相交的位于点右边的边
            console.log("筛选出会相交的位于点右边的边")
            c = !c;
          }
        }

        // if (((posI.y > testy) != (posJ.y > testy)) &&
        //   (testx < (posJ.x - posI.x) * (testy - posI.y) / (posJ.y - posI.y) + posI.x))
        //   c = !c;
      }
      return c;
    }

    const getPoint = (event) => {
      var len = polygon.points.numberOfItems
      var minX, maxX, minY, maxY, pos
      for (var i = 0; i < len; i++) {
        pos = polygon.points.getItem(i)
        if (i == 0) {
          minX = maxX = pos.x
          minY = maxY = pos.y
        } else {
          minX = pos.x < minX ? pos.x : minX
          maxX = pos.x > maxX ? pos.x : maxX
          minY = pos.y < minY ? pos.y : minY
          maxY = pos.y > maxY ? pos.y : maxY
        }
      }
      //首先我们需要取得该数组在横坐标和纵坐标的最大值和最小值，根据这四个点算出一个四边型，
      //首先判断目标坐标点是否在这个四边型之内，如果在这个四边型之外，那可以跳过后面较为复杂的计算，直接返回false。
      if (event.layerX < minX || event.layerX > maxX || event.layerY < minY || event.layerY > maxY) {
        xx = false
      } else {
        xx = pnpoly(len, event.layerX, event.layerY)
        console.log(xx)
      }
      if (xx) {
        if (xx === 1) {
          text.value = "点" + event.layerX + "," + event.layerY + "在多边形上"
        } else {
          text.value = "点" + event.layerX + "," + event.layerY + "在多边形内"
        }
      } else {
        text.value = "点" + event.layerX + "," + event.layerY + "不在多边形内"
      }
    }


    onMounted(async () => {
      await nextTick()
      polygon = document.getElementById("polygon")
    })

    return {
      text,
      getPoint
    }

  }
}
</script>

<style lang="scss" scoped>
.within-polygon-container{
  padding:15px;
  text-align: center;

  .show-text{
    padding: 15px;
  }

  .show-svg{
    box-shadow: 0px 0px 5px rgba(0,0,0,.2);
    border-radius: 5px;
  }
}
</style>