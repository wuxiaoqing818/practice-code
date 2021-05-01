import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import "lib-flexible-computer";

//全局变量
import globalVariable from './plugin/globalVariable'
Vue.prototype.globalVariable = globalVariable


//echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

//粒子动画效果
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)  

//moment处理时间
import moment from "moment"
Vue.prototype.$moment = moment

// Message 消息提示组件多次弹出问题
import { message } from './plugin/message';
Vue.prototype.$message = message;

// 全局防抖处理
const on = Vue.prototype.$on
Vue.prototype.$on = function (event, func) {
  let timer
  let newFunc = func
  if (event === 'click') {
    newFunc = function () {
      clearTimeout(timer)
      timer = setTimeout(function () {
        func.apply(this, arguments)
      }, 500)
    }
  }
  on.call(this, event, newFunc)
}

//vue复制剪切插件
import Clipboard from 'v-clipboard'
Vue.use(Clipboard)

//api挂载
import api from '@/server/'
// 挂载-接口请求
Vue.prototype.$api = api;

import "@/assets/css/iconfont.css";
import "./assets/css/font-awesome.min.css";
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/base.scss";
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI);

//挂载自定义指令
Vue.use((Vue) => {
  ((requireContext) => {
    const arr = requireContext.keys().map(requireContext);
    (arr || []).forEach((directive) => {
      directive = directive.__esModule && directive.default ? directive.default : directive;
      Object.keys(directive).forEach((key) => {
        Vue.directive(key, directive[key]);
      });
    });
  })(require.context('./plugin/directives', false, /^\.\/.*\.js$/));
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
