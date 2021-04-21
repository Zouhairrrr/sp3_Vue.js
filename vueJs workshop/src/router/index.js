import { createRouter, createWebHistory } from "vue-router";
import sign from "../views/sign.vue";
import login from "../views/login.vue";
import forgot from "../views/forgot.vue";

const routes = [
  {
    path: "/",
    name: "sign",
    component: sign,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: forgot,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
