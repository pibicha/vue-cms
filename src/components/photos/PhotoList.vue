<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item">试试</a>
          <a class="mui-control-item">说2</a>
          <a class="mui-control-item">方法</a>
          <a class="mui-control-item">滚滚滚</a>
          <a class="mui-control-item">滚滚滚</a>
          <a class="mui-control-item">滚滚滚</a>
          <a class="mui-control-item">滚滚滚</a>
          <a class="mui-control-item">滚滚滚</a>
          <a class="mui-control-item">滚滚滚</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  data() {
    return {}
  },
  created() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
  methods: {}
}
</script>
<style lang="scss">
</style>