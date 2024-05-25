import { createRouter, createWebHistory } from "vue-router";

import BoardView from "../views/BoardView.vue";
import LoginView from "../views/LoginView.vue";
import BoardMain from "../views/BoardMain.vue";
import BoardCreate from "../views/BoardCreate.vue";
import BoardDetail from "../views/BoardDetail.vue";
import BoardUpdate from "../views/BoardUpdate.vue";
import BoardReply from "../views/BoardReply.vue";
 
const routes = [
  {
    path: "/",
    name: "main",
    component: BoardMain,
  },
  {
    path: "/board/:now",
    name: "board",
    component: BoardView,
  },
  {
    path: "/board/create",
    name: "boardCreate",
    component: BoardCreate,
  },
  {
    path: "/board/detail/:now/:b_Cnt",
    name: "BoardDetail",
    component: BoardDetail,
  },
  {
    path: "/board/update",
    name: "BoardUpdate",
    component: BoardUpdate,
  },
  {
    path: "/board/reply",
    name: "BoardReply",
    component: BoardReply,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
