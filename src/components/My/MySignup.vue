<script setup>
import MyTittle from "/src/components/My/MyTittle.vue";
</script>

<template>
  <!-- 보드메인 -->
  <div class="boardMain">
    <MyTittle />
    <div>회원가입 페이지 입니다.</div>

    <div class="boardContainer">
      <!-- //for문 -->
      <div class="loginBox">
        <div class="column">
          <div class="left">아이디</div>
          <div><input type="text" id="userId" value="" /></div>
        </div>
        <div >아이디입력</div>
        <div class="column">
          <div class="left">패스워드</div>
          <div><input type="password" id="userPw" value="" /></div>
        </div>

        <div class="column"><button @click="changeId">회원가입</button></div>
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
