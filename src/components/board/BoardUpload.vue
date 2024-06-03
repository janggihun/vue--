<script setup>
import { computed } from "vue";
import dayjs from "dayjs";
import { store } from "/src/store.js";
import axios from "axios";
/*

title : 글 제목
contents : 글 내용

*/
let title = "";
let contents = "";

const fileList = computed(() => store.getters.getfileList);
store.commit("resetFileList", "");

/*

1. 
  e : 윈도우이벤트

2. onFileChange

3. (e) -> Store

4. 파일리스트 프론트에 저장

*/
const onFileChange = (e) => {
  // console.log(e.target.files[0]);
  store.commit("setFileList", e.target.files[0]);
};

/*
1. 
  e : 윈도우이벤트

2. input_title

3. (e) -> value

4. 변수에 값 저장

*/
const input_title = (e) => {
  title = e.target.value;
};
/*
1. 
  e : 윈도우이벤트

2. input_contents

3. (e) -> value

4. 변수에 값 저장

*/
const input_contents = (e) => {
  contents = e.target.value;
};

/*
1. 
  fileList : 첨부파일 리스트
  formData : Form객체
  axios 타입 : multipart/form-data 
2. input_contents

3. (formData) -> RestApi

4. 첨부파일 저장

*/
const registerAttached = () => {
  const fileList = store.getters.getfileList;
  let formData = new FormData();
  formData.append("b_writer", store.state.userId);
  formData.append("b_title", title);
  formData.append("b_contents", contents);
  formData.append("b_date", dayjs().format("YYYY-MM-DD HH:mm:ss"));
  fileList.forEach((el) => {
    formData.append("files", el);
  });

  axios
    .post("/board/insertAttached", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function () {
      store.commit("setUrl", "main");
      location.href = "/board";
    })
    .catch(function (error) {
      console.log(error);
    });
};

/*

1. 

  i : 첨부파일 인덱스

2. remove

3. (i) -> Store

4. 프론트에 저장된 첨푸파일목록 삭제

*/

const remove = (i) => {
  store.commit("removeFileList", i);
};
</script>

<template>
  <div class="boardMain">
    <div class="detailContanier">
      <div class="detailTitle">
        <div>게시글 작성 페이지입니다.</div>
        <div>제목 : <input type="text" @input="input_title" /></div>
        <div>작성자 : {{ store.getters.getUserId }}</div>
      </div>
      <div class="detailContents">
        <div class="con_left">내용</div>
        <input type="text" @input="input_contents" class="con_right" />
      </div>
      <div class="attachedBox">
        <div class="attached_left">첨부파일 :</div>
        <div class="attached_detail">
          <div class="attached_right"><input type="file" name="file" multiple="multiple" ref="fileInput" @change="onFileChange" /></div>
        </div>
        <div class="remove">
          <div v-for="(el, i) in fileList" :key="i" class="fileList">
            {{ el.name.length > 3 ? `${el.name.slice(0, 3)}...` : el.name }}
            <a href="#" @click="remove(i)"> 삭제 , </a>
          </div>
        </div>
      </div>
      <div class="upload_btn">
        <button @click="registerAttached">게시글 올리기</button>
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
.upload_btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
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
  width: 50%;
  height: auto;
}
.remove {
  cursor: pointer;
  align-items: center;
  margin-left: 50px;
  display: flex;
  width: 50%;
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
  width: 80%;
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
.fileList {
  margin-left: 5px;
}
</style>
