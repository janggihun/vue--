<script setup>
import MyTittle from "/src/components/My/MyTittle.vue";
import MyLogin from "/src/components/My/MyLogin.vue";

</script>

<template>
  <!-- 보드메인 -->
  <div class="boardMain">
    <MyTittle />
    <MyLogin />
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
</style>
