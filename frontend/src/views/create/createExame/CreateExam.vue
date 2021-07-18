<template>
  <div class="create-exam">
    <top-bar :hasBack="true"></top-bar>

    <div class="card">
      <input type="text" placeholder="请输入标题" class="exam-title" />
      <input type="text" placeholder="请输入考试描述" class="exam-title" />
    </div>
  </div>
</template>

<script>
import TopBar from "../../../components/common/TopBar.vue";

export default {
  components: {
    TopBar,
  },
};
</script>

<style scoped>
.create-exam {
 
  padding: 5px;
  padding-top: 52px;
  background: #f2f2f2;
}
input {
  outline-style: none;
  border: 0;
  padding: 5px;
  font-size: 16px;
  caret-color: #4873c0;
}
input:focus {
  border-color: #66afe9;
  border: 1px solid #4873c0;
  border-radius: 5px;
}
.card {
  background: #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
}
.exam-title{
  width: 98%;
}
</style>