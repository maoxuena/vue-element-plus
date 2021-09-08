<template>
  <li
    :class="data.disabled?'disabled':''"
    @click.stop.prevent="exec"
    @mouseenter.stop.prevent="showChild"
    @mouseleave.stop.prevent="hideChild">
    <el-tooltip :content="data.label" placement="left" :hide-after="500" v-if="tipShow">
      <div class="context-menu-title">
        <span :class="data.class">
          <span v-if="data.icon" :class="data.icon"></span>
          <span v-if="data.label" v-text="data.label"></span>
          <!-- <node-content :node="data"></node-content> -->
        </span>
        <template v-if="'children' in data">
          <span v-if="data.children.length>0" class="uex-icon-caret-right"></span>
        </template>
      </div>
    </el-tooltip>
    <div class="context-menu-title" v-if="!tipShow" :title="data.label">
      <span :class="data.class">
        <span v-if="data.icon" :class="data.icon"></span>
         <span v-if="data.label" v-text="data.label"></span>
        <!-- <node-content :node="data"></node-content> -->
      </span>
      <template v-if="'children' in data">
        <span v-if="data.children.length>0" class="uex-icon-caret-right"></span>
      </template>
    </div>
    <ul
      v-if="'children' in data"
      v-show="visible"
      :style="{top: pos.top, bottom: pos.bottom}">
      <context-menu-item
        v-for="(item,index) in data.children"
        :key="index"
        :data="item"
        @action="action" />
    </ul>
  </li>
</template>
<script>
export default {
    name: 'ContextMenuItem',
    props: {
        data: {
            type: Object,
            default:()=>({})
        },
        tipShow: {
            type: Boolean,
            default: false
        }
    },
    components: {},

    data() {
        return {
            pos: {
                top: '0px',
                bottom: 'auto'
            },
            visible: false
        };
    },
    methods: {
        getElementPosition(el) {
            let x = 0;
            let y = 0;
            while (el != null) {
                x += el.offsetLeft;
                y += el.offsetTop;
                // eslint-disable-next-line no-param-reassign
                el = el.offsetParent;
            }
            return { x, y };
        },
        exec() {
            if (!this.data.disabled) {
                this.$emit('action', this.data);
            }
        },
        action(data) {
            if (!data.disabled) {
                this.$emit('action', data);
            }
        },
        changeStyle() {
            const self = this;
            if (self.$el.childNodes[1]) {
                if (typeof self.$el.childNodes[1].tagName === 'string') {
                    if (self.$el.childNodes[1].tagName.toLowerCase() === 'ul') {
                        const bodyClientHeight = document.body.clientHeight;
                        const bodyClientTop = document.body.clientTop;
                        const viewHeight = bodyClientHeight + bodyClientTop;
                        const clientTop = this.getElementPosition(self.$el.childNodes[1]).y;
                        const height = self.$el.childNodes[1].clientHeight;
                        const elBottom = height + clientTop;
                        if (viewHeight < elBottom) {
                            this.pos.top = 'auto';
                            this.pos.bottom = '0px';
                        } else {
                            this.pos.top = '0px';
                            this.pos.bottom = 'auto';
                        }
                    }
                }
            }
        },
        showChild() {
            this.visible = true;
        },
        hideChild() {
            this.visible = false;
            this.pos.top = '0px';
            this.pos.bottom = 'auto';
        }
    },
    watch: {
        visible(val) {
            if (val) {
                const self = this;
                this.$nextTick(() => {
                    self.changeStyle();
                });
            }
        }
    },
    created() {
    },
    mounted() {
        this.changeStyle();
    }
};
</script>
