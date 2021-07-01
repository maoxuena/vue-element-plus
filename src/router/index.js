import { createRouter, createWebHashHistory } from 'vue-router'

// 引入布局组件
import BasicLayout from '@/layout/BasicLayout'

// 所有权限通用路由表
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  },
  {
    path: '/exception',
    name: 'Exception',
    hidden: true,
    component: BasicLayout,
    children: [
      {
        path: '403',
        name: '403',
        component: () => import(/* webpackChunkName: "exception" */ '@/views/Exception/403.vue')
      },
      {
        path: '404',
        name: '404',
        component: () => import(/* webpackChunkName: "exception" */ '@/views/Exception/404.vue')
      },
      {
        path: '500',
        name: '500',
        component: () => import(/* webpackChunkName: "exception" */ '@/views/Exception/500.vue')
      }
    ]
  }
]

// 异步挂载的路由
// 需要根据权限加载的路由表
export const asyncRoutes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页',
      icon: 'home',
      affix: true,
    },
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'home',
          affix: true,
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
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
    component: BasicLayout,
    children: [
      {
        path: 'd3',
        name: 'D3',
        meta: {
          title: 'D3',
          icon: 'd3',
        },
        component: () => import(/* webpackChunkName: "charts" */ '@/views/Charts/D3')
      },
      {
        path: 'echarts',
        name: 'ECharts',
        meta: {
          title: 'ECharts',
          icon: 'ECharts',
        },
        component: () => import(/* webpackChunkName: "charts" */ '@/views/Charts/ECharts')
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
    component: BasicLayout,
    alwaysShow: true,
    children: [
      {
        path: 'amap',
        name: 'AMap',
        meta: {
          title: '高德地图',
          icon: 'amap',
        },
        component: () => import(/* webpackChunkName: "map" */ '@/views/Map/AMap')
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
    component: BasicLayout,
    children: [
      {
        path: 'list',
        name: 'QuestionnaireSurvey',
        meta: {
          title: '问卷调查',
          icon: 'solution',
        },
        component: () => import(/* webpackChunkName: "questionnaireSurvey" */ '@/views/QuestionnaireSurvey')
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
        component: () => import(/* webpackChunkName: "collection" */ '@/views/Collection/SVG')
      },
      {
        path: 'css',
        name: 'CSS',
        meta: {
          title: 'CSS',
          icon: 'css3',
        },
        component: () => import(/* webpackChunkName: "collection" */ '@/views/Collection/CSS')
      }
    ]
  },
  {
    path: '/assembly',
    redirect: '/assembly/icon',
    meta: {
      title: '组件',
      icon: 'assembly',
    },
    component: BasicLayout,
    children: [
      {
        path: 'icon',
        name: 'Icon',
        meta: {
          title: '图标',
          icon: 'icon',
        },
        component: () => import(/* webpackChunkName: "assembly" */ '@/views/Assembly/Icon')
      },
      {
        path: 'table',
        name: 'Table',
        meta: {
          title: '表格',
          icon: 'table',
        },
        component: () => import(/* webpackChunkName: "assembly" */ '@/views/Assembly/Table')
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
    component: BasicLayout,
    children: [
      {
        path: 'index',
        name: 'UsingHelp',
        meta: {
          title: '使用帮助',
          icon: 'help',
        },
        component: () => import(/* webpackChunkName: "usingHelp" */ '@/views/UsingHelp')
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
    component: BasicLayout,
    alwaysShow: true,
    children: [
      {
        path: 'test1',
        name: 'Test1',
        meta: {
          title: '测试页面1',
          icon: 'el-icon-s-data',
        },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Test')
      },
      {
        path: 'test2',
        name: 'Test2',
        meta: {
          title: '测试页面2',
          icon: 'el-icon-share',
        },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Test/TestChild')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/exception/404',
    hidden: true,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
