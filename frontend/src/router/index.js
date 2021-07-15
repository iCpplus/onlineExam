import Vue from "vue";
import VueRouter from "vue-router";
// import Mine from "../views/mine/Mine.vue";
// import Create from "../views/create/Create.vue";
// import Write from "../views/write/Write.vue";

//路由懒加载
const Mine = () => import("../views/mine/Mine.vue");
const Create = () => import("../views/create/Create.vue");
const Write = () => import("../views/write/Write.vue");
//安装插件
Vue.use(VueRouter);

//创建路由对象
const routes = [
  {
    path: "",
    redirect: "/mine",
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/create",
    component: Create,
  },
  {
    path: "/write",
    component: Write,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

//导出router
export default router;
