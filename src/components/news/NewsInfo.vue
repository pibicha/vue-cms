<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
      <span>点击: {{newsinfo.click}}</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>
    <hr>
    <comment-box :artid='this.id'></comment-box>
  </div>
</template>
<script>
import Comment from '../subcomponents/Comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo:{}
    };
  },
  created() {
      this.getNewsInfo()
  },
  components:{
      'comment-box':Comment
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
            this.newsinfo = result.body.message[0]
        } else {
        }
      });
    }
  }
};
</script>
<style lang="scss">
.newsinfo-container {
  padding: 0 5px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 14px;
    color: rgb(120, 65, 221);
    display: flex;
    justify-content: space-between;
  }
  .content {
      img{
          width:100%
      }
  }
}
</style>