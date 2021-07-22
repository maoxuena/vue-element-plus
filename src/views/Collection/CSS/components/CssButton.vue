<template>
  <div class="css-button-page">
    <div class="btn-style btn-style-1">      
      <div class="btn-container">
        <button>
          <span class="text">登录</span>
          <div class="icon-container">
            <div class="icon icon--left">
              <svg>
                <use xlink:href="#arrow-right"></use>
              </svg>
            </div>
            <div class="icon icon--right">
              <svg>
                <use xlink:href="#arrow-right"></use>
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div class="btn-container">
        <button>
          <span class="text">注册</span>
          <div class="icon-container">
            <div class="icon icon--left">
              <svg>
                <use xlink:href="#arrow-right"></use>
              </svg>
            </div>
            <div class="icon icon--right">
              <svg>
                <use xlink:href="#arrow-right"></use>
              </svg>
            </div>
          </div>
        </button>
      </div>
      <!-- 按钮 箭头 图标 -->
      <svg style="display: none;">
        <symbol id="arrow-right" viewBox="0 0 20 10">
          <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
        </symbol>
      </svg>
    </div>
    <div class="btn-style btn-style-2"> 
      <p>幽灵按钮</p> 
      <div class="btn-container" :style="'background-image: url('+require('@/assets/images/hoverEffect/5.jpg')+')'">
        <div class="mark"></div>
        <div class="link link-position">
          <div class="icon">
            <svg-icon icon-class="customer-service"></svg-icon>
          </div>
          <div class="button">
            <span class="line line-top"></span>
            <span class="line line-left"></span>
            <span class="line line-right"></span>
            <span class="line line-bottom"></span>
            service
            <div class="icon-right">
              <svg>
                <use xlink:href="#arrow-right"></use>
              </svg>
            </div>
          </div>
          <div class="tip">
            <em>tips: customer service</em>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'CssButton'
  }
</script>

<style lang="scss" scoped>
.btn-style{
  padding-bottom: 20px;

  &.btn-style-1{
    .btn-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--bg);

      &:nth-child(1) {
        --btn-bg: #da0000;
        --bg: #f22c3a;
      }

      &:nth-child(2) {
        --btn-bg: #fac300;
        --bg: #fc6100;
      }    

      button {
        --width: 180px;
        --height: 60px;
        border: 0;
        position: relative;
        min-width: var(--width);
        min-height: var(--height);
        border-radius: var(--height);
        color: #fff;
        font-size:18px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.3);
        cursor: pointer;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 1rem;
        
        .text,.icon-container {
          position: relative;
          z-index: 2;
        }

        .icon-container {
          --icon-size: 25px;
          position: relative;
          width: var(--icon-size);
          height: var(--icon-size);
          margin-left: 15px;
          transition: transform 500ms ease;

          .icon {
            position: absolute;
            left: 0;
            top: 0;
            width: var(--icon-size);
            height: var(--icon-size);
            transition: transform 500ms ease, opacity 250ms ease;

            svg {
              width: 100%;
              height: 100%;
              fill: #fff;
            }
          }

          .icon--left {
            transform: translateX(-200%);
            opacity: 0;
          }
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: var(--btn-bg);
          border-radius: var(--height);
          z-index: 1;
          transition: transform 500ms ease;
        }

        &:hover{
          &::after {
            transform: translateX(65%);
          }

          .icon-container {
            transform: translateX(125%);

            .icon--left {
              transform: translateX(0);
              opacity: 1;
            }

            .icon--right {
              transform: translateX(200%);
              opacity: 0;
            }
          }
        }
      }
    }
  }

  &.btn-style-2{
    .btn-container{
      padding: 100% 100% 0 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;

      .mark{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background:rgba(0, 0, 0, 0.5);
      }

      .link-position{
        position: absolute;
        z-index: 99;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
      }

      .link{
        color: #fff;
        width: 160px;

        .icon{
          text-align: center;
          font-size: 128px;
          padding: 20px 0;
          transition: 0.2s linear;
          -ms-transition: 0.2s linear;
          -webkit-transition: 0.2s linear;
          -o-transition: 0.2s linear;
          -moz-transition: 0.2s linear;

          &:hover{
            transform: rotate(360deg) scale(1.2);
            -ms-transform: rotate(360deg) scale(1.2);
            -webkit-transform: rotate(360deg) scale(1.2);
            -o-transform: rotate(360deg) scale(1.2);
            -moz-transform: rotate(360deg) scale(1.2);
          }
        }

        .button{
          position: relative;
          height: 50px;
          line-height: 50px;
          color: #2dcb70;
          text-transform: uppercase;
          font-weight: bold;
          border: 2px solid rgba(255, 255, 255, 0.8);
          cursor: pointer;
          padding-left: 20px;

          .icon-right{
            font-size: 14px;
            color: #fff;
            width: 24px;
            height: 24px;
            line-height: 24px;
            position: absolute;
            right: 20px;
            top: 13px;
            transition: 0.4s ease;
            -ms-transition: 0.4s ease;
            -webkit-transition: 0.4s ease;
            -o-transition: 0.4s ease;
            -moz-transition: 0.4s ease;

            svg{
              width: 100%;
              height: 100%;
              fill: #2dcb70;
            }
          }

          .line{
            position: absolute;
            display: block;
            background: none;
            transition: 0.4s ease;
            -ms-transition: 0.4s ease;
            -webkit-transition: 0.4s ease;
            -o-transition: 0.4s ease;
            -moz-transition: 0.4s ease;
          }

          .line-top{
            height: 2px;
            width: 0px;
            left: -110%;
            top: -2px;
          }

          .line-bottom{
            height: 2px;
            width: 0px;
            right: -110%;
            bottom: -2px;
          }

          .line-left{
            height: 0px;
            width: 2px;
            left: -2px;
            bottom: -110%;
          }

          .line-right{
            height: 0px;
            width: 2px;
            right: -2px;
            top: -110%;
          }

          &:hover{
            border: 2px solid rgba(255, 255, 255, 1);
            
            .icon-right{
              right: 10px;
            }

            .line{
              background-color: #fff;
            }

            .line-top{
              width: calc(100% + 2px);
              left: -2px;
            }

            .line-bottom{
              width: calc(100% + 2px);
              right: -2px;
            }

            .line-left{
              height: calc(100% + 2px);
              bottom: -2px;
            }

            .line-right{
              height: calc(100% + 2px);
              top: -2px;
            }
          }
        }

        .tip{
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          padding: 0 14px;
          height: 35px;
          line-height: 35px;
          background-color: #2dcb70;
          color: #fff;
          font-size: 16px;
          font-weight: normal;
          text-transform: none;
          margin: 0 auto;
          border-radius: 5px;
          opacity: 0;
          transition: 0.4s ease;
          -ms-transition: 0.4s ease;
          -webkit-transition: 0.4s ease;
          -o-transition: 0.4s ease;
          -moz-transition: 0.4s ease;

          em{
            font-style: none;
            white-space: nowrap;
          }

          span{
            position: absolute;
            width: 0;
            height: 0;
            overflow: hidden;
            border: 7px solid transparent;
            border-top-color: #2dcb70;
            left: 50%;
            margin-left: -3px;
            bottom: -13px;
          }

        }

        &:hover{
          .tip{
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>