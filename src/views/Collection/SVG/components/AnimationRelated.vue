<template>
  <div class="animation-related-container flex-box">
    <div class="flex-item-auto">
      <svg width="60" height="80">
        <defs>
          <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="60"
            height="670"
          >
            <image
              xlink:href="https://cn.vuejs.org/images/logo.svg"
              x="0"
              y="0"
              width="60"
              height="80"
              style="margin-top: 210px"
            />
          </pattern>
        </defs>
        <polygon
          fill="url(#img1)"
          stroke-width="3"
          points="0,-80 60,-80 60,0 60,80 0,80 0,0"
        >
          <animate
            id="anim1_1"
            attributeType="XML"
            attributeName="points"
            begin="0s"
            dur="1s"
            repeatCount="indefinite"
            from="0,-80 60,-80 60,-80 0,0 0,-80"
            to="0,-80 60,-80 60,80 0,160 0,80"
            fill="freeze"
          ></animate>
        </polygon>
      </svg>
    </div>
    <div class="flex-item-auto">
      <svg width="60" height="80">
        <defs>
          <pattern
            id="img2"
            patternUnits="userSpaceOnUse"
            width="60"
            height="80"
          >
            <image
              xlink:href="https://cn.vuejs.org/images/logo.svg"
              x="0"
              y="0"
              width="60"
              height="80"
            />
          </pattern>
        </defs>
        <polygon
          fill="url(#img2)"
          stroke-width="3"
          points="0,-80 60,-80 60,0 60,80 0,80 0,0"
        >
          <animate
            id="anim1_2"
            attributeType="XML"
            attributeName="points"
            begin="0s"
            dur="1s"
            repeatCount="indefinite"
            from="0,160 60,80 60,160 0,160 0,160"
            to="0,0 60,-80 60,160 0,160 0,0"
            fill="freeze"
          ></animate>
        </polygon>
      </svg>
    </div>
    <div class="flex-item-auto"></div>
  </div>
</template>

<script>
export default {
  name: 'AnimationRelated'
}
</script>

<style lang="scss" scoped>
.animation-related-container{
  justify-content: space-between;
  flex-wrap: wrap;

  .flex-item-auto{
    width: auto;
  }
}
</style>