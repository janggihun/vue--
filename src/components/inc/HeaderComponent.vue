<script setup>
import UserBox from '/src/components/inc/UserBox.vue';




</script>

<template>

    <div class="headrContainer">
        <div class="userBox">
            <div class="userBox_top">

                <UserBox />

            </div>
            <div class="userBox_bottom"></div>
        </div>
        <div class="clickBox">
            <div class="blank"></div>

            <router-link to="/demo" class="Demo">장기훈데모 </router-link>
            <router-link to="/info" class="routeBox">안내 </router-link>
            <router-link to="/register" class="routeBox">모집</router-link>
            <router-link to="/notify" class="routeBox">소식</router-link>
            <router-link to="/board/1" class="routeBox">자료실</router-link>
            <router-link to="/comunity" class="routeBox">커뮤니티</router-link>
            <div class="blank"></div>
        </div>
    </div>


</template>

<style scoped>
@font-face {
    font-family: 'YangjuByeolsanA1';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405@1.0/YangjuByeolsanA1.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

.router-link {

    color: white;

}

.headrContainer {
    font-family: 'YangjuByeolsanA1';
    display: flex;
    flex-direction: column;


    justify-content: space-around;
}

.Demo {
    width: 10%;
}

.routeBox {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 12%;
    height: 50px;

    padding: 1px;
    cursor: pointer;
}

.blank {

    width: 15%;


}

.userBox {


    height: 50%;


}

.clickBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 50%;
}
</style>