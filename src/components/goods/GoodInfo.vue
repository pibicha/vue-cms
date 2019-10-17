<template>
  <div class="goodsinfo-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <lunbo :res="lunbo"></lunbo>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">2222222222222222</div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">33333333333333333</div>
      </div>
    </div>
  </div>
</template>
<script>
import Lunbotu from "../../components/subcomponents/Lunbotu.vue";

export default {
  data() {
    return { lunbo: [], id: this.$route.params.id };
  },
  created() {
    this.getLunbo();
  },
  methods: {
    getLunbo() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.lunbo = result.body.message;
        }
      });
    }
  },
  components: {
    lunbo: Lunbotu
  }
};
</script>
<style lang="scss">
.goodsinfo-container {
  background-color: #eee;
  //   取消浮动
  overflow: hidden;
}
</style>