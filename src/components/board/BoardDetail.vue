<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import axios from "axios";
import dayjs from "dayjs";
import router from "@/router";

const store = useStore();
const boardInfo = store.getters.getBoardInfo;

const boardMap = boardInfo.boardMap;
const boardWriter = boardMap.b_writer;
const attachedList = boardInfo.attachedList;
const userId = store.getters.getUserId;
const update = ref(0);
let inputReply = "";
let inputData = "";

const reply_coment = (e) => {
  inputReply = e.target.value;
};
const updateCheck = computed(() => {
  return update;
});
console.log(updateCheck);
/*
- (boardNumber, attachedNumber , attachedtTitle) -> RestAPI -> start client download
- 파일 다운로드
  - 고유저장된 이름을 찾아 download를 시작 
*/
const downloadFile = (boardNumber, attachedNumber, attachedtTitle) => {
  const fileName = boardNumber + "_" + attachedNumber + "_" + attachedtTitle;
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
    atag.download = attachedtTitle;
    atag.click();
    atag.remove();
    window.URL.revokeObjectURL(newUrl);
  });
};

/*
- replySave
- (boardNumber,userId, boardInputReply, boardDateReply)-> RestAPI("/board/reply")
- 답변 업데이트
  - 게시글에 답변 저장
*/

const replySave = () => {
  const url = "/board/reply";
  let data = {
    b_Cnt: store.getters.getCnt,
    b_charge: userId,
    b_answer: inputReply,
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

const updateValidation = () => {
  if (boardWriter === userId) {
    update.value = 1;
  } else {
    alert("변경은 본인만 가능합니다.");
  }
};

/*
- updatePage
- (boardNum , boardContents) -> RestAPI("/board/update")
- 업데이트
*/
const updatePage = async () => {
  const res = await axios.post("/board/update", {
    b_Cnt: store.getters.getCnt,
    b_contents: inputData,
  });
  if (res.data === 1) {
    alert("변경성공");
    router.push("/board");
  }
};
/*
- deletePage
- (boardNumber) -> RestAPI("/board/delete")
- 삭제
  - 로그인 아이디와 작성자가 같을시 삭제 요청
*/
const deletePage = async (boardNumber) => {
  if (boardWriter === userId) {
    const res = await axios.delete("/board/delete", {
      params: {
        b_Cnt: boardNumber,
        b_writer: boardWriter,
      },
    });
    if (res.data === 1) {
      alert("삭제성공");
      router.push("/board");
    } else {
      alert("전송실패, 관리자에게 문의하세요");
    }
  } else {
    alert("작성자만 삭제 가능합니다.");
  }
};
</script>

<template>
  <div class="boardMain">
    <div class="detailContanier">
      <div class="detailTitle">
        <div>{{ store.getters.getCnt }} 번 게시글</div>
        <div></div>
        <div>작성자 : {{ BoardWriter }}</div>
      </div>

      <div class="detailContents" v-if="update === 0">
        <div class="con_left">내용</div>
        <div class="con_right">{{ boardMap.b_contents }}</div>
      </div>
      <div class="detailContents" v-if="update === 1">
        <div class="con_left">내용</div>
        <div class="con_right"><input v-model="inputData" class="inputDetail" placeholder="변경내용을 적어주세요" /></div>
      </div>
      <div class="attachedBox">
        <div class="attached_left">첨부파일 :</div>
        <div class="attached_detail">
          <div class="attached_right" v-for="(detail, i) in attachedList" :key="i" @click="downloadFile(store.getters.getCnt, detail.a_num, detail.a_title)">{{ detail.a_title }}</div>
        </div>
      </div>

      <div class="blank"></div>
      <div class="btnContainer">
        <button class="btn1" v-on:click="updateValidation()" v-if="update === 0">수정하기</button>
        <button class="btn1" v-on:click="updatePage(store.getters.getCnt)" v-if="update === 1">변경하기</button>
        <button class="btn1" v-on:click="deletePage(store.getters.getCnt)">삭제하기</button>
      </div>

      <div class="blank"></div>
      <div v-if="userId == 'admin'">
        <div class="replyContainer" v-if="!boardMap.b_charge">
          <div class="input_reply"><input style="height: 100%; width: 100%" type="text" @input="reply_coment" /></div>
          <div class="btn_reply">
            <input type="button" value="답변하기" style="height: 100%; width: 100%" @click="replySave" />
          </div>
        </div>
      </div>

      <div class="replyContainer" v-else>
        <div class="replayTitle">
          <div>{{ store.getters.getCnt }} 번 게시글 | 답변완료</div>
          <div>작성자 : 관리자</div>
        </div>

        <div class="input_reply">답변 : {{ boardMap.b_answer }}</div>
        <div class="btn_reply"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/style/css_global.css";
.inputDetail {
  width: 700px;
  height: 150px;
}
.btnContainer {
  display: flex;
  align-items: center;
  justify-content: end;
}
.replyContainer {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: rgba(56, 3, 56, 0.1);
  justify-content: center;
  align-items: center;
  display: flex;
}
.replayTitle {
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 10%;
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
