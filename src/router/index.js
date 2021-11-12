import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/character/:id",
    name: "character",
    component: () => import("../views/Character.vue"),
  },
  {
    path: "/episodes",
    name: "episodes",
    component: () => import("../views/Episodes.vue"),
  },
  {
    path: "/episodes/:id",
    name: "episode",
    component: () => import("../views/Episode.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
