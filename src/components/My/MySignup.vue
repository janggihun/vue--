<script setup>
import MyTittle from "/src/components/My/MyTittle.vue";
import router from "@/router";
import { store } from "@/store";
import axios from "axios";
import { defineModel } from "vue";

const inputId = defineModel();

/*
- signUpId
- (userId , userPw) -> RestAPI("/insert")
*/
const signUpId = async () => {
  const $flag = document.getElementById("flag");
  const $userId = document.getElementById("userId");
  const $userPw = document.getElementById("userPw");
  console.log($flag.value);

  const res = await axios.post("/insert", {
    userId: $userId.value,
    userPw: $userPw.value,
  });

  if (res.data == 1) {
    alert("회원가입 성공");
    store.commit("setUrl", "login");
    router.push("/my");
  } else {
    alert("회원가입 실패");
  }
};
/*
- checkId
- (inputId)-> RestAPI("/signup/idcheck")
*/
const checkId = async (e) => {
  inputId.value = e.target.value;
  const res = await axios.post("/signup/idcheck", {
    userId: e.target.value,
  });
  if (res.data == 0) {
    inputId.value = "회원가입가능";
  } else {
    inputId.value = "아이디중복";
  }
};
</script>

<template>
  <div class="boardMain">
    <MyTittle />
    <div>회원가입 페이지 입니다.</div>
    <div class="boardContainer">
      <div class="loginBox">
        <div class="column">
          <div class="left">아이디</div>
          <div><input type="text" id="userId" value="" @input="checkId" /></div>
        </div>
        <div id="flag">{{ inputId }}</div>
        <div class="column">
          <div class="left">패스워드</div>
          <div><input type="password" id="userPw" value="" /></div>
        </div>

        <div class="column"><button @click="signUpId">회원가입</button></div>
      </div>
    </div>
    <div class="viewPoint">여기</div>
  </div>
</template>

<style scoped>
.boardMain {
  margin-right: 20px;
  width: 1100px;
  height: inherit;
  display: flex;
  flex-direction: column;
}

.boardBottom {
  display: flex;
}
.boardContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
}
.loginBox {
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.column {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
  width: 250px;
  height: 50px;
}
input {
  width: 100px;
}
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
}
button {
  width: 230px;
  height: 30px;
}
</style>
