// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import WorksPage from "./components/WorksPage.vue";
import AboutPage from "./components/AboutPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/works",
    name: "works",
    component: WorksPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
