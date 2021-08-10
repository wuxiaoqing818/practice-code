<template>
  <div>
    <p v-html="htmlRednder"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    const curry = (fn) =>
      (addCurry = (...arg) =>
        arg.length === fn.length ? fn(...arg) : adCurry(...arg));

    let arr = [1, 2, 3, 4];
    delete arr[1];
    console.log(arr);
    this.$delete(arr, 1);
    console.log(arr);

    // for (var i = 0; i < 10; i++) {
    //   setTimeout(() => {
    //     console.log(i);
    //   }, 100);
    // }

    new Promise((res, reg) => {
      for (var i = 0; i < 10; i++) {
        setTimeout(() => {
          res(i);
        }, 100);
      }
    }).then((res) => {
      console.log(res);
    });

    function* printNum() {
      for (var i = 0; i < 10; i++) {
        yield setTimeout(() => {
          console.log(i);
        });
      }

      // console.log(num);
    }

    const inter = printNum();
    //  console.log(inter.next())
    //   console.log(inter.next())
    //    console.log(inter.next())

    const flatArr = [2, 2, [1, 2, [1, 2]], 3, 4, 6];

    console.table([...new Set(flatArr.flat(Infinity))].sort((a, b) => a - b));
  },
  mounted() {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    for (let [i, item] of arr.entries()) {
      console.log(item);
    }
    var myMap = new Map();
    myMap.set(0, "zero");
    myMap.set(1, "one");
    console.log(myMap);

    const obj = { key: '1' };
    // if ("key" in obj) {
    //   alert("11");
    // }
    if(!obj?.name){
      alert('111')
    }


  },
  computed: {
    htmlRednder() {
      const divHtml = "<div style='color:red;'>111111</div>";
      // https://www.fendouxiaqu.com/cn/?a=dnxe2

      return divHtml;
    },
  },
  methods: {},
};
</script>

<style>
</style>