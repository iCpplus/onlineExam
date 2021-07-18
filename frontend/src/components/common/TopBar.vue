<template>
  <div class="top-bar">
    <div class="side">
      <img
        src="../../assets/img/topBar/back.svg"
        alt=""
        v-show="hasBack"
        @click="goBack()"
      />
    </div>
    <div class="page-title"><slot name="pageTitle"></slot></div>
    <div class="side"><slot name="topRight"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    hasBack: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      console.log("goback");
    },
  },
};
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 52px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #4873c0;
}
.top-bar .side {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-bar .page-title {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.top-bar .side img {
  width: 36px;
  height: 36px;
}
</style>