import { createRouter, createWebHistory } from "vue-router";
import Home from "../comp/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

//   {
//     path: "/about",
//     name: "About",
    
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },