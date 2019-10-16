<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item' ,item.id === 0 ? 'mui-active':'']"
            v-for="item in photoCategory"
            :key="item.id"
            @click="acquireImages(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <div>
      <ul class="photo-list">
        <router-link v-for="item in images" :key="item.id" :to="'/home/photoinfo/'+item.id" tag='li'>
          <img v-lazy="item.img_url" />
          <div class=info>
              <h1 class='info-title'>{{item.title}}</h1>
              <div class='info-body'>{{item.zhaiyao}}</div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return { photoCategory: [], images: [] };
  },

  created() {
    this.getPhotoClass();
    this.acquireImages(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },

  methods: {
    getPhotoClass() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          this.photoCategory = result.body.message;
          this.photoCategory.unshift({ id: 0, title: "全部" });
        }
      });
    },
    acquireImages(cateid) {
      this.$http.get("api/getimages/" + cateid).then(result => {
        if (result.body.status === 0) {
          this.images = result.body.message;
        }
      });
    }
  }
};
</script>
<style lang="scss">
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: rgba(136, 136, 136, 0.89);
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      //   图片下边缘有背景色，呈现“凸出”屏幕的效果
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info{
        position: absolute;
        bottom: 0px;
        color:white;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 84px;
        .info-title{
            font-size: 14px;
        }
        .info-body{
            font-size: 13px;

        }
    }
  }
}
</style>