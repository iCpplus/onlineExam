<template>
  <div>
    <div class="holder"></div>
    我的
    <main-tab-bar></main-tab-bar>
    <div class="holder"></div>
    <top-bar>
      <template v-slot:pageTitle> 我的 </template>
    </top-bar>
  </div>
</template>

<script>
import MainTabBar from "../../components/context/MainTabBar.vue";
import TopBar from "../../components/common/TopBar.vue";

export default {
  components: {
    MainTabBar,
    TopBar
  },
};
</script>

<style scoped>
.holder {
  height: 52px;
  width: 100%;
}
</style>