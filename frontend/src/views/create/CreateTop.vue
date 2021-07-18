<template>
  <div class="top">
    <div class="new text" @click="createExam()">
      <span>新建试卷+</span>
    </div>
    <div class="other">
      <div class="item text">投票</div>
      <div class="item text">接龙</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    createExam() {
      this.$router.push("/createExam");
    },
  },
};
</script>

<style scoped>
.top {
  width: 98%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.top .new {
  width: 48%;
  height: 100px;
  background: #ffffff;
  border-radius: 5%;
}
.text {
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 20px;
}
.other {
  width: 48%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
.other .item {
  width: 100%;
  height: 45px;
  background: #ffffff;
  border-radius: 5%;
}
</style>