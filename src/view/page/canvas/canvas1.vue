<template>
  <div class="canvas1">
    <p>Math函数的用法： {{ jsMethods() }}</p>
    <p>移动端判断机型： {{ appSource() }}</p>
    <p>高阶函数：{{ gaojie() }}</p>
    <p>计算属性：{{ remaningCount }}</p>
    <p>计算属性：{{ toggleAllStat }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "1111",
      arr: [this.globalVariable.IP],
      computedStr: "",
      computedFlag: false,
      todos: [{ completed: true }, { completed: false }, { completed: true }],
    };
  },
  created() {
    console.log(this.globalVariable.IP + " 全局变量");
    console.log(this.arr[0] + " 打印变量");
    // let f = "1111111"
    // let formdata = new FormData();
    // formdata.append("file", f);
    // formdata.append("token", "taoken");
    // formdata.append("op", "uploadChannelPic");
    // formdata.append("data", JSON.stringify({}));
    // console.log(formdata);
    // for (let [a, b] of formdata.entries()) {
    //   console.log(a, b);
    // }
    let obj = { id: 1, age: 10 };
    let arr = [];
    Object.keys(obj).forEach((item) => arr.push(obj[item]));
    console.log(arr);
    console.log(arr.reduce((pre, next) => pre + next, 1));

   const reduceObj = Object.keys(obj).reduce((pre, next) =>{
     console.log(`%c${pre}`,'color:red;')
      pre[next] = 1
      return pre
     
   },{})
   console.log(reduceObj)

    // var map = new Map();
    // for (let key in obj) {
    //   map.set(key, obj[key]);
    // }
    // console.log(map);

    // for (let item of map) {
    //   console.log(item); //报错
    // }
  },
  mounted() {
    //测试计算属性
    setTimeout(() => {}, 2000);
    console.log(this.$data);
    //     window.onload = function(){
    //     document.write("userAgent字符串："+checkBrowser.browserStr()+"<br /><br /><br />浏览器及版本："+checkBrowser.browserVersion());
    // }
    var checkBrowser = {
      browserStr: function () {
        return navigator.userAgent;
      },
      browserType: function () {
        //只返回浏览器名称
        if (this.browserStr().match("Chrome")) {
          return "Chrome";
        } else if (this.browserStr().match("Firefox")) {
          return "Firefox";
        } else if (this.browserStr().match("MSIE")) {
          return "IE";
        } else if (this.browserStr().match("Safari")) {
          return "Safari";
        } else if (this.browserStr().match("Opera")) {
          return "Opera";
        }
      },
      browserVersion: function () {
        //返回浏览器名称和版本号,如：["Chrome/31.0.1650.63"]，是一个数组类型
        var regChrome = /chrome\/[\d.]+/gi;
        var regFF = /firefox\/[\d.]+/gi;
        var regIE = /msie [\d.]+;/gi;
        var regSafari = /safari\/[\d.]+/gi;
        var regOpera = /Opera\/[\d.]+/gi;
        switch (this.browserType()) {
          case "Chrome":
            return this.browserStr().match(regChrome);
            break;
          case "Firefox":
            return this.browserStr().match(regFF);
            break;
          case "IE":
            return this.browserStr().match(regIE);
            break;
          case "Safari":
            return this.browserStr().match(regSafari);
            break;
          case "Opera":
            return this.browserStr().match(regOpera);
            break;
        }
      },
    };
  },
  computed: {
    remaningCount() {
      return this.todos.filter((t) => !t.completed).length;
    },
    toggleAllStat: {
      get: function () {
        return this.todos.every((t) => t.completed);
      },
      set: function () {
        console.log(111);
      },
    },
  },
  methods: {
    jsMethods() {
      const variable = "suiji";
      let suiji = Math.random() * 400; //随机数生成
      switch (variable) {
        case "suiji":
          return suiji;
          break;
        case "shangquzheng":
          return suiji + "    " + Math.ceil(suiji); //向上取整
          break;
        case "sishewuru":
          return suiji + "       " + Math.round(suiji); //四舍五入
          break;
        case "jueduizhi":
          return suiji + "      " + Math.abs(suiji); //获取绝对值
          break;
        case "xiaquzheng":
          return suiji + "" + Math.floor(suiji); //向下取整
          break;
      }
    },
    appSource() {
      const u = navigator.userAgent;
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isiOS) {
        return "ios";
      } else {
        return "andriod";
      }
    },
    //高阶函数使用
    gaojie() {
      const nums = [12, 23, 22, 18, 100, 67, 48, 88];
      return nums
        .filter((item) => item > 50)
        .map((item) => item * 10)
        .reduce((pre, next) => pre + next);
    },
    //reduce的使用
    reduceMethods() {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let result = arr.reduce((pre, next) => {
        console.log(pre);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.canvas1 {
  font-size: 24px;
}
</style>