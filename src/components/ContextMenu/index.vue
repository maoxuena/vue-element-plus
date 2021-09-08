<template>
  <transition name="fade">
    <div
      ref="contextMenu"
      class="context-menu"
      v-show="visible"
      :style="{width: width+'px', top: currentY+'px', left: currentX+'px'}">
      <ul>
        <context-menu-item
          v-for="item in data"
          :key="item.label"
          :data="item"
          :tip-show="tipShow"
          @action="action">
        </context-menu-item>
      </ul>
    </div>
  </transition>
</template>

<script>
import { onMounted, onBeforeUnmount, watch, ref, nextTick } from 'vue'
import ContextMenuItem from './item';
export default {
  name: 'ContextMenu',
  components: {
    ContextMenuItem
  },
  props: {
    width: {// 宽
      type: Number,
      default: 80
    },
    x: {// X坐标
      type: Number,
      default: 0
    },
    y: {// Y坐标
      type: Number,
      default: 0
    },
    data: {// 显示右键菜单的数据
      type: Array,
      default: () => []
    },
    visible: {// 是否显示右键菜单
      type: Boolean,
      default: false
    },
    tipShow: {// 是否显示提示
      type: Boolean,
      default: true
    }
  },
  setup (props, context) {
    const contextMenu = ref(null)
    const currentX = ref(0)
    const currentY = ref(0)

    watch(() => [props.x, props.y, props.visible], ([newX, newY, newVisible],[oldX, oldY, oldVisible]) => {
      if(newX !== oldX){
        currentX.value = newX
      }
      if(newY !== oldY){
        currentY.value = newY
        changePos()
      }
      if(newVisible !== oldVisible && newVisible){
        if (newVisible) {
          nextTick(() => {
            changePos();
          })
        }
      }
    })

    const action = (data) => {
      console.log(data)
      if (!data.disabled) {
        context.emit('action', data);
      }
    }

    const changePos = () => {
      console.log('context',context,contextMenu.value,contextMenu.value.element)
      const gap = 5;
      const bodyClientHeight = document.body.clientHeight
      const bodyClientTop = document.body.clientTop
      const height = 1 //.value.clientHeight
      const elBottom = height + currentY.value
      const viewHeight = bodyClientHeight + bodyClientTop
      if (viewHeight < elBottom) {
        currentY.value = viewHeight - height - gap
      }
    }

    const handleDisplay = () => {
      console.log('handleDisplay')
    }
    
    onMounted(() => {
      const {x, y} = props
      currentX.value = x
      currentY.value = y
      changePos()
      window.addEventListener('resize', handleDisplay)
    })

    onBeforeUnmount(()=>{
      window.removeEventListener('resize', handleDisplay)
    })

    return {
      currentX,
      currentY,
      action,
      handleDisplay,
      contextMenu
    }
  }
}
</script>
<style lang="scss" scoped>
.context-menu{
  position: fixed;
  background-color:#fff;
  cursor: default;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  
  ul{
    border-radius: 4px;
  }
}
</style>