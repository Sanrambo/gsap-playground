import { createRouter, createWebHistory } from "vue-router";
import app from "../App.vue";
import Page from "../views/ToPage.vue";
import Home from "../views/Home.vue";
import Hover from "../views/Hover.vue";

const routes = [
  {
    path: "/page",
    name: "Page",
    component: Page,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/hover",
    name: "Hover",
    component: Hover,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
