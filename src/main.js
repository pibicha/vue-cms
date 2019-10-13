// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import { Header } from 'mint-ui'
import { Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
