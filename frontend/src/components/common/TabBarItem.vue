<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="item-icon-active">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#4873c0",
    },
  },
  computed: {
    isActive() {
      // return this.$route.path.indexOf(this.path) !== -1
      //判断当前所在路由是不是父组件传进子组件的path
      //this.$route.path :当前所在路由
      //this.path :父组件传到子组件的path
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      if (this.$route.path != this.path) {
        this.$router.replace(this.path);
      }
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  margin-top: 2px;
}
.item-icon img {
  width: 24px;
  height: 24px;
}
.item-icon-active img {
  width: 24px;
  height: 24px;
}
.item-text {
  font-size: 14px;
}
</style>