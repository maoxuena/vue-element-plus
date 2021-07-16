<template>
  <div class="slide-page">
    <p class="codrops-demos">
      <span v-for="(item, index) in typeList" 
       :key="index"
       @click="select(index)" 
       :class="{'current-demo':index===type}">{{item}}</span>
    </p>
    <section class="cr-container" :class="'demo'+type">
      <!-- 面板 -->
      <div class="cr-bgimg" :style="activeStyle">
        <div class="cr-bgimg-item">
          <span v-for="(item, index) in imgList" 
          :key="index" 
          :style="'background-image:url('+item.url+')'"
          :class="index===active?'on on'+type:''"></span>
        </div>
        <div class="cr-bgimg-item">
          <span v-for="(item, index) in imgList" 
          :key="index" 
          :style="'background-image:url('+item.url+')'"
          :class="index===active?'on on'+type:''"></span>
        </div>
        <div class="cr-bgimg-item">
          <span v-for="(item, index) in imgList" 
          :key="index" 
          :style="'background-image:url('+item.url+')'"
          :class="index===active?'on on'+type:''"></span>
        </div>
        <div class="cr-bgimg-item">
          <span v-for="(item, index) in imgList" 
          :key="index" 
          :style="'background-image:url('+item.url+')'"
          :class="index===active?'on on'+type:''"></span>
        </div>
      </div>  
      <!-- 标题 -->
      <div class="cr-titles">
        <h3 v-for="(item, index) in imgList" 
          :key="index" 
          :style="{opacity:index===active?1:0}">
          <span>{{item.title}}</span>
          <span>{{item.content}}</span>
        </h3>
      </div>
      <div class="dot-container">
        <span class="dot" 
          :class="{'current-dot':index===active}"
          v-for="(item, index) in imgList" 
          :key="index"
          @click="changeEven(index)">{{index+1}}</span>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name:'slide',
  setup(){
    const typeList = ref(['Demo1','Demo2','Demo3','Demo4'])
    const type = ref(0)
    const active = ref(0)
    const activeStyle = ref({
      'background-image':'url('+require('@/assets/images/slide/1.jpg')+')'
    })
    const imgList = ref([
      {
        url:require('@/assets/images/slide/1.jpg'),
        title:'Serendipity',
        content:'What you\'ve been dreaming of'
      },
      {
        url:require('@/assets/images/slide/2.jpg'),
        title:'Adventure',
        content:'Where the fun begins'
      },
      {
        url:require('@/assets/images/slide/3.jpg'),
        title:'Nature',
        content:'Unforgettable eperiences'
      },
      {
        url:require('@/assets/images/slide/4.jpg'),
        title:'Serenity',
        content:'When silence touches nature'
      }
    ])

    const select = (index) => {
      type.value = index
      active.value = 0  
    }

    const changeEven = (index) => {
      active.value = index        
      activeStyle.value = {
        'background-image':'url('+require('@/assets/images/slide/'+(index+1)+'.jpg')+')'
      }
    }

    return {
      typeList,
      type,
      active,
      imgList,
      activeStyle,
      select,
      changeEven
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-page{
  .codrops-demos{
    padding: 14px;
    text-align: center;

    span{
      display: inline-block;
      font-size: 11px;
      font-style: italic;
      width: 60px;
      height: 60px;
      margin: 0px 15px;
      line-height: 60px;
      border-radius: 50%;
      font-weight: 800;
      box-shadow: 1px 1px 1px rgba(0,0,0,0.05) inset;
      color: #fff;
      text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
      background: rgba(104,171,194,0.5);
      cursor: pointer;
      text-align: center;

      &.current-demo, &:hover{
        background: rgba(255,255,255,0.9);
        box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
      }    
      
      &.current-demo{
        color: rgba(104,171,194,1);
      }

      &:hover{
        background: #4fa2c4;
        color: #fff;
      }
    }
  }

  .cr-container{
    width: 600px;
    height: 400px;
    position: relative;
    margin: 0 auto;
    border: 20px solid #fff;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.1);    

    &.demo0{
      .cr-bgimg{
        .cr-bgimg-item{
          span{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: -140px;
            z-index: 2;
            text-indent: -9000px;
            -webkit-animation: slideOut 0.6s ease-in-out;
            -moz-animation: slideOut 0.6s ease-in-out;
            -o-animation: slideOut 0.6s ease-in-out;
            -ms-animation: slideOut 0.6s ease-in-out;
            animation: slideOut 0.6s ease-in-out;
          }
        }
      }
    }

    &.demo1{
      .cr-bgimg{
        .cr-bgimg-item{
          span{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 140px;
            z-index: 2;
            text-indent: -9000px;
            -webkit-animation: slideOutRight 0.6s ease-in-out;
            -moz-animation: slideOutRight 0.6s ease-in-out;
            -o-animation: slideOutRight 0.6s ease-in-out;
            -ms-animation: slideOutRight 0.6s ease-in-out;
            animation: slideOutRight 0.6s ease-in-out;
          }

          &:nth-child(even){
             span{
              -webkit-animation: slideOutLeft 0.6s ease-in-out;
              -moz-animation: slideOutLeft 0.6s ease-in-out;
              -o-animation: slideOutLeft 0.6s ease-in-out;
              -ms-animation: slideOutLeft 0.6s ease-in-out;
              animation: slideOutLeft 0.6s ease-in-out;
            }
          }

          &:nth-child(odd){
             span{
              left: -140px;
            }
          }
        }
      }
    }

    &.demo2{
      .cr-bgimg{
        .cr-bgimg-item{
          span{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 140px;
            z-index: 2;
            text-indent: -9000px;
            -webkit-animation: slideOutLeft 0.6s ease-in-out;
            -moz-animation: slideOutLeft 0.6s ease-in-out;
            -o-animation: slideOutLeft 0.6s ease-in-out;
            -ms-animation: slideOutLeft 0.6s ease-in-out;
            animation: slideOutLeft 0.6s ease-in-out;
          }

          &:nth-child(even) {
            span{
              -webkit-animation: slideOutRight 0.6s ease-in-out;
              -moz-animation: slideOutRight 0.6s ease-in-out;
              -o-animation: slideOutRight 0.6s ease-in-out;
              -ms-animation: slideOutRight 0.6s ease-in-out;
              animation: slideOutRight 0.6s ease-in-out;
            }
          }

          &:nth-child(odd){
             span{
              left: -140px;
            }
          }
        }
      }
    }

    &.demo3{
      .cr-bgimg{
        .cr-bgimg-item{
          span{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            -webkit-transform: scale(1.5);
            -moz-transform: scale(1.5);
            -o-transform: scale(1.5);
            -ms-transform: scale(1.5);
            transform: scale(1.5);
            opacity: 0;
            z-index: 2;
            text-indent: -9000px;
            -webkit-animation: scaleOut 0.6s ease-in-out;
            -moz-animation: scaleOut 0.6s ease-in-out;
            -o-animation: scaleOut 0.6s ease-in-out;
            -ms-animation: scaleOut 0.6s ease-in-out;
            animation: scaleOut 0.6s ease-in-out;
          }
        }
      }
    }

    .cr-bgimg{
      position: absolute;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 1;
      background-repeat: no-repeat;
      background-position: 0 0;

      .cr-bgimg-item{
        width: 140px;
        height: 100%;
        position: relative;
        float: left;
        overflow: hidden;
        background-repeat: no-repeat;

        span{
          &.on{
            -webkit-transition: left 0.5s ease-in-out;
            -moz-transition: left 0.5s ease-in-out;
            -o-transition: left 0.5s ease-in-out;
            -ms-transition: left 0.5s ease-in-out;
            transition: left 0.5s ease-in-out;
            -webkit-animation: none;
            -moz-animation: none;
            -o-animation: none;
            -ms-animation: none;
            animation: none;
            left: 0px !important;
            z-index: 10;
          }

          &.on3{
            -webkit-transition: -webkit-transform 0.5s ease-in-out, opacity 0.5s ease-in-out, z-index 0s linear 0.6s;
            -moz-transition: -moz-transform 0.5s ease-in-out, opacity 0.5s ease-in-out, z-index 0s linear 0.6s;
            -o-transition: -o-transform 0.5s ease-in-out, opacity 0.5s ease-in-out, z-index 0s linear 0.6s;
            -ms-transition: -ms-transform 0.5s ease-in-out, opacity 0.5s ease-in-out, z-index 0s linear 0.6s;
            transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out, z-index 0s linear 0.6s;
            -webkit-animation: none;
            -moz-animation: none;
            -o-animation: none;
            -ms-animation: none;
            animation: none;
            opacity: 1;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -o-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            z-index:10000;
          }
        }

        &:nth-child(1) {
          span{
            background-position: 0px 0px;
          }
        }

        &:nth-child(2) {
          span{
            background-position: -140px 0px;
          }
        }

        &:nth-child(3) {
          span{
            background-position: -280px 0px;
          }
        }

        &:nth-child(4) {
          span{
            background-position: -420px 0px;
          }
        }
      }
    }

    .cr-titles {
      h3{
        position: absolute;
        width: 100%;
        text-align: center;
        top: 50%;
        z-index: 10000;
        opacity: 0;
        color: #fff;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
        -webkit-transition: opacity 0.8s ease-in-out;
        -moz-transition: opacity 0.8s ease-in-out;
        -o-transition: opacity 0.8s ease-in-out;
        -ms-transition: opacity 0.8s ease-in-out;
        transition: opacity 0.8s ease-in-out;

        span{
          &:nth-child(1){
            font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
            font-size: 70px;
            display: block;
            letter-spacing: 7px;
          }

          &:nth-child(2){
            letter-spacing: 0px;
            display: block;
            background: rgba(104,171,194,0.9);
            font-size: 14px;
            padding: 10px;
            font-style: italic;
            font-family: Cambria, Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif;
          }
        }
      }
    }

    .dot-container{
      position: absolute;
      z-index: 999;
      bottom: 15px;
      left: 0;
      width: 100%;
      height: 34px;
      line-height: 34px;
      text-align: center;
      display: flex;

      .dot{
        cursor: pointer;
        position: relative;
        width: 25%;
        color: #fff;

        &::before{
          content:'';
          width: 34px;
          height: 34px;
          background: rgba(130,195,217,0.9);
          position: absolute;
          left: 50%;
          margin-left: -17px;
          border-radius: 50%;
          box-shadow: 0px 0px 0px 4px rgba(255,255,255,0.3);
          z-index:-1;
        }

        &::after{
          width: 1px;
          height: 360px;
          content: '';
          background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(100%,rgba(255,255,255,1)));
          background: -webkit-linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
          background:    -moz-linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
          background:     -ms-linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
          background:      -o-linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
          background:         linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
          position: absolute;
          bottom: -15px;
          right: 0px;
        }

        &:last-child{
          &::after{
            width: 0px;
          }
        }

        &.current-dot{
          color: #68abc2;

          &::before{
            background: #fff;
            box-shadow: 0px 0px 0px 4px rgba(104,171,194,0.6);
          }
        }
      }
    }
  }
}

@-webkit-keyframes slideOut{
	0%{ left: 0px; }
	100%{ left: 140px; }
}
@-moz-keyframes slideOut{
	0%{ left: 0px; }
	100%{ left: 140px; }
}
@-o-keyframes slideOut{
	0%{ left: 0px; }
	100%{ left: 140px; }
}
@-ms-keyframes slideOut{
	0%{ left: 0px; }
	100%{ left: 140px; }
}
@keyframes slideOut{
	0%{ left: 0px; }
	100%{ left: 140px; }
}

@-webkit-keyframes slideOutRight{
	0%{ left: 0px; }
	100%{ left: 140px; }
}
@-moz-keyframes slideOutRight{
	0%{ left: 0px; }
	100%{ left: 140px; }
}
@-o-keyframes slideOutRight{
	0%{ left: 0px; }
	100%{ left: 140px; }
}
@-ms-keyframes slideOutRight{
	0%{ left: 0px; }
	100%{ left: 140px; }
}
@keyframes slideOutRight{
	0%{ left: 0px; }
	100%{ left: 140px; }
}

@-webkit-keyframes slideOutLeft{
	0%{ left: 0px; }
	100%{ left: -140px; }
}
@-moz-keyframes slideOutLeft{
	0%{ left: 0px; }
	100%{ left: -140px; }
}
@-o-keyframes slideOutLeft{
	0%{ left: 0px; }
	100%{ left: -140px; }
}
@-ms-keyframes slideOutLeft{
	0%{ left: 0px; }
	100%{ left: -140px; }
}
@keyframes slideOutLeft{
	0%{ left: 0px; }
	100%{ left: -140px; }
}

@-webkit-keyframes scaleOut{
	0%{ -webkit-transform: scale(1); opacity: 1; }
	100%{ -webkit-transform: scale(1.5); opacity: 0; }
}
@-moz-keyframes scaleOut{
	0%{ -moz-transform: scale(1); opacity: 1; }
	100%{ -moz-transform: scale(1.5); opacity: 0; }
}
@-o-keyframes scaleOut{
	0%{ -o-transform: scale(1); opacity: 1; }
	100%{ -o-transform: scale(1.5); opacity: 0; }
}
@-ms-keyframes scaleOut{
	0%{ -ms-transform: scale(1); opacity: 1; }
	100%{ -ms-transform: scale(1.5); opacity: 0; }
}
@keyframes scaleOut{
	0%{ transform: scale(1); opacity: 1; }
	100%{ transform: scale(1.5); opacity: 0; }
}
</style>