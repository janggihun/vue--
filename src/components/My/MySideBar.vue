<script setup>
import { store } from "/src/store.js";
const goPage = (url) => {
  store.commit("setUrl", url);
};
</script>

<template>
  <div class="sideBarContainer">
    <div class="blank"></div>
    <div class="comunity">마이페이지</div>

    <div class="barColumn" @click="goPage('signUp')">회원가입</div>
    <div class="barColumn">이용약관</div>
    <div class="barColumn">개인정보처리방침</div>
    <div class="barColumn">사이트맵</div>
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
  background-color: antiquewhite;
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
