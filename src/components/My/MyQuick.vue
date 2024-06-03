<template>
  <div class="quickContainer"> 
    <div class="blank"></div>
    <div class="quickBox">퀵박스</div>
    <div class="quickBox">퀵박스</div>
    <div>TOP</div>
  </div>
</template>

<style scoped>
.quickContainer {
  width: 10%;
}

.blank {
  height: 8%;
}

.quickBox {
  display: flex;
  justify-content: center;
  margin-top: 2px;
  background-color: rgba(0, 0, 0, 0.117);
  width: 100%;
  height: 15%;
}
</style>
