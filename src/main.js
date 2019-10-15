// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import App from './App'
import { Header } from 'mint-ui'
import { Tabbar, TabItem, Swipe, SwipeItem, Button } from 'mint-ui'
import moment from 'moment'
import 'mint-ui/lib/style.css'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.enmulateJSON=true
Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


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
