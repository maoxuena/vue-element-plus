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
            icon: 'd3',
          },
          component: 'Charts/D3'
        },
        {
          path: 'echarts',
          name: 'ECharts',
          meta: {
            title: 'ECharts',
            icon: 'ECharts',
          },
          component: 'Charts/ECharts'
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
      path: '/forensics',
      redirect: '/forensics/index',
      meta: {
        title: '一件取证',
        icon: 'el-icon-s-platform',
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'index',
          name: 'Forensics',
          meta: {
            title: '一件取证',
            icon: 'el-icon-s-platform',
          },
          component: 'Forensics'
        }
      ]
    },
    {
      path: '/systemManagement',
      redirect: '/systemManagement/index',
      meta: {
        title: '系统管理',
        icon: 'el-icon-s-tools',
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'index',
          name: 'SystemManagement',
          meta: {
            title: '系统管理',
            icon: 'el-icon-s-tools',
          },
          component: 'SystemManagement'
        }
      ]
    },
    {
      path: '/usingHelp',
      redirect: '/usingHelp/index',
      meta: {
        title: '使用帮助',
        icon: 'el-icon-s-operation',
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'index',
          name: 'UsingHelp',
          meta: {
            title: '使用帮助',
            icon: 'el-icon-s-help',
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
        icon: 'el-icon-s-operation',
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