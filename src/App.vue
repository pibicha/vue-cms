<template>
  <div class="app-container">
    <mt-header fixed title="黔茶坊"></mt-header>
    <transition mode="out-in" name appear>
      <router-view></router-view>
    </transition>
    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span id="badge" class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
// 1 这里之前没加scoped 导致商品购买页添加购物车小球不显示动画，应该是样式污染了
// 2 本来在这里加入了scoped以后 组件切换会失去动画效果，加上vuex之后居然又有动画了。。。
<style lang='scss' scoped>
.mt-header{
  z-index: 99;
}
.app-container {
  padding-top: 40px;
  padding-bottom: 55px;
  /* 组件切换时，有个横向的滚动条，将X的overflow设置为hidden即可取消 */
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}


</style>
