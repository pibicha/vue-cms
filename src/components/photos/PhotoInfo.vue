<template>
  <div class="photoinfo-container">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>{{photoInfo.add_time|dateFormat}}</span>
      <span>点击:{{photoInfo.click}}次</span>
    </p>

    <hr />
    <!-- 缩略图 -->
    <div class="thumbs">
      <vue-preview :slides="shortCut"></vue-preview>
    </div>
    <!-- 内容 -->
    <div class="content" v-html="photoInfo.content"></div>

    <!-- 评论组件 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import comment from "../subcomponents/Comment.vue";
export default {
  data() {
    return { id: this.$route.params.id, photoInfo: {}, shortCut: [] };
  },
  created() {
    this.getPhotoInfo();
    this.getShortCut();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoInfo = result.body.message[0];
        }
      });
    },
    getShortCut() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          let thums = [];
          let rs = result.body.message;
          rs.forEach(element => {
            // thums.push({ src: element.src, w: 600, h: 400 });
            element.w = 600;
            element.h = 400;
            element.msrc = element.src;
          });
          this.shortCut = rs;
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>
<style lang="scss">
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a3ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs {
    display: flex;
    flex-direction: column;
    figure {
      a {
        img {
          width: 130px;
          height: 100px;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>