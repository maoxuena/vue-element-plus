<template>
  <div class="little-crab-container">
    <div class="crab">
      <!--前爪子-->
      <div class="front-paws">
        <div class="front-paws-left">
          <div class="front-pl-left"></div>
          <div class="front-pl-right"></div>
          <div class="front-pl-down"></div>
        </div>
        <div class="front-paws-right">
          <div class="front-pr-left"></div>
          <div class="front-pr-right"></div>
          <div class="front-pr-down"></div>
        </div>
      </div>
      <!--眼睛-->
      <div class="eye">
        <div class="eye-left">
          <div class="eye-l-black"></div>
          <div class="eye-l-white"></div>
        </div>
        <div class="eye-right">
          <div class="eye-r-black"></div>
          <div class="eye-r-white"></div>
        </div>
      </div>
      <!--肚子-->
      <div class="belly">
        <div class="belly-con">
          <div class="mouth"></div>
        </div>
      </div>
      <!--小爪子-->
      <div class="little-paws">
        <div class="little-paws-left">
          <div class="little-pl-one">
            <div class="little-plo-left"></div>
            <div class="little-plo-right"></div>
          </div>
          <div class="little-pl-two">
            <div class="little-plt-left"></div>
            <div class="little-plt-right"></div>
          </div>
          <div class="little-pl-three">
            <div class="little-plth-left"></div>
            <div class="little-plth-right"></div>
          </div>
        </div>
        <div class="little-paws-right">
          <div class="little-pr-one">
            <div class="little-pro-left"></div>
            <div class="little-pro-right"></div>
          </div>
          <div class="little-pr-two">
            <div class="little-prt-left"></div>
            <div class="little-prt-right"></div>
          </div>
          <div class="little-pr-three">
            <div class="little-prth-left"></div>
            <div class="little-prth-right"></div>
          </div>
        </div>
      </div>
      <!--脚-->
      <div class="food">
        <div class="food-left">
          <div class="food-l-lineone"></div>
          <div class="food-l-linetwo"></div>
          <div class="food-l-bood"></div>
        </div>
        <div class="food-right">
          <div class="food-r-lineone"></div>
          <div class="food-r-linetwo"></div>
          <div class="food-r-bood"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LittleCrab'
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: content-box;
}

.little-crab-container {
  position: relative;
  top: 50px;

  .crab {
    position: relative;
    width: 534px;
    height: 457px;
    margin: 0 auto;
    cursor: pointer;

    .front-paws {
      .front-paws-left {
        position: absolute;
        top: 90px;
        left: 5px;

        .front-pl-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 92px;
          height: 50px;
          border-radius: 50px 50px 10px 10px;
          border: 8px solid #080a07;
          background: #41914a;
          -webkit-transform: rotate(-95deg);
          transition: all 0.5s;
        }

        .front-pl-right {
          position: absolute;
          top: 33px;
          left: 80px;
          width: 58px;
          height: 35px;
          border-radius: 35px 35px 10px 10px;
          border: 8px solid #080a07;
          background: #41914a;
          -webkit-transform: rotate(105deg);
          transition: all 0.5s;
        }

        .front-pl-down {
          position: absolute;
          top: 85px;
          left: 75px;
          width: 65px;
          height: 35px;
          background: transparent;
          border: 8px solid;
          border-color: transparent transparent #080a07 #080a07;
          border-radius: 5px;
          -webkit-transform: rotate(15deg);
        }
      }

      .front-paws-right {
        position: absolute;
        top: 8px;
        left: 215px;

        .front-pr-left {
          position: absolute;
          top: 30px;
          left: 200px;
          width: 92px;
          height: 50px;
          border-radius: 50px 50px 10px 10px;
          border: 8px solid #080a07;
          background: #41914a;
          -webkit-transform: rotate(90deg);
          transition: all 0.5s;
        }

        .front-pr-right {
          position: absolute;
          top: 63px;
          left: 153px;
          width: 58px;
          height: 35px;
          border-radius: 35px 35px 10px 10px;
          border: 8px solid #080a07;
          background: #41914a;
          -webkit-transform: rotate(-105deg);
          transition: all 0.5s;
        }

        .front-pr-down {
          position: absolute;
          top: 130px;
          left: 125px;
          width: 100px;
          height: 35px;
          background: transparent;
          border: 8px solid;
          border-color: transparent #080a07 #080a07 transparent;
          border-radius: 5px;
          -webkit-transform: rotate(-30deg);
        }
      }
    }

    .eye {
      position: absolute;
      top: 110px;
      left: 168px;

      .eye-left {
        position: absolute;
        top: 0;
        left: 0;
        width: 55px;
        height: 55px;
        border: 8px solid #080a07;
        border-radius: 50%;
        background: #fff;
        transition: all 0.5s;

        .eye-l-black {
          position: absolute;
          top: 0;
          left: 20px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #080a07;
        }

        .eye-l-white {
          position: absolute;
          top: 5px;
          left: 36px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #fff;
        }
      }

      .eye-right {
        position: absolute;
        top: 0;
        left: 120px;
        width: 55px;
        height: 55px;
        border: 8px solid #080a07;
        border-radius: 50%;
        background: #fff;
        transition: all 0.5s;

        .eye-r-black {
          position: absolute;
          top: 0;
          left: 0;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #080a07;
        }

        .eye-r-white {
          position: absolute;
          top: 5px;
          left: 5px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #fff;
        }
      }
    }

    .belly {
      position: absolute;
      top: 170px;
      left: 90px;
      width: 325px;
      height: 200px;
      border-radius: 210px 210px 50px 50px;
      border: 8px solid #080a07;
      background: #8ae34c;
      overflow: hidden;
      z-index: 1;

      .belly-con {
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 309px;
        height: 147px;
        border-radius: 400px 400px 10px 10px;
        border: 8px solid transparent;
        background: #fff;

        .mouth {
          position: absolute;
          bottom: 20px;
          left: 98px;
          width: 100px;
          height: 80px;
          border: 8px solid;
          border-color: transparent #080a07 #080a07 #080a07;
          border-radius: 82px 82px 100px 100px;
        }
      }
    }

    .little-paws {
      position: absolute;
      top: 220px;
      left: 30px;

      .little-paws-left {
        position: absolute;
        top: 0;
        left: 0;

        .little-pl-one {
          position: absolute;
          top: 0;
          left: 0;

          .little-plo-left {
            position: absolute;
            top: 2px;
            left: -2px;
            width: 8px;
            height: 40px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(50deg);
          }

          .little-plo-right {
            position: absolute;
            top: -14px;
            left: 45px;
            width: 8px;
            height: 75px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(110deg);
          }
        }

        .little-pl-two {
          position: absolute;
          top: 35px;
          left: -5px;

          .little-plt-left {
            position: absolute;
            top: 4px;
            left: -5px;
            width: 8px;
            height: 35px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(45deg);
          }

          .little-plt-right {
            position: absolute;
            top: -14px;
            left: 35px;
            width: 8px;
            height: 75px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(110deg);
          }
        }

        .little-pl-three {
          position: absolute;
          top: 74px;
          left: 40px;

          .little-plth-left {
            position: absolute;
            top: 3px;
            left: -45px;
            width: 8px;
            height: 25px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(35deg);
          }

          .little-plth-right {
            position: absolute;
            top: -14px;
            left: -10px;
            width: 8px;
            height: 65px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(110deg);
          }
        }
      }

      .little-paws-right {
        position: absolute;
        top: -28px;
        left: 403px;

        .little-pr-one {
          position: absolute;
          top: 0;
          left: 0;

          .little-pro-left {
            position: absolute;
            top: 0;
            left: -3px;
            width: 8px;
            height: 80px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(50deg);
          }

          .little-pro-right {
            position: absolute;
            top: -3px;
            left: 47px;
            width: 8px;
            height: 50px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(110deg);
          }
        }

        .little-pr-two {
          position: absolute;
          top: 35px;
          left: -5px;

          .little-prt-left {
            position: absolute;
            top: 10px;
            left: 12px;
            width: 8px;
            height: 65px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(45deg);
          }

          .little-prt-right {
            position: absolute;
            top: 8px;
            left: 47px;
            width: 8px;
            height: 35px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(110deg);
          }
        }

        .little-pr-three {
          position: absolute;
          top: 74px;
          left: 40px;

          .little-prth-left {
            position: absolute;
            top: 13px;
            left: -30px;
            width: 8px;
            height: 65px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(35deg);
          }

          .little-prth-right {
            position: absolute;
            top: 7px;
            left: 1px;
            width: 8px;
            height: 35px;
            background: #080a07;
            border-radius: 10px;
            -webkit-transform: rotate(110deg);
          }
        }
      }
    }

    .food {
      position: absolute;
      top: 350px;
      left: 0;

      .food-left {
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.5s;
        transform-origin: 124px 29px;

        .food-l-lineone {
          position: absolute;
          top: 0;
          left: 80px;
          width: 8px;
          height: 75px;
          background: #080a07;
          border-radius: 10px;
          -webkit-transform: rotate(80deg);
        }

        .food-l-linetwo {
          position: absolute;
          top: 38px;
          left: 50px;
          width: 8px;
          height: 35px;
          background: #080a07;
          border-radius: 10px;
          -webkit-transform: rotate(-10deg);
        }

        .food-l-bood {
          position: absolute;
          top: 65px;
          left: 15px;
          width: 40px;
          height: 20px;
          border-radius: 50%;
          border: 8px solid #080a07;
          background: #41914a;
          -webkit-transform: rotate(-30deg);
        }
      }

      .food-right {
        position: absolute;
        top: -5px;
        left: 400px;
        transition: all 0.5s;
        transform-origin: 6px 45px;

        .food-r-lineone {
          position: absolute;
          top: 0;
          left: 35px;
          width: 8px;
          height: 75px;
          background: #080a07;
          border-radius: 10px;
          -webkit-transform: rotate(95deg);
        }

        .food-r-linetwo {
          position: absolute;
          top: 38px;
          left: 70px;
          width: 8px;
          height: 35px;
          background: #080a07;
          border-radius: 10px;
          -webkit-transform: rotate(-10deg);
        }

        .food-r-bood {
          position: absolute;
          top: 65px;
          left: 70px;
          width: 40px;
          height: 20px;
          border-radius: 50%;
          border: 8px solid #080a07;
          background: #41914a;
          -webkit-transform: rotate(35deg);
        }
      }
    }

    &:hover {
      .front-paws {
        .front-paws-left {
          .front-pl-left {
            transform-origin: 57px 22px;
            -webkit-transform: rotate(-80deg);
          }

          .front-pl-right {
            transform-origin: 38px 21px;
            -webkit-transform: rotate(100deg);
          }
        }

        .front-paws-right {
          .front-pr-left {
            transform-origin: 47px 9px;
            -webkit-transform: rotate(66deg);
          }

          .front-pr-right {
            transform-origin: 36px 28px;
            -webkit-transform: rotate(-116deg);
          }
        }
      }

      .eye {
        .eye-left {
          -webkit-transform: rotate(60deg);
        }

        .eye-right {
          -webkit-transform: rotate(-60deg);
        }
      }

      .food {
        .food-left {
          -webkit-transform: rotate(-30deg);
        }
        .food-right {
          -webkit-transform: rotate(30deg);
        }
      }
    }
  }
}
</style>