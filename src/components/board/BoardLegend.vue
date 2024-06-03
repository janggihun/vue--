<script setup>
import axios from "axios";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import router from "@/router";

const nowPage = 1;
const boardRowCount = 10;

const store = useStore();
const boardList = computed(() => store.state.boardList);

/* 
- get_boardInfo
- (boardNumber) -> RestApi("/board/detail")
- 게시글 정보 요청
*/

const get_boardInfo = async (boardNumber) => {
  const res = await axios.post("/board/detail", {
    b_Cnt: boardNumber,
  });
  store.commit("setUrl", "detail");
  store.commit("setCnt", boardNumber);
  store.commit("setBoardInfo", res.data);
  router.push("/board");
};

/*
- (nowPage, boardRowCount) -> RestAPI
- 게시판 정보 요청
    axios post : get -> post로 변경 (게시글내용)
*/
onMounted(async () => {
  const res = await axios.post("/board/boardInfo", {
    now: nowPage,
    count: boardRowCount,
  });

  store.commit("setBoardList", await res.data);
});
</script>

<template>
  <div class="boardContainer">
    <div class="legendContainer">
      <div class="checkBox">답변확인</div>
      <div class="cnt">
        <div>번호</div>
      </div>
      <div class="title">제목</div>
      <div class="writter">글쓴이</div>
      <div class="date">작성일</div>
      <div class="file">파일</div>
      <div class="clicked">조회수</div>
    </div>
    <div class="rowContainer" v-for="(detail, i) in boardList" :key="i">
      <div class="checkBox" v-if="detail.b_charge === 'admin'">답변완료</div>
      <div class="checkBox" v-else>대기중</div>
      <div class="cnt">
        <div>{{ detail.b_Cnt }}</div>
      </div>
      <div class="title" @click="get_boardInfo(detail.b_Cnt)">{{ detail.b_title }}</div>
      <div class="writter">{{ detail.b_writer }}</div>
      <div class="date">{{ detail.b_date }}</div>
      <div class="file">
        <div v-if="detail.attachedFileList.length != 0">{{ detail.attachedFileList.length }}</div>
        <div v-else></div>
      </div>
      <div class="clicked">조회수</div>
    </div>
  </div>
</template>
<style scoped>
.checkBoxContainer {
  width: 50px;
  height: inherit;
}
.rowContainer {
  color: gray;
  align-items: center;
  display: flex;
  height: 50px;
  border-bottom: 1px solid black;
}

.legendContainer {
  align-items: center;
  display: flex;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.164);
  border-bottom: 1px solid black;
  border-top: 1px solid black;
}

.checkBox {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 10%;
  height: inherit;
}

.cnt {
  display: flex;
  justify-content: center;
  width: 5%;
}

.title {
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 400px;
}
.title:hover {
  color: black;
}
.writter {
  display: flex;
  justify-content: center;
  width: 8%;
}

.date {
  display: flex;
  justify-content: center;
  width: 25%;
}

.file {
  display: flex;
  justify-content: center;
  width: 7%;
}

.clicked {
  display: flex;
  justify-content: center;
  width: 7%;
}
</style>
