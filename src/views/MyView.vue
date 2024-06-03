<script setup>
import MySideBar from "/src/components/My/MySideBar.vue";
import MyQuick from "/src/components/My/MyQuick.vue";
import MyFrame from "/src/components/My/MyFrame.vue";
import MySignup from "/src/components/My/MySignup.vue";
import { computed } from "vue";
import { store } from "/src/store.js";
/* 
login : 로그인

signUp : 회원가입
 */
const url = computed(() => store.state.url);
</script>

<template>
  <div class="mainContainer">
    <div class="blank"></div>
    <div class="boardBox">
      <MySideBar />
      <!-- // BoardFrame 내용물 렌더시 변경 -->

      <MyFrame v-if="url == 'login'"></MyFrame>
      <MySignup v-if="url == 'signUp'"></MySignup>
      <MyQuick />
    </div>
    <div class="blank"></div>
  </div>
</template>

<style scoped>
.mainContainer {
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  width: 1910px;
  height: inherit;
  display: flex;
  flex-direction: row;
}

.blank {
  width: 10%;
}

.boardBox {
  height: 800px;
  width: 80%;
  display: flex;
  flex-direction: row;
}
</style>
