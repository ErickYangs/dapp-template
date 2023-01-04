import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./view/HomePage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./view/AboutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
