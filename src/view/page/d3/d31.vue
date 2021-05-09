<template>
  <div class="d31"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    //生成对象
    const length = 5;
    let arr = new Array(0);
    let i = 0;
    while (i < length) {
      arr = [{ id: i + 1, name: `wxq${i}` }, ...arr];
      // arr.push(i)
      i++;
    }
    // console.log(arr);

    // let newArr = arr   //浅拷贝
    // let newArr = [...arr]    //浅拷贝
    const newArr = arr.slice(0);
    // let newArr = JSON.parse(JSON.stringify(arr))
    newArr[0].active = false;
    console.table(arr);
    //箭头函数
    const fun = () => {
      console.log("fun");
    };
    fun();

    //自执行函数
    (function () {
      console.log("fun2");
    })();

    // (function () {

    // })();

    const flatMethods = (arr) => {
      return arr.reduce((pre, next) => {
        if (Array.isArray(next)) {
          // return [...pre, ...flatMethods(next)];
          pre = [...pre, ...flatMethods(next)];
        } else {
          // return [...pre, next];
          pre = [...pre, next];
        }
        return pre;
      }, []);
    };

    const flatArr = flatMethods([1, 2, [3, 4, [5, 6, [7, 8]]]]);
    console.log(flatArr);
    let hh;
    (function (arr) {
      hh = arr.reduce((pre, next) => {
        if (Array.isArray(next)) {
          // return [...pre, ...flatMethods(next)];
          // return [...pre, ...next];
          pre.push(...next);
        } else {
          // return [...pre, next];
          pre.push(next);
        }
        return pre;
      }, []);
    })([1, 2, 3, [4, 5, 6, [7, 8, [9, 10]]]]);

    console.log(hh);
  },
  methods: {},
};
</script>

<style lang="scss">
</style>