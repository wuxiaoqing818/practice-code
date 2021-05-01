<template>
  <div class="regular">
    <span>手机电话号：</span>
    <el-input v-model.trim="phone" v-elFocus style="width:400px;"></el-input>
    <button @click="checkPhone()">验证手机电话号</button>
  </div>
</template>

<script>
import { teleAndMobilePhone } from "@/plugin/regular";
export default {
  data() {
    return {
      phone: ""
    };
  },
  methods: {
    checkPhone() {
      console.log(/[@#$%^&*_+!\d]/.test(this.phone));
      if (teleAndMobilePhone(this.phone)) {
        this.$message("验证通过");
      } else {
        this.$message("手机号电话号不符合");
      }
    }
  }
};
</script>

<style>
.el-input__inner {
  width: 100%;
}
</style>