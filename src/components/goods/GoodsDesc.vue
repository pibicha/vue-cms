<template>
  <div>
    <h3>{{info.title}}</h3>
    <hr />
    <div v-html="info.content" class="content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return { info: {} };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.info = result.body.message[0];
            console.log(this.info);
          }
        });
    }
  }
};
</script>
<style lang="scss">
h3 {
  font-size: 16px;
  color: rgb(20, 55, 255);
  text-align: center;
  margin: 15px 0;
}
.content {
  img {
    width: 100%;
    padding: 4px;
  }
}
</style>