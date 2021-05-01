<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%; background-color: #1e282c;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
          <el-menu-item index="routes">
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>练习一
            </template>
            <el-menu-item index="d31">1</el-menu-item>
            <el-menu-item index="d32">2</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>练习二
            </template>
            <el-menu-item index="canvas1">1</el-menu-item>
            <el-menu-item index="canvas2">2</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>练习三
            </template>
            <el-menu-item index="regular">1</el-menu-item>
            <el-menu-item index="encryption">2</el-menu-item>
            <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>待定
            </template>
            <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
            <el-menu-item index="vueEdit">待定</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>待定
            </template>
            <el-menu-item index="adminSet">待定</el-menu-item>
            <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>待定
            </template>
            <el-menu-item index="explain">待定</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
    
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  },
  mounted() {}
};
</script>


<style lang="scss">
.el-menu {
  background: #1e282c;
}
.el-menu:hover {
  background: #1e282c;
}
.el-submenu__title {
  color: hsla(0, 0%, 100%, 0.65);
}
.el-submenu__title:hover {
  background-color: #1e282c;
  color: #fff;
}

.el-menu-item.is-active {
  color: #fff;
  background-color: #20a0ff;
}
.el-menu-item:hover {
  background: #1e282c;
  color: #fff;
}
.el-menu-item.is-active:hover {
  color: #fff;
  background-color: #20a0ff;
}
.el-menu-item {
  color: hsla(0, 0%, 100%, 0.65);
}
.el-submenu:hover,
.el-submenu.is-opened:hover {
  background: #1e282c;
}
</style>
