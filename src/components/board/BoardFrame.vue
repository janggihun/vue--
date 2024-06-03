<script setup>
import BoardSearch from "/src/components/board/BoardSearch.vue";
import BoardTittle from "/src/components/board/BoardTittle.vue";
import BoardLegend from "/src/components/board/BoardLegend.vue";
</script>

<template>
  <div class="boardMain">
    <BoardTittle />
    <BoardLegend />
    <div class="boardBottom">
      <BoardSearch />
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
}

.boardBottom {
  display: flex;
}
</style>
