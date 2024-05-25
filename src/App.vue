<template>
  <div class="container">
    <HeaderComponent class="Header" />
    <div class="body">
      <div class="bannerImg">
        <img style="width: 100%; height: 100%" src="/banner.jpg" />
      </div>
      <div class="main"><router-view /></div>
    </div>
    <div class="blank"></div>
    <FooterConponent class="footer" />
  </div>
</template>
<script setup>
import HeaderComponent from "./components/inc/HeaderComponent.vue";
import FooterConponent from "./components/inc/FooterConponent.vue";
</script>
<style>
@font-face {
  font-family: "SejonghospitalBold";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/SejonghospitalBold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

body {
  margin: 0px;
  padding: 0px;
  font-family: "SejonghospitalBold";
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.bannerImg {
  width: 1910px;
  height: 200px;
}

.container {
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  height: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.body {
  width: 100%;
  height: 70%;
}

.main {
  height: 900px;
}

.footer {
  width: 100%;
  height: 10%;
  background-color: rgba(0, 0, 0, 0.781);
}

.Header {
  width: 1910px;
  height: 10%;

  background-color: rgba(0, 0, 0, 0.141);
}

.blank {
  width: 100%;
  height: 10%;
}
</style>
