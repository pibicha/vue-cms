<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <!-- 这里为什么不能用v-model -->
    <!-- <input class="mui-numbox-input" type="number" v-model='num' @change="changeNum()"/> -->
    <input class="mui-numbox-input" type="number" ref='numbox' @change="changeNum()" />
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  data() {
    return { num: this.selectedCount };
  },
  props: ["selectedCount","max"],
  methods: {
    changeNum() {
      let num = this.$refs.numbox.value
      this.$emit("func", num);
    }
  },
  watch:{
    max(newVal, oldVal){
      mui('.mui-numbox').numbox().setOption("max", newVal)
    }
  }
};
</script>
<style lang="scss">
</style>