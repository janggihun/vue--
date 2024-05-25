<script setup>

import router from "/src/router/index.js"

const goPage = (where) => {
    switch (where) {
        case "home":
            router.push("/");
            break;
        case "login":
            router.push("/login");
            break;
        case "signUp":
            router.push("/signUp");
            break;
        case "findUserInfo":
            router.push("/findUserInfo");
            break;

        default:
            break;
    }
};

</script>


<template>


    <div class="userBox">
        <div class="blank"></div>
        <div class="controllerBox" @click="goPage('home')">홈</div>
        <div class="controllerBox" @click="goPage('login')">로그인</div>
        <div class="controllerBox" @click="goPage('signUp')">회원가입</div>
        <div class="controllerBox" @click="goPage('findUserInfo')"> 아이디/비밀번호찾기</div>
        <div class="controllerBox" @click="goPage('/')">원격지원</div>
    </div>



</template>


<style scoped>
.userBox {
    cursor: pointer;
    padding-top: 10px;
    padding-right: 200px;
    font-size: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}

.controllerBox:hover {

    color: gray;
}

.blank {
    width: 80%;
}
</style>
