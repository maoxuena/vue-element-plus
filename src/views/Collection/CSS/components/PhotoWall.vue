<template>
  <div class="photo-wall-page">
    <img class="pic pic1" :src="require('@/assets/images/hoverEffect/1.jpg')">
    <img class="pic pic2" :src="require('@/assets/images/hoverEffect/2.jpg')">
    <img class="pic pic3" :src="require('@/assets/images/hoverEffect/3.jpg')">
    <img class="pic pic4" :src="require('@/assets/images/hoverEffect/4.jpg')">
    <img class="pic pic5" :src="require('@/assets/images/hoverEffect/5.jpg')">
    <img class="pic pic6" :src="require('@/assets/images/hoverEffect/6.jpg')">
    <img class="pic pic7" :src="require('@/assets/images/hoverEffect/7.jpg')">
    <img class="pic pic8" :src="require('@/assets/images/hoverEffect/8.jpg')">
  </div>
</template>

<script>
  export default {
    name:'PhotoWall'
  }
</script>

<style lang="scss" scoped>
.photo-wall-page{
  height: 100%;
  width: 100%;
  position: relative;

  .pic{
    width: 160px;
  }

  img{
    padding: 10px 10px 15px;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 3px rgba(50,50,50,0.4);
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -ms-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
    position: absolute;
    z-index: 1;

    &:hover{
      box-shadow: 15px 15px 20px rgba(50,50,50,0.4);
      transform:rotate(0deg) scale(1.20);
      -webkit-transform:rotate(0deg) scale(1.20);
      z-index: 2;
    }
  }

  .pic1{
    left: 400px;
    top: 40px;
    transform:rotate(-5deg);
    -webkit-transform:rotate(-5deg);
  }

  .pic2{
    left: 200px;
    top: 50px;
    transform:rotate(-20deg);
    -webkit-transform:rotate(-20deg);
  }

  .pic3{
    bottom: 100px;
    right: 100px;
    transform:rotate(5deg);
    -webkit-transform:rotate(5deg);
  }

  .pic4{
    top: 200px;
    left: 300px;
    transform:rotate(-10deg);
    -webkit-transform:rotate(-10deg);
  }

  .pic5{
    left: 150px;
    top: 160px;
    transform:rotate(-10deg);
    -webkit-transform:rotate(-10deg);
  }

  .pic6{
    left: 50px;
    top: 100px;
    transform:rotate(10deg);
    -webkit-transform:rotate(10deg);
  }

  .pic7{
    right: 50px;
    top: 150px;
    transform:rotate(20deg);
    -webkit-transform:rotate(20deg);
  }

  .pic8{
    left: 100px;
    top: 350px;
    transform:rotate(5deg);
    -webkit-transform:rotate(5deg);
  }
}
</style>