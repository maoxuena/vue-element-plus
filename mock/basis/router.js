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
        icon: 'el-icon-s-home',
        affix: true,
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'home',
          name: 'Home',
          meta: {
            title: '首页',
            icon: 'el-icon-s-home',
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
        icon: 'el-icon-s-opportunity',
      },
      component: 'BasicLayout',
      alwaysShow: true,
      children: [
        {
          path: 'd3',
          name: 'D3',
          meta: {
            title: 'D3',
            icon: 'el-icon-s-opportunity',
          },
          component: 'Charts/D3'
        },
        {
          path: 'echarts',
          name: 'ECharts',
          meta: {
            title: 'ECharts',
            icon: 'el-icon-s-opportunity',
          },
          component: 'Charts/ECharts'
        }
      ]
    },
    {
      path: '/forensicsManagement',
      redirect: '/forensicsManagement/index',
      meta: {
        title: '取证管理',
        icon: 'el-icon-s-order',
      },
      component: 'BasicLayout',
      children: [
        {
          path: 'index',
          name: 'ForensicsManagement',
          meta: {
            title: '取证管理',
            icon: 'el-icon-s-order',
          },
          component: 'ForensicsManagement'
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