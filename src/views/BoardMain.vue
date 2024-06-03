<script setup>
import { computed } from "vue";
import { store } from "/src/store.js";
import BoardSideBar from "/src/components/board/BoardSideBar.vue";
import BoardQuick from "/src/components/board/BoardQuick.vue";
import BoardFrame from "/src/components/board/BoardFrame.vue";
import BoardUpload from "/src/components/board/BoardUpload.vue";
import BoardDetail from "/src/components/board/BoardDetail.vue";

/* 
// url

내용 : 자식 컴포넌트에서 Store-url 변경시 현재 컴포넌트에서 리렌더링을 실행

이유 : url 노출을 막기 위해 내부적으로 url을 조정하여 컴포넌트 별로 렌더링실행

main : 게시판

upLoad : 글쓰기

detail : 세부내용

// css

모든 스타일은 스코프를 통해서 컴포넌트간의 css의 중첩상황을 제거

공통 css 관리 - ./style/css_global.css 
 */
const url = computed(() => store.state.url);
store.commit("setUrl", "main");
</script>

<template>
  <div class="mainContainer">
    <div class="blank"></div>
    <div class="boardBox">
      <BoardSideBar />
      <BoardFrame v-if="url == 'main'"></BoardFrame>
      <BoardUpload v-else-if="url == 'upLoad'"></BoardUpload>
      <BoardDetail v-else-if="url == 'detail'"></BoardDetail>
      <BoardQuick />
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
