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
      icon: 'el-icon-s-home',
      affix: true,
    },
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'el-icon-s-home',
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
      title: '舆情预警',
      icon: 'el-icon-s-opportunity',
    },
    component: BasicLayout,
    children: [
      {
        path: 'd3',
        name: 'D3',
        meta: {
          title: 'D3',
          icon: 'el-icon-s-opportunity',
        },
        component: () => import(/* webpackChunkName: "charts" */ '@/views/Charts/D3')
      },
      {
        path: 'echarts',
        name: 'ECharts',
        meta: {
          title: 'ECharts',
          icon: 'el-icon-s-opportunity',
        },
        component: () => import(/* webpackChunkName: "charts" */ '@/views/Charts/ECharts')
      }
    ]
  },
  {
    path: '/svg',
    redirect: '/svg/index',
    meta: {
      title: 'SVG',
      icon: 'el-icon-s-order',
    },
    component: BasicLayout,
    children: [
      {
        path: 'index',
        name: 'SVG',
        meta: {
          title: 'SVG',
          icon: 'el-icon-s-order',
        },
        component: () => import(/* webpackChunkName: "svg" */ '@/views/SVG')
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
    component: BasicLayout,
    children: [
      {
        path: 'index',
        name: 'Forensics',
        meta: {
          title: '一件取证',
          icon: 'el-icon-s-platform',
        },
        component: () => import(/* webpackChunkName: "forensics" */ '@/views/Forensics')
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
    component: BasicLayout,
    children: [
      {
        path: 'index',
        name: 'SystemManagement',
        meta: {
          title: '系统管理',
          icon: 'el-icon-s-tools',
        },
        component: () => import(/* webpackChunkName: "systemManagement" */ '@/views/SystemManagement')
      }
    ]
  },
  {
    path: '/usingHelp',
    redirect: '/usingHelp/index',
    meta: {
      title: '使用帮助',
      icon: 'el-icon-s-help',
    },
    component: BasicLayout,
    children: [
      {
        path: 'index',
        name: 'UsingHelp',
        meta: {
          title: '使用帮助',
          icon: 'el-icon-s-help',
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
      icon: 'el-icon-s-operation',
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
