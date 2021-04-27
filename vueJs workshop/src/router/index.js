import { createRouter, createWebHistory } from "vue-router";
import Sign from "../views/Sign.vue";
import Login from "../views/Login.vue";
import Forgot from "../views/Forgot.vue";


const routes = [
  {
    path: "/",
    name: "Sign",
    component: Sign,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Forgot",
    name: "Forgot",
    component: Forgot,
  },
    {
    path: "/Forgot",
    name: "Forgot",
    component: Forgot,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
