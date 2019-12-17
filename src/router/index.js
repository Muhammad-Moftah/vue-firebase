import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import About from "../views/About";
import addSmoothie from "@/components/AddSmoothie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/addsmoothie",
    name: "addsmoothie",
    component: addSmoothie
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
