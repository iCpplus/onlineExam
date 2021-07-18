<template>
  <div class="main">
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <exam-template-item></exam-template-item>
    <div class="assist"></div>
    <div class="assist"></div>
  </div>
</template>

<script>
import ExamTemplateItem from "./ExamTemplateItem.vue";

export default {
  components: {
    ExamTemplateItem,
  },
};
</script>

<style scoped>
.main {
  width: 98%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.assist{
    width: 30%;
    height: 130px;
    margin: 5px;
}
</style>