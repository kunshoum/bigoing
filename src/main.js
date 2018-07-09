import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/'
import { store } from './store/'
import MintUI from 'mint-ui'
import 'lib-flexible/flexible'
import './assets/deal.scss'
import echarts from 'echarts'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'
import './assets/css/hot.scss'
import './assets/css/myMint.scss'
import 'swiper/dist/css/swiper.css'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueClipboard)
Vue.use(MintUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store}).$mount('#app')
