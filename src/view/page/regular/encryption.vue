<template>
  <div class="encryption"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang='scss'>
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  .content {
    width: 500px;
    height: 500px;
    background: white;
    position: absolute;
    top: 0;
    right: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
    .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}
</style>