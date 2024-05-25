<script setup>
import router from "/src/router/index.js";
import { store } from "@/store";
const goPage = (page) => {
  const userId = store.getters.getUserId;
  switch (page) {
    case "board":
      store.commit("setUrl", "main");
      break;
    case "upLoad":
      if (userId.length == 0) {
        alert("로그인이 필요한 서비스입니다.");
        router.push("/login");
      } else {
        store.commit("setUrl", "upLoad");
      }

      break;
    default:
      break;
  }
};
</script>

<template>
  <div class="sideBarContainer">
    <div class="blank"></div>
    <div class="comunity">커뮤니티</div>

    <div class="barColumn">엘범</div>
    <div class="barColumn" @click="goPage('board')">일반게시판</div>
    <div class="barColumn" @click="goPage('upLoad')">파일업로드</div>
    <div class="barColumn">한줄게시판</div>
    <div class="barColumn">등등게시판</div>
  </div>
</template>

<style scoped>
.comunity {
  display: flex;
  background-color: rgba(0, 0, 0, 0.341);
  color: white;
  justify-content: center;
  align-items: center;
  height: 10%;
  font-size: 20px;
}

.barColumn {
  cursor: pointer;
  line-height: 150%;
  margin-top: 20px;

  align-items: center;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
}
.barColumn:hover {
  background-color: rgb(179, 144, 100);
}
.sideBarContainer {
  width: 200px;
  margin-right: 2%;
}

.blank {
  width: 100%;
  height: 7%;
}
</style>
