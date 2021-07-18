<template>
  <div class="create">
    <top-bar>
      <template v-slot:pageTitle> 新建 </template>
    </top-bar>

    <div class="holder"></div>

    <create-top></create-top>
    <exam-template class="exams"></exam-template>

    <div class="holder"></div>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import CreateTop from "./CreateTop.vue";
import ExamTemplate from "./ExamTemplate.vue";
import TopBar from "../../components/common/TopBar.vue";
import MainTabBar from "../../components/context/MainTabBar.vue";

export default {
  components: {
    CreateTop,
    ExamTemplate,
    TopBar,
    MainTabBar,
  },
  methods:{
    
  }
};
</script>

<style scoped>
.create {
  width: 100%;
  height: 100%;
  background: #f5f6f7;
  display: flex;
  justify-content: center;
  padding-top: 5%;
  flex-wrap: wrap;
}
.exams {
  margin-top: 8%;
}
.holder {
  height: 52px;
  
  width: 100%;
}
</style>