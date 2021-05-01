
<template>
  <div class="all">
    <h1 id="result">ceshi</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    iconlistall: {
      get() {}
    }
  },
  created() {
    //（1）计算数组中每个元素出现的次数
    let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
    let nameNum = names.reduce((pre, cur) => {
      if (cur in pre) {
        pre[cur]++;
      } else {
        pre[cur] = 1;
      }
      return pre;
    }, {});
    console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
    //（2）数组去重
    let arr = [1, 2, 3, 4, 4, 1];
    let newArr = arr.reduce((pre, cur) => {
      if (!pre.includes(cur)) {
        return pre.concat(cur);
      } else {
        return pre;
      }
    }, []);
    console.log(newArr); // [1, 2, 3, 4]
    //（3）将二维数组转化为一维
    let arr2 = [
      [0, 1],
      [2, 3],
      [4, 5]
    ];
    let newArr2 = arr2.reduce((pre, cur) => {
      return pre.concat(cur);
    }, []);
    console.log(newArr2); // [0, 1, 2, 3, 4, 5]
    //（3）将多维数组转化为一维
    let arr3 = [
      [0, 1],
      [2, 3],
      [4, [5, 6, 7]]
    ];
    const newArr3 = function(arr) {
      return arr.reduce(
        (pre, cur) => pre.concat(Array.isArray(cur) ? newArr3(cur) : cur),
        []
      );
    };
    console.log(newArr3(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]
    //（4）、对象里的属性求和
    var result = [
      {
        subject: "math",
        score: 10
      },
      {
        subject: "chinese",
        score: 20
      },
      {
        subject: "english",
        score: 30
      }
    ];

    var sum = result.reduce(function(prev, cur) {
      return cur.score + prev;
    }, 0);
    console.log(sum); //60

    // 数组合并排序
    let a = [1, 1, 2, 3, 4, 5, 6, 6];
    let b = [4, 5, 6];
    let c = concatArr(a, b); // [1,1,2,2,2,3,4,5,6]
    function concatArr(a, b) {
      let a1 = a.reduce((obj, name) => {
        if (name in obj) {
          obj[name]++;
        } else {
          obj[name] = 1;
        }
        return obj;
      }, {});
      let a2 = b.reduce((obj, name) => {
        if (name in obj) {
          obj[name]++;
        } else {
          obj[name] = 1;
        }
        return obj;
      }, {});
      let res = [];
      for (let i in a1) {
        if (a1[i] >= a2[i]) {
          res.push(...test_shuffle(i, a1[i]));
        } else {
          res.push(...test_shuffle(i, a2[i]));
          res.push(...test_shuffle(i, a1[i]));
        }
      }
      return res;
    }
    function test_shuffle(item, len) {
      let k = len;
      let arr = [];
      for (let i = 0; i < len; i++) {
        arr.push(item);
      }
      return arr;
    }
    // console.table(c);
    console.log(`%c${c}`, "font-size:36px;color:red;");
    try {
      aaa = 1;
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {},
  methods: {},

  beforeDestroy() {}
};
</script>

<style scoped lang='scss'>
</style>

