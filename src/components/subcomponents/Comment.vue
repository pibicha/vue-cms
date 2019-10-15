<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <textarea placeholder="请输入评论内容" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="remark">发表</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{index + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time| dateFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="dander" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // comments之前定义诶commentList 刚好和getCommentList成getter关系，导致识别不了组件属性
      comments: [],
      pageindex: 1,
      msg: ""
    };
  },
  props: ["artid"],
  created() {
    this.getCommentList();
  },
  methods: {
    getCommentList() {
      this.$http
        .get("api/getcomments/" + this.artid + "?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            this.comments = this.comments.concat(result.body.message);
          } else {
          }
        });
    },
    getMore() {
      this.pageindex++;
      var list = this.getCommentList();
    },
    remark() {
      this.$http
        .post("api/postcomment/" + this.artid, {
          content: this.msg
        })
        .then(result => {
          if (result.body.status === 0) {
            this.pageindex = 1;
            Toast("评论成功");
            var comment = {user_name: '匿名用户',add_time:Date(),content:this.msg}
            this.comments.unshift(comment)
          } else {
          }
        });
    }
  }
};
</script>
<style lang="scss">
.cmt-container {
  margin: 10px 0;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
    }
    .cmt-body {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>