<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in res" :key="item.id">
        <img :src="item.img" :class="{'full':isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["res", "isfull"],
  methods: {}
};
</script>
<style lang="scss">
.mint-swipe {
  height: 200px;
  text-align: center;
  img {
    // width: 100%;
    height: 100%;
  }
}
.full {
  width: 100%;
}
</style>