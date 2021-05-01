<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    const curry = fn =>
      (addCurry = (...arg) =>
        arg.length === fn.length ? fn(...arg) : adCurry(...arg));
  },
  methods: {}
};
</script>

<style>
</style>