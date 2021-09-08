<template>
  <div class="svg-js-page">
    <div class="svg" @contextmenu.prevent="handleContextMenu">
    </div>
    <context-menu 
      @action="action"
      :tip-show="true"
      :data="contextmenuData"
      :width="120"
      :visible="rowContextmenu"
      :x="pos.x"
      :y="pos.y" />
  </div>
</template>

<script>
import { onMounted, ref, reactive } from 'vue'
import { SVG } from '@svgdotjs/svg.js'
import 'svg.select.js'
import 'svg.resize.js'
import ContextMenu from '@/components/ContextMenu'
export default {
  name: 'SvgJs',
  components: {
    ContextMenu
  },
  setup () {

    /*let tableData = [ 
      { 
        'stepInst': 'authVerify', 
        'stepType': '输入区', 
        'actions': [
          {'icon': 'uex-icon-edit', 'label': 'test1test1test1', 'action': 'aaaa'},
          {'label': 'test2', 'action': 'bbbb'} 
        ] 
      }, 
      { 
        'stepInst': 
        'authVerify', 
        'stepType': '输入区', 
        'actions': [ 
          {'label': 'test1test1test1', 'action': 'aaaa'}, 
          {'label': 'test2', 'action': 'bbbb'} 
        ] 
      }, 
      { 
        'stepInst': 'paramCheck', 
        'stepType': '输入区', 
        'actions': [ 
          {'label': 'test3', 'action': 'aaaa1'}, 
          {'label': 'test4', 'action': 'bbbb1'} 
        ] 
      }, 
      { 
        'stepInst': 'paramsConvert', 
        'stepType': '输入区', 
        'actions': [ 
          { 'label': 'test1test1test1test1', 'action': 'action1' }, 
          { 
            'label': 'test2test2test2', 
            'action': 'action2',  
            'children': [ 
              { 
                'label': 'test21est21est21', 
                'action': 'action21', 
                'children': [ 
                  { 'label': 'test211test211test211', 'action': 'action211' }, 
                  { 'label': 'test212test212test212', 'action': 'action212' } 
                ] 
              }, 
              { 
                'label': 'test22test22test22', 
                'action': 'action22' 
              }, 
            ] 
          } 
        ] 
      } 
    ] 
    let contextmenuData = [
      {'label': 'test2', 'action': 'bbbb'}
    ]
    let contentMenuShow = false
    let buttonActionData1 = [ 
      { 'label': 'test1test1test1test1', 'action': 'action1' }, 
      { 
        'label': 'test2test2test2', 
        'action': 'action2', 
        'children': [ 
          { 
            'label': 'test21est21est21', 
            'action': 'action21', 
            'children': [ 
              { 
                'label': 'test211test211test211', 
                'action': 'action211' 
              }, 
              { 
                'label': 'test212test212test212', 
                'action': 'action212' 
              } 
            ] 
          }, 
          { 
            'label': 'test22test22test22', 
            'action': 'action22' 
          }, 
        ] 
      } 
    ]
    let buttonActionData2 = []
    let buttonShow = true*/

    const rowContextmenu = ref(false)
    const pos = reactive({ x: 0, y: 0 })
    const contextmenuData = reactive([
      {'label': 'label1', 'action': '1'},
      { 
        'label': 'label2', 
        'action': '2',  
        'children': [ 
          { 
            'label': 'label2-1', 
            'action': '2-1', 
            'children': [ 
              { 'label': 'label2-1-1', 'action': '2-1-1' }, 
              { 'label': 'label2-1-2', 'action': '2-1-2' } 
            ] 
          }, 
          { 
            'label': 'label2-2', 
            'action': '2-2' 
          }, 
        ] 
      } 
    ])

    const init = () => {
      const canvas = SVG().size(1000, 1000).addTo('.svg')
      let rect = canvas.rect(400, 250)
      rect.selectize().resize()
    }

    /*const getEventPos = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        return { x, y };
    }

    const rowContextmenu1 = (row) => {
        console.log('row', row);
        const contextmenuData = [
            { label: '新增', action: 'add', icon: 'ri-add-line' },
            { label: '编辑', action: 'edit', icon: 'ri-edit-box-line', disabled: true },
            { label: '删除', action: 'delete', icon: 'ri-delete-bin-7-line' }
        ];
        const e = window.event;
        const pos = this.getEventPos(e);
        if (e.which === 3) {
            this.rowContextmenu = false;
            this.pos.x = pos.x;
            this.pos.y = pos.y;
            this.contextmenuData = contextmenuData;
            this.rowContextmenu = true;
        }
        this.preventDefault(e);
        e.returnValue = false;
        return false;
    }
    
    const preventDefault = (el) => {
        const e = el || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnvalue = false;
        }
        return e;
    }*/

    const action = (data) => {
        console.log('data.action', data.action)
        rowContextmenu.value = false
    }

    const handleContextMenu = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      rowContextmenu.value = true
    }

    onMounted(() => {
      init()
    })

    return {
      handleContextMenu,
      action,
      contextmenuData,
      rowContextmenu,      
      pos,      
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-js-page{
  .svg{
    padding: 10px;
  }
}
</style>