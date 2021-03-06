/******************
 * 基础 - 路由 - mock
 *****************/

const menuList = {
  data: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '首页',
        icon: 'home',
        affix: true,
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'home',
          name: 'Home',
          meta: {
            title: '首页',
            icon: 'home',
            affix: true,
          },
          component: 'Home'
        }
      ]
    },
    {
      path: '/charts',
      redirect: '/charts/d3',
      meta: {
        title: '图表',
        icon: 'chart',
      },
      component: 'BasicLayout',
      alwaysShow: true,
      children: [
        {
          path: 'd3',
          name: 'D3',
          meta: {
            title: 'D3',
            icon: 'chart-d3',
          },
          component: 'Charts/D3'
        },
        {
          path: 'echarts',
          name: 'ECharts',
          meta: {
            title: 'ECharts',
            icon: 'chart-ECharts',
          },
          component:'Charts/ECharts',
          alwaysShow: true,
          children: [
            {
              path: 'line',
              name: 'Line',
              meta: {
                title: 'Line',
                icon: 'chart-line',
              },
              component: 'Charts/ECharts/Line'
            },
            {
              path: 'bar',
              name: 'Bar',
              meta: {
                title: 'Bar',
                icon: 'chart-bar',
              },
              component: 'Charts/ECharts/Bar'
            },
            {
              path: 'map',
              name: 'Map',
              meta: {
                title: 'Map',
                icon: 'chart-map',
              },
              component: 'Charts/ECharts/Map'
            }
          ]
        }
      ]
    },
    {
      path: '/map',
      redirect: '/map/amap',
      meta: {
        title: '地图',
        icon: 'map',
      },
      component: 'BasicLayout',
      alwaysShow: true,
      children: [
        {
          path: 'amap',
          name: 'AMap',
          meta: {
            title: '高德地图',
            icon: 'amap',
          },
          component: 'Map/AMap'
        }
      ]
    },
    {
      path: '/questionnaireSurvey',
      redirect: '/questionnaireSurvey/list',
      meta: {
        title: '问卷调查',
        icon: 'solution',
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'list',
          name: 'QuestionnaireSurvey',
          meta: {
            title: '问卷调查',
            icon: 'solution',
          },
          component: 'QuestionnaireSurvey'
        }
      ]
    },
    {
      path: '/svgPlug',
      redirect: '/svgPlug/svgJs',
      meta: {
        title: 'SVG插件',
        icon: 'svg',
      },
      component: 'BasicLayout',
      alwaysShow: true,
      children: [
        {
          path: 'svgJs',
          name: 'SvgJs',
          meta: {
            title: 'svg.js',
            icon: 'component',
          },
          component: 'SvgPlug/SvgJs'
        },
        {
          path: 'snap',
          name: 'Snap',
          meta: {
            title: 'Snap.svg',
            icon: 'component',
          },
          component: 'SvgPlug/Snap'
        }
      ]
    },
    {
      path: '/collection',
      redirect: '/collection/svg',
      meta: {
        title: '收藏',
        icon: 'collection',
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'svg',
          name: 'SVG',
          meta: {
            title: 'SVG',
            icon: 'svg',
          },
          component: 'Collection/SVG'
        },
        {
          path: 'canvas',
          name: 'Canvas',
          meta: {
            title: 'Canvas',
            icon: 'canvas',
          },
          component: 'Collection/Canvas'
        },
        {
          path: 'css',
          name: 'CSS',
          meta: {
            title: 'CSS',
            icon: 'css3',
          },
          component: 'Collection/CSS'
        },
        {
          path: 'common-layout',
          name: 'CommonLayout',
          meta: {
            title: '常用布局',
            icon: 'layout',
          },
          component: 'Collection/CommonLayout',
          alwaysShow: true,
          children: [
            {
              path: 'list-card',
              name: 'ListCard',
              meta: {
                title: 'ListCard',
                icon: 'list-card',
              },
              component: 'Collection/CommonLayout/ListCard'
            }
          ]
        }
      ]
    },
    {
      path: '/assembly',
      redirect: '/assembly/icon',
      meta: {
        title: '组件',
        icon: 'component-assembly',
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'icon',
          name: 'Icon',
          meta: {
            title: '图标',
            icon: 'icon',
          },
          component: 'Assembly/Icon'
        },
        {
          path: 'table',
          name: 'Table',
          meta: {
            title: '表格',
            icon: 'component-table',
          },
          component: 'Assembly/Table'
        }
      ]
    },
    {
      path: '/usingHelp',
      redirect: '/usingHelp/index',
      meta: {
        title: '使用帮助',
        icon: 'help',
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'index',
          name: 'UsingHelp',
          meta: {
            title: '使用帮助',
            icon: 'help',
          },
          component: 'UsingHelp'
        }
      ]
    },
    {
      path: '/test',
      redirect: '/test/test1',
      meta: {
        title: '测试页面',
        icon: 'test-task',
      },
      component: 'BasicLayout',
      alwaysShow: true,
      children: [
        {
          path: 'test1',
          name: 'Test1',
          meta: {
            title: '测试页面1',
            icon: 'el-icon-s-data',
          },
          component: 'Test'
        },
        {
          path: 'test2',
          name: 'Test2',
          meta: {
            title: '测试页面2',
            icon: 'el-icon-share',
          },
          component: 'Test/TestChild'
        }
      ]
    }
  ],
  code: 200,
  msg: "success",
}

export default [
  /**
   * 基础 - 路由
   **/
  {
    url: '/menu/navigate',
    type: 'get',
    response: () => {
      return menuList
    }
  }
]