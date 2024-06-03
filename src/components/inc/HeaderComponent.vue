<script setup>
import UserBox from "/src/components/inc/UserBox.vue";
import router from "/src/router/index.js";
import { store } from "@/store";
/* 
- goPage
- (url) -> router
*/
const goPage = (url) => {
  switch (url) {
    case "info":
      router.push("/info");
      break;
    case "register":
      router.push("/register");
      break;
    case "notify":
      router.push("/notify");
      break;
    case "board":
      router.push("/board");
      store.commit("setUrl", "main");
      break;
    case "comunity":
      router.push("/comunity");
      break;

    default:
      break;
  }
};
</script>

<template>
  <div class="headrContainer">
    <div class="userBox">
      <div class="userBox_top">
        <UserBox />
      </div>
      <div class="userBox_bottom"></div>
    </div>
    <div class="clickBox">
      <div class="blank"></div>

      <div class="Demo pannerSize">장기훈데모</div>
      <div class="routeBox" @click="goPage('info')">안내</div>
      <div class="routeBox" @click="goPage('register')">모집</div>
      <div class="routeBox" @click="goPage('notify')">소식</div>
      <div class="routeBox" @click="goPage('board')">자료실</div>
      <div class="routeBox" @click="goPage('comunity')">커뮤니티</div>

      <div class="blank"></div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "YangjuByeolsanA1";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2405@1.0/YangjuByeolsanA1.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

.router-link {
  color: white;
}

.headrContainer {
  font-family: "YangjuByeolsanA1";
  display: flex;
  width: 1910px;
  flex-direction: column;

  justify-content: space-around;
}

.Demo {
  width: 10%;
}

.routeBox {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 12%;
  height: 50px;
  border-radius: 20px;
  padding: 1px;
  cursor: pointer;
  transition: all 0.5s;
}

.routeBox:hover {
  border-radius: 20px;

  background-color: rgba(0, 0, 0, 0.356);
}

.blank {
  width: 15%;
}

.userBox {
  height: 50%;
}

.clickBox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50%;
}
</style>
