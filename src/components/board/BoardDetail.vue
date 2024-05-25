<script setup>
import { useStore } from "vuex";
import axios from "axios";
import dayjs from "dayjs";
import router from "@/router";
// let boardMap = {};
// let attachedList = [];
const store = useStore();
const boardInfo = store.getters.getBoardInfo;
const boardMap = boardInfo.boardMap;
const attachedList = boardInfo.attachedList;
const userId = store.getters.getUserId;
console.log(boardMap);
console.log(attachedList);

const downloadFile = (a, b, c) => {
  let fileName = a + "_" + b + "_" + c;
  console.log(fileName);

  const fileUrl = "/board/download/" + fileName;
  axios({
    method: "get",
    url: fileUrl,
    responseType: "blob",
  }).then((res) => {
    const newUrl = window.URL.createObjectURL(new Blob([res.data]));
    const atag = document.createElement("a");
    atag.href = newUrl;
    atag.download = c;
    atag.click();
    atag.remove();
    window.URL.revokeObjectURL(newUrl);
  });
};
let reply = "";
const reply_coment = (e) => {
  reply = e.target.value;
  console.log(e.target.value);
};
const replySave = () => {
  let url = "/board/reply";
  let data = {
    b_Cnt: store.getters.getCnt,
    b_charge: userId,
    b_answer: reply,
    b_replyDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  };
  axios({
    method: "put",
    url: url,
    data: data,
  }).then((res) => {
    console.log(res.data);
    router.push("/board");
    store.commit("setUrl", "main");
  });
};
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
          <div class="attached_right" v-for="(detail, i) in attachedList" :key="i" @click="downloadFile(store.getters.getCnt, detail.a_num, detail.a_title)">{{ detail.a_title }}</div>
        </div>
      </div>

      <div class="blank"></div>
      <div v-if="userId == 'admin'">
        <div class="replyContainer" v-if="!boardMap.b_charge">
          <div class="input_reply"><input style="height: 100%; width: 100%" type="text" @input="reply_coment" /></div>
          <div class="btn_reply">
            <input type="button" value="답변하기" style="height: 100%; width: 100%" @click="replySave" />
          </div>
        </div>
        <div class="replyContainer" v-else>
          <div class="input_reply">답변완료 : {{ boardMap.b_answer }}</div>
          <div class="btn_reply"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.replyContainer {
  width: 100%;
  height: 200px;
  background-color: aquamarine;
  justify-content: center;
  align-items: center;
  display: flex;
}
.input_reply {
  margin-left: 5%;
  margin-right: 5%;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 80%;
  height: 30%;
}
.btn_reply {
  width: 15%;
  height: 20%;
  margin-right: 5%;
}
.boardMain {
  margin-right: 20px;
  width: 1100px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blank {
  width: 100%;
  height: 50px;
}
.attached_detail {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.attachedBox {
  border-top: 1px solid black;
  height: 20%;
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
  height: 70%;
}
.detailTitle {
  justify-content: space-around;
  align-items: center;
  background-color: rgba(56, 71, 26, 0.24);
  width: 100%;
  height: 10%;
  display: flex;
}
.boardBottom {
  display: flex;
}
.detailContanier {
  border: 1px solid black;
  width: 1000px;
  height: 300px;
}
</style>
