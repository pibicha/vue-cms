<template>
  <div>
    <cmtbox :artid="$route.params.id"></cmtbox>
  </div>
</template>
<script>
import cmtbox from "../../components/subcomponents/Comment.vue";
export default {
  components: {
    cmtbox
  }
};
</script>
<style lang="scss">
</style>