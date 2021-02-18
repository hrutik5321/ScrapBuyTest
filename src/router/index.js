import { createRouter, createWebHistory } from "vue-router";
import Base from "../views/Base.vue";

const routes = [
  {
    path: "/",
    component: Base
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
