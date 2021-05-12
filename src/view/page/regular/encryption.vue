<template>
  <div class="encryption"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    //this.asyncAndAwait();
    // this.promiseMethods();
    // this.asyncAwaitPromise();
    //this.promiseForMethods();
    this.callbackMethods();
  },
  methods: {
    promiseMethods() {
      //问题例子  想让定时器拿到值  再执行下面操作
      // let num;
      // setTimeout(() => {
      //   console.log("异步");
      //   num = 1;
      // }, 100);

      // console.log("同步");
      // console.log(num);

      //解决方法
      let num;
      // const a = new Promise((res, reg) => {
      //   setTimeout(() => {
      //     num = 1;
      //     res(num);
      //   }, 100);
      // });
      // a.then((res) => {
      //   console.log(res);
      // });
      new Promise((res, reg) => {
        setTimeout(() => {
          num = 1;
          res(num);
        }, 100);
      }).then((res) => {
        console.log(res);
      });

      //也可以解决  async 和await使用 比较简单
    },
    //async await promise结合使用
    async asyncAwaitPromise() {
      function printNum(arg) {
        return new Promise((res) => {
          setTimeout(() => {
            res(arg);
          }, 100);
        });
      }
      const data = await printNum("测试");
      console.log(data);
      console.log("111111111111111111111111111111111111111111111");
    },

    //async await 处理循环异步的问题
    asyncAndAwait() {
      console.log("同步");
      (async function (len) {
        const newArr = [];
        for (let i = 0; i < len; i++) {
          await setTimeout(() => {
            console.log(i + "异步变同步");
          }, 100);
        }
        console.log(newArr);
      })(10);
    },
    //promsie.all处理循环套异步的问题
    promiseForMethods() {
      function someFunction() {
        let promises = [];
        for (let i = 0; i < 10; i++) {
          promises.push(
            new Promise((res) => {
              res(i);
            })
          );
        }
        return Promise.all(promises);
      }

      someFunction()
        .then((results) => {
          console.log(results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //回调函数处理异步问题
    callbackMethods() {
      function getData(callback) {
        setTimeout(() => {
          callback("callback处理异步");
        }, 2000);
      }
      getData((val) => {
        console.log(val);
        console.log("callback");
      });
    },
  },
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
    /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>