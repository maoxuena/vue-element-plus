<template>
  <div class="tai-ji-container">
    <div class="tai-ji"></div>
  </div>
</template>

<script>
export default {
  name: 'TaiJi'
}
</script>

<style lang="scss" scoped>
.tai-ji-container {
  background-color: #a8a8a8;
}

.tai-ji {
  position: absolute;
  top: 100px;
  left: 40%;
  width: 0;
  height: 400px;
  border-radius: 50%;
  border-left: black 200px solid;
  border-right: white 200px solid;
  box-shadow: 1px 1px 2px black;
  animation: rotate 2s linear infinite;
  transform: rotate(0);

  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    background-color: white;
    border: black 70px solid;
    border-radius: 50%;
    transform: translate(-50%, 0);
  }

  &::before {
    content: "";
    display: block;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    background-color: black;
    border: white 70px solid;
    border-radius: 50%;
    transform: translate(-50%, 0);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>