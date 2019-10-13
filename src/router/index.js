import Vue from 'vue'
import Router from 'vue-router'
import mainBox from '@/components/mainBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainBox',
      component: mainBox
    }
  ]
})
