<script setup>
import { useStore } from "vuex";

// let boardMap = {};
// let attachedList = [];
const store = useStore();
const boardInfo = store.getters.getBoardInfo;
const boardMap = boardInfo.boardMap;
const attachedList = boardInfo.attachedList;
console.log(boardMap);
console.log(attachedList);

// onMounted(() => {
//   const boardInfo = store.getters.getBoardInfo;
//   console.log(boardInfo);
// });
</script>

<template>
  <!-- 보드메인 -->

  <div class="boardMain">
    <div class="detailContanier">
      <div class="detailTitle">
        <div>{{ store.getters.getCnt }} 번 게시글</div>
        <div></div>
        <div>작성자 : {{ boardMap.b_writer }}</div>
      </div>
      <div class="detailContents">
        <div class="con_left">내용</div>
        <div class="con_right">{{ boardMap.b_contents }}</div>
      </div>
      <div class="attachedBox">
        <div class="attached_left">첨부파일 :</div>
        <div class="attached_detail">
          <div class="attached_right" v-for="(detail, i) in attachedList" :key="i">{{ detail.a_title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boardMain {
  margin-right: 20px;
  width: 1100px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.attached_detail {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.attachedBox {
  border-top: 1px solid black;
  height: 12.5%;
  display: flex;
}
.attached_right {
  cursor: pointer;
  align-items: center;
  margin-left: 50px;
  display: flex;

  background-color: rgba(56, 3, 56, 0);
  width: 100%;
  height: auto;
}
.attached_left {
  background-color: rgba(48, 85, 83, 0.089);
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
.con_right {
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  display: flex;
  justify-content: flex-start;
  background-color: rgba(56, 3, 56, 0);
  width: 90%;
  height: inherit;
}
.con_left {
  align-items: center;
  justify-content: center;
  display: flex;

  background-color: rgba(109, 46, 109, 0.171);
  width: 10%;
  height: 100%;
}
.detailContents {
  align-items: center;

  display: flex;
  width: 100%;
  height: 80%;
}
.detailTitle {
  justify-content: space-around;
  align-items: center;
  background-color: rgba(56, 71, 26, 0.24);
  width: 100%;
  height: 50px;
  display: flex;
}
.boardBottom {
  display: flex;
}
.detailContanier {
  border: 1px solid black;
  width: 1000px;
  height: 650px;
}
</style>
