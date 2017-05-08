import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import goods from '@/components/goods/goods.vue'
import ping from '@/components/pinglun/ping.vue'

Vue.use(Router)
Vue.use(iView)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/ping'
    },
    {
      path: '/goods',
      name: 'goods',
      components: {
        default: goods,
        fck: ping
      }
    },
    {
      path: '/ping',
      name: 'ping',
      components: {
        default: ping,
        fck: goods
      }
    }
  ]
})
