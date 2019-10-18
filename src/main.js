// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import VueResource from 'vue-resource'
import VuePreview from 'vue-preview';

import App from './App'
// import { Header,Tabbar, TabItem, Swipe, SwipeItem, Button,Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Tabbar.name, Tabbar)
// Vue.component(TabItem.name, TabItem)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)

// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)

import moment from 'moment'
import 'mint-ui/lib/style.css'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
// import mui from './lib/mui/js/mui.min.js'
Vue.use(VueResource)
Vue.use(VuePreview);
Vue.use(Vuex);
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.enmulateJSON=true
Vue.config.productionTip = false



Vue.filter('dateFormat', function(dataStr,parttern='YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(parttern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
