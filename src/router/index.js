import { createRouter, createWebHistory } from "vue-router";

import MyView from "../views/MyView.vue";
import BoardMain from "../views/BoardMain.vue";

const routes = [
  {
    path: "/board",
    name: "board",
    component: BoardMain,
  },
  {
    path: "/My",
    name: "login",
    component: MyView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
