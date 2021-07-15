<template>
  <!-- 高德地图 -->
  <div class="a-map">
    <!-- 地图 -->
    <div id="container" class="amap-container"></div>
    <div class="btn-box">
      <el-button @click="startAnimation">开始动画</el-button>
      <el-button @click="pauseAnimation">暂停动画</el-button>
      <el-button @click="resumeAnimation">继续动画</el-button>
      <el-button @click="stopAnimation">停止动画</el-button>
    </div>    
    <div class="btn-box">
      <el-button @click="startDrawPolygon">绘制Polygon</el-button>
      <el-button @click="endDrawPolygon">完成绘制</el-button>
    </div>
    <!-- 使用方法 -->
    <div class="use-method">
      <pre>
      一、直接引用高德地图 SDK
      1. 在 public 文件夹下的 index.html 中加入
      <code>
        &lt;script type="text/javascript" src="http://webapi.amap.com/maps?v=1.4.4&key=你申请的key"&gt;&lt;/script&gt;
      </code>
      2. 在 vue.config.js 文件中配置 externals
      <code>
        module.exports = {
          configureWebpack: {
            externals: {
              'AMap': 'AMap' // 高德地图配置
            }
          }
        }
      </code>
      </pre>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap' // 引入高德地图
import { onMounted } from 'vue'
export default {
  name: 'AMap',
  setup () {
    let map = {} // 地图
    const zoom = 10 // 地图缩放级别
    const center = [121.558196, 29.908339] // 指定地图中心点
    const style = '2d47d18dde35a5d2312c7863a2b0406a' // 主题样式
    let startMarker = {}
    let endMarker = {}
    let polyline = {}
    const markers = [] // 点集合
    const list = [
      {
        lng: 121.55220514500,
        lat: 29.84561475200,
        content: 'aaa',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.43363798300,
        lat: 29.85925167100,
        content: 'bbb',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.64516490500,
        lat: 29.86009157200,
        content: 'ccc',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.89114340293699,
        lat: 29.86208615376387,
        content: 'ddd',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.303843,
        lat: 29.983412,
        content: 'eee',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.58694444,
        lat: 29.758414248,
        content: 'fff',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.472644,
        lat: 29.231706,
        content: 'ggg',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.506377,
        lat: 29.245105,
        content: 'hhh',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.392735,
        lat: 29.083714,
        content: 'iii',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.0138,
        lat: 29.0436,
        content: 'jjjj',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.95,
        lat: 29.27,
        content: 'kkkk',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.11,
        lat: 29.09,
        content: 'lll',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.51,
        lat: 29.83,
        content: 'mmm',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.77,
        lat: 29.3,
        content: 'nnnn',
        url: require('@/assets/images/point.png')
      },
      {
        lng: 121.16,
        lat: 29.34,
        content: 'oooo',
        url: require('@/assets/images/point.png')
      }
    ]

    /**
     * 地图初始化
     */
    const init = () => {
      map = new AMap.Map('container', {
        // showLabel: false, // 不显示地图文字标记
        center: center,
        resizeEnable: true,
        zoom: zoom
      })
      map.setMapStyle('amap://styles/' + style)
      map.setFeatures(['bg', 'road', 'building', 'point']) // 地图显示信息：'bg', 'road', 'building', 'point'
    }

    /**
     * 处理数据
     */
    const dataHandle = () => {
      const lnglats = list.map(item=>[item.lng, item.lat])
      console.log(lnglats)
      convertFrom(lnglats,'gps')
    }

    /**
     * 创建点
     */
    const createPoint = (data) => {
      let cluster
      list.map((item,index) => {
        // 海量生成marker点
        let marker = new AMap.Marker({
          position: new AMap.LngLat(data[index].lng, data[index].lat),
          title: item.title,
          content: `<div><img src="${item.url}"></img></div>`,
          offset: new AMap.Pixel(-5, -5)
        })
        let content = `<div style="width:200px;height:50px;">${item.content},${item.lng},${item.lat}<div>
                         <a href="${item.url}" />详情</div></div>`
        content.replace(/undefined/g, '')
        // 窗体信息
        let infoWindow = new AMap.InfoWindow({
          content: content, // 使用默认信息窗体框样式，显示信息内容
          offset: new AMap.Pixel(0, -10)
        })
        // 监听marker的点击事件
        AMap.event.addListener(marker, 'click', function (e) {
          console.log(e)
          infoWindow.open(
            map,
            // 窗口信息的位置
            marker.getPosition(data[index].lng, data[index].lat)
          )
        })
        markers.push(marker)
        // 添加监听事件，当前缩放级别
        AMap.event.addListener(map, 'zoomend', function () {
          let zoom = map.getZoom()
          console.log(zoom)
          // 关闭信息窗体
          map.clearInfoWindow(infoWindow)
        })
      })
      if (cluster) {
        cluster.setMap(null)
      }
      // 点聚合样式
      // let count = markers.length // 点数量
      // let _renderClusterMarker = renderClusterMarker(count) // 自定义绘制
      cluster = new AMap.MarkerClusterer(map, markers, {
        // renderClusterMarker: _renderClusterMarker,
        gridSize: 80
      })
    }

    /**
     * 创建信息窗体
     */
    const infoWindow = () => {
    }

    /**
     * 点聚合
     * 使用renderClusterMarker属性可实现聚合点的完全自定义绘制
     */
    const renderClusterMarker = (count) => {
      return context => {
        let factor = Math.pow(context.count / count, 1 / 18) // Math.pow(a,b)方法获得值的类型是double型，含义是a的b次方
        let div = document.createElement('div')
        let Hue = 180 - factor * 180
        let bgColor = 'hsla(' + Hue + ',100%,50%,0.7)' // 背景颜色
        let fontColor = 'hsla(' + Hue + ',100%,20%,1)' // 字体颜色
        let borderColor = 'hsla(' + Hue + ',100%,40%,1)' // 边框颜色
        let shadowColor = 'hsla(' + Hue + ',100%,50%,1)' // 阴影颜色
        div.style.backgroundColor = bgColor
        let size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20)
        div.style.width = div.style.height = size + 'px'
        div.style.border = 'solid 1px ' + borderColor
        div.style.borderRadius = size / 2 + 'px'
        div.style.boxShadow = '0 0 1px ' + shadowColor
        div.innerHTML = context.count
        div.style.lineHeight = size + 'px'
        div.style.color = fontColor
        div.style.fontSize = '14px'
        div.style.textAlign = 'center'
        context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2))
        context.marker.setContent(div)
      }
    }

    /**
     * 其他坐标系转高德坐标系
     * @param { number[] } locations 坐标点
     * @param { string } coordsys 原坐标系
     * GPS 坐标：coordsys=gps
     * 百度坐标：coordsys=baidu
     * 图吧坐标：coordsys=mapbar
     * 不进行转换：coordsys=autonavi
     */
    const convertFrom = (locations, coordsys, type = 'point') => {
      AMap.convertFrom(locations, coordsys, function(status, result) {
        if (result.info === 'ok') {
          if(type === 'point'){
            createPoint(result.locations)
          }else if(type === 'path'){
            createLine(result.locations)
            createMoveMarker(result.locations[0])
            lineArr = result.locations
          }
        }else{
          console.log(result==='INVALID_PARAMS'?'无效的参数':result)
        }
      })
    }

    /**
     * 创建轨迹线条
     */
    const createLine = (path) => {
      map.remove(polyline)
      polyline = new AMap.Polyline({
        path: path,
        strokeColor: '#28F', // 线条颜色
        strokeWeight: 8, // 线宽
        strokeOpacity: 0.8, // 线透明度
        strokeStyle: 'solid', // 线样式
        lineJoin: 'round', // 折线拐点连接处样式
        showDir: true// 是否显示箭头
      })
      map.add(polyline)
      map.setFitView()
      addLineMarker(path)
    }

    /**
     * 添加路径的起点与终点
     */
    const addLineMarker = (path) => {
      map.remove([startMarker, endMarker])
      const start = path[0]
      const end = path[path.length - 1]
      const startIcon = new AMap.Icon({
        size: new AMap.Size(25, 34),
        image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
        imageSize: new AMap.Size(135, 40),
        imageOffset: new AMap.Pixel(-9, -3)
      })
      startMarker = new AMap.Marker({
        position: start,
        icon: startIcon,
        offset: new AMap.Pixel(-13, -30)
      })
      const endIcon = new AMap.Icon({
        size: new AMap.Size(25, 34),
        image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
        imageSize: new AMap.Size(135, 40),
        imageOffset: new AMap.Pixel(-95, -3)
      })
      endMarker = new AMap.Marker({
        position: end,
        icon: endIcon,
        offset: new AMap.Pixel(-13, -30)
      })
      map.add([startMarker, endMarker])
    }

    /**
     * 创建移动点
     */
    let marker // 移动点
    let lineArr // 转换后路径
    let passedPolyline

    const createMoveMarker = (position) => {
      marker = new AMap.Marker({
          map: map,
          position: position,
          icon: "https://webapi.amap.com/images/car.png",
          offset: new AMap.Pixel(-26, -13),
          autoRotation: true,
          angle:-90,
      })

      passedPolyline = new AMap.Polyline({
        map: map,
        // path: lineArr,
        strokeColor: "#AF5",  //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6,      //线宽
        // strokeStyle: "solid"  //线样式
      })
      
      marker.on('moving', function (e) {
          passedPolyline.setPath(e.passedPath)
      })
    }

    /**
     * 开始动画
     */
    const startAnimation = () => {
        marker.moveAlong(lineArr, 2000)
    }

    /**
     * 暂停动画
     */
    const pauseAnimation = () => {
        marker.pauseMove()
    }

    /**
     * 继续动画
     */
    const resumeAnimation = () => {
        marker.resumeMove()
    }

    /**
     * 停止动画
     */
    const stopAnimation = () => {
        marker.stopMove()
    }

    let beginPoints = []
    let beginMarks = []
    let beginNum = 0
    // let polygonEditor = ''
    // let Polygon
    let clickListener

    const startDrawPolygon = () => {
      clickListener = AMap.event.addListener(map, "click", function(e){
        beginMarks.push(addMarker(e.lnglat))
        beginPoints.push(e.lnglat)
        beginNum++
        console.log(beginNum)
      })

      map.on("dblclick", function(){
        createPolygon(beginPoints)
        clearMarks()	
      })
    }

    const endDrawPolygon = () => {
      AMap.event.removeListener(clickListener)
    }

    const createPolygon = (arr) => {
      const polygon = new AMap.Polygon({
        map: map,
        path: arr,
        strokeColor: "#0000ff",
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: "#f5deb3",
        fillOpacity: 0.35
      })
      console.log(polygon)
      return polygon
    }

    const clearMarks = () => {
        map.remove(beginMarks)
    }

    // 实例化点标记
    const addMarker = (lnglat) => {        
      const marker = new AMap.Marker({
          icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: lnglat
      })
      marker.setMap(map)
      return marker
    }

    onMounted(() => {
      init()
      dataHandle()
      const pathArr = [
        [121.64340293699,29.808615376387],
        [121.54516490500,29.860091587200],
        [121.48694543444,29.758764714248],
        [121.45220514500,29.845614785200],
        [121.43363798300,29.859259167100],
      ]
      convertFrom(pathArr,'gps','path')
    })

    return {
      infoWindow,
      renderClusterMarker,
      startAnimation,
      pauseAnimation,
      resumeAnimation,
      stopAnimation,
      startDrawPolygon,
      endDrawPolygon,
    }
  }
}
</script>

<style lang="scss" scoped>
.amap-container {
  height: 700px;
}
.btn-box{
  padding: 20px 0;
}
</style>
