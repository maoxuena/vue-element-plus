<template>
  <div class="css-button-page">
    <div class="btn-style-1">      
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
      <svg style="display: none;">
        <symbol id="arrow-right" viewBox="0 0 20 10">
          <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
        </symbol>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name:'CssButton'
  }
</script>

<style lang="scss" scoped>
.btn-style-1{
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
</style>