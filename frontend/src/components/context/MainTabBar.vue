<template>
  <tab-bar>
    <tab-bar-item path="/create">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabBar/create.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabBar/create_active.svg" alt="" />
      </template>
      <template v-slot:item-text> 新建 </template>
    </tab-bar-item>


    <tab-bar-item path="/write">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabBar/write.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabBar/write_active.svg" alt="" />
      </template>
      <template v-slot:item-text> 填写 </template>
    </tab-bar-item>


    <tab-bar-item path="/mine">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabBar/mine.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabBar/mine_active.svg" alt="" />
      </template>
      <template v-slot:item-text> 我的 </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/TabBar.vue";
import TabBarItem from "../common/TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style></style>
