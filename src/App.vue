<template>
  <div id="app" class="fillcontain">
    <vue-particles
      color="#808080"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="3"
      linesColor="#808080"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss" scoped>
#particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute; //设置absolute,其他DIV设置为relative，这样这个例子效果就作为背景
}
</style>>


