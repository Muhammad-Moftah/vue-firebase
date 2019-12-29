import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import addSmoothie from "@/components/AddSmoothie";
import editSmoothie from "@/components/EditSmoothie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/addsmoothie",
    name: "addsmoothie",
    component: addSmoothie
  },
  {
    path: "/EditSmoothie/:smoothie_slug",
    name: "EditSmoothie",
    component: editSmoothie
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
