<script setup>



</script>


<template>


    <div class="userBox">
        <div class="blank"></div>
        <div class="controllerBox">홈</div>
        <div class="controllerBox">로그인</div>
        <div class="controllerBox">회원가입</div>
        <div class="controllerBox"> 아이디/비밀번호찾기</div>
        <div class="controllerBox">원격지원</div>
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
