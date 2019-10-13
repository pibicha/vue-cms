import Vue from 'vue'
import Router from 'vue-router'
import mainBox from '@/components/mainBox'
import { homedir } from 'os'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainBox',
      component: mainBox
    },
    // {
    //   path:'/home',
    //   name:'Home',
    //   component:home
    // }
  ]
})
