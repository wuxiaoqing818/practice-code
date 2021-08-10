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
  components: {},
  created() {
    // const arr = ["1", "2", "3", "4"];
    // function add() {
    //   for (let i = 0; i < arr.length; i++) {
    //     if ("1".indexOf(arr[i]) != -1) {
    //       return;
    //     } else {
    //       console.log("1111");
    //     }
    //   }
    // }

    // add();
    // 数字转换位字符
    var code = String.fromCharCode(65);
    // 字符转换为数字

    console.log("A".charCodeAt());
    console.log("B".charCodeAt());
    console.log("C".charCodeAt());
    console.log("D".charCodeAt());
    console.log(String.fromCharCode(65));
    console.log(String.fromCharCode(66));
    console.log(String.fromCharCode(67));
    console.log(String.fromCharCode(68));

    const arr = [
      { id: "1", name: "111" },
      { id: "2", name: "222" },
      { id: "1", name: "333" },
      { id: "2", name: "444" },
      { id: "1", name: "555" },
    ];
    let newArr = [];
    let newObj = {};
    console.log(Object.keys(newObj));

    arr.forEach((item) => {
      if (!Object.keys(newObj).includes(item.id)) {
        newObj[item.id] = [];
      }
      newObj[item.id] = [...newObj[item.id], item];
    });
    console.log(newObj);
    console.log(newArr);

    //从后台获取的对象数组，根据对象的type进行分组合并成tree树形展示数据
    const dataArr = [
      { type: "治理层", name: "hive_82", reserve: "2", id: 1 },
      { type: "原始数据层", name: "qwe", reserve: "1", id: 2 },
      { type: "贴源层", name: "mysql_exchangis", reserve: "3", id: 3 },
      { type: "治理层", name: "links_188", reserve: "1", id: 4 },
      { type: "贴源层", name: "mysql_ces", reserve: "2", id: 5 },
    ];
    const treeData = dataArr.reduce((cur, next) => {
      const obj = cur.find((curItem) => curItem.label === next.type);
      if (obj) {
        if (obj.children.indexOf(next.id) === -1) {
          //去重处理
          obj.children.push({
            ...next,
            label: next.name,
          });
        }
      } else {
        const newObj = {
          label: next.type,
          children: [
            {
              ...next,
              label: next.name,
            },
          ],
        };
        cur.push(newObj);
      }
      return cur;
    }, []);

    console.log(treeData);

    // 利用 reduce 处理菜单后端返回的菜单结构  需要根据 parentId 将这些数据转换成层级结构。
    const routerDataArr = [
      { id: "18", name: "重置密码", parentId: "30", parentName: "用户管理" },
      { id: "13", name: "审计日志", parentId: "29", parentName: "系统管理" },
      { id: "29", name: "系统管理", parentId: "0", parentName: null },
      { id: "14", name: "修改", parentId: "33", parentName: "部门管理" },
      { id: "2", name: "用户列表", parentId: "30", parentName: "用户管理" },
      { id: "30", name: "用户管理", parentId: "29", parentName: "系统管理" },
      { id: "33", name: "部门管理", parentId: "0", parentName: null },
      { id: "37", name: "添加用户", parentId: "30", parentName: "用户管理" },
      { id: "6", name: "添加", parentId: "33", parentName: "部门管理" },
      { id: "7", name: "删除", parentId: "33", parentName: "部门管理" },
    ];
    //根据parentId创建映射关系
    let routerTree = [];
    const result = routerDataArr.reduce((prev, next) => {
      prev[next.parentId]
        ? prev[next.parentId].push(next)
        : (prev[next.parentId] = [next]);
      return prev;
    }, {});

    Object.keys(result).map((key) => {
      result[key].map((item, i) => {
        result[item.id] ? (item.children = result[item.id]) : "";
      });
    });
    routerTree = result;
    console.log(routerTree);
  },
};
</script>

<style lang="scss" scoped>
#particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute; //设置absolute,其他DIV设置为relative，这样这个例子效果就作为背景
}
</style>>


