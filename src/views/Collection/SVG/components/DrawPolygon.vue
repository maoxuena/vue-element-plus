<template>
  <!-- 未完成，功能上有bug -->
  <div class="draw-polygon-container">
    <svg
      id="draw-polygon-svg"
      @mousedown="createCircle($event)"
      width="600"
      height="600"
    ></svg>
    <div class="path-text">
      <el-button @click="createPath">生成路径</el-button>
      <el-button @click="clearPath">清空</el-button>
      <p>{{pathText}}</p>
      </div>
  </div>
</template>

<script>
import { nextTick, onMounted, ref } from 'vue';
export default {
  name: 'DrawPolygon',
  setup () {
    const pathText = ref('')
    let path = [];
    let k = 0;
    let g = 0;
    let circles = document.getElementsByTagName('circle');
    let svg
    let hasPush = false
    let nvert = 0

    const createCircle = (ev) => {
      console.log(ev)
      let ce = ev || event;
      let cx = ce.offsetX;
      let cy = ce.offsetY;
      let flag = ev.target.id.split('_')[0];
      if (flag != 'c') {
        drawCircle(cx, cy, k);
        nvert = path.length;
        hasPush = false;
        for (let i = 0, j = nvert - 1; i < nvert; j = i++) {
          if (
            path[i][0] > cx != path[j][0] > cx &&
            path[i][1] > cy != path[j][1] > cy
          ) {
            g = i;
            path.splice(i, 0, [cx, cy]);
            hasPush = true;
            break;
          }
        }
        console.log(hasPush);
        if (!hasPush) {
          path.push([cx, cy]);
        } else {

          let tempx = circles[circles.length - 1].getAttribute('cx');
          let tempy = circles[circles.length - 1].getAttribute('cy');

          for (let i = circles.length - 1; i > g; i--) {
            circles[i].setAttribute('cx', circles[i - 1].getAttribute('cx'));
            circles[i].setAttribute('cy', circles[i - 1].getAttribute('cy'));
          }

          circles[g].setAttribute('cx', tempx);
          circles[g].setAttribute('cy', tempy);
        }

        drawPolygon(path);
        k++;
      }
    }
    const drawPolygon = (path) => {
      let p = document.getElementById('p');
      p.setAttribute('points', path.join(' '));
    }
    const drawCircle = (px, py, i) => {
      let c = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );
      c.setAttribute('id', 'c_' + i);
      c.setAttribute('r', '5');
      c.setAttribute('cx', px);
      c.setAttribute('cy', py);
      c.setAttribute('fill', 'rgb(255,0,0)');
      c.setAttribute('stroke-width', '1');
      c.setAttribute('stroke', 'black');
      c.onmousedown = function () {
        drag(c);
      };
      c.onmouseup = function () {
        //console.log("up");
        svg.onmousemove = null;
      };
      svg.appendChild(c);
    }

    const drag = (c) => {
      svg.onmousemove = function (ev) {
        let e = ev || event;
        let x = e.offsetX || e.layerX;
        let y = e.offsetY || e.layerY;
        c.setAttribute('cx', '' + x);
        c.setAttribute('cy', '' + y);
        if (e.target.id.split('_')[0] == 'c') {
          console.log(ev.target.id.split('_')[1]);
          path[ev.target.id.split('_')[1]] = [x, y];
          drawPolygon(path);
        }
      };
    }

    onMounted(async () => {
      await nextTick()
      svg = document.getElementById("draw-polygon-svg")
      let p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      p.setAttribute('id', 'p');
      p.setAttribute('stroke', 'black');
      p.setAttribute('fill', 'none');
      p.setAttribute('points', path.join(' '));
      svg.appendChild(p);
    })

    const createPath = () => {
      pathText.value = path.join(' ')
    }

    
    const clearPath = () => {
      let clearP = document.getElementById("p");
      clearP.points.clear();
      pathText.value = ''
      path = []
    }

    return {
      pathText,
      createPath,
      clearPath,
      createCircle
    }
  }
}
</script>

<style lang="scss" scoped>
.draw-polygon-container{
  svg {
    background: #ddd;
  }
}
</style>