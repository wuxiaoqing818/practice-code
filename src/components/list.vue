<template>
    <div>
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <div class="item-name">
                <span>{{item.name}}</span>
            </div>
            <div v-if="item.children" class="children-item">
                <list :list="item.children"></list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "List",
  props: {
    list: Array
  }
};
</script>
<style scoped lang="scss">
.list-item {
    font-size: 24px;
    font-weight: bold;
}
.children-item {
    font-size: 16px;
    margin-left: 20px;
}


</style>