import Vue from 'vue'
import Router from 'vue-router'
import Member from '../components/tabbar/Member.vue'
import Home from '../components/tabbar/Home.vue'
import Search from '../components/tabbar/Search.vue'
import Cart from '../components/tabbar/Cart.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'
import PhotoList from "../components/photos/PhotoList.vue"
import PhotoInfo from "../components/photos/PhotoInfo.vue"
import Goodslist from "../components/goods/Goodslist.vue"
import GoodInfo from "../components/goods/GoodInfo.vue"
import GoodsDesc from "../components/goods/GoodsDesc.vue"
import GoodsComment from "../components/goods/GoodsComment.vue"

import { homedir } from 'os'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
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
    {
      path: '/home/newslist',
      name: 'newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    },
    {
      path: '/home/photos',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    },
    {
      path: '/home/goodslist',
      component: Goodslist
    },
    {
      path: '/home/goodsinfo/:id',
      component: GoodInfo,
      name: 'goodsinfo'
    },
    {
      path: '/home/goodsdesc/:id',
      component: GoodsDesc,
      name:'goodsDesc'
    },
    {
      path: '/home/goodscomment/:id',
      component: GoodsComment,
      name:'goodscomment'
    }
  ],
  // 使用mui提供的现成样式 代替路由激活样式
  linkActiveClass: 'mui-active'
})
