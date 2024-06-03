<script setup>
import router from "@/router";
import { store } from "@/store";
import axios from "axios";

/*
1.
  userId  : 로그인아이디
  userPw  : 비밀번호

2. changeId

3. (userId, userPw) -> RestAPI 

4. 로그인

  로그인 정보 -> Store 저장 
*/

const changeId = async () => {
  const $userId = document.getElementById("userId");
  const $userPw = document.getElementById("userPw");
  const res = await axios.post("/login/idcheck", {
    userId: $userId.value,
    userPw: $userPw.value,
  });

  if (res.data.length != 0) {
    alert("로그인성공" + res.data + "님 안녕하세요");
    store.commit("setUserId", $userId.value);
    store.commit("setUrl", "main");
    router.push("/board");
  } else {
    alert("로그인실패");
  }
};
</script>

<template>
  <div class="boardContainer">
    <!-- //for문 -->
    <div class="loginBox">
      <div class="column">
        <div class="left">아이디</div>
        <div><input type="text" id="userId" value="" /></div>
      </div>
      <div class="column">
        <div class="left">패스워드</div>
        <div><input type="password" id="userPw" value="" /></div>
      </div>

      <div class="column"><button @click="changeId">로그인</button></div>
      <div class="column">
        <div class="left">회원가입</div>
        <div>아이디/비밀번호찾기</div>
      </div>
    </div>
  </div>
  <div class="viewPoint">여기</div>
</template>
<style scoped>
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
