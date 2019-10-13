import Vue from 'vue'
import Router from 'vue-router'
import Member from '../components/tabbar/Member.vue'
import Home from '../components/tabbar/Home.vue'
import Search from '../components/tabbar/Search.vue'
import Cart from '../components/tabbar/Cart.vue'


import { homedir } from 'os'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
  ],
  // 使用mui提供的现成样式 代替路由激活样式
  linkActiveClass: 'mui-active'
})
