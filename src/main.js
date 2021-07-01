import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import '@/styles/index.scss'
import '@/permissions.js'

/**
 * svg icon
 */
import SvgIcon from '@/components/SvgIcon'  // 引入自定义组件
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./assets/icons/svgs', false, /\.svg$/)
requireAll(req)

import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}

const app = createApp(App)
installElementPlus(app)
app.component('svg-icon', SvgIcon).use(store).use(router).mount('#app')
