<script setup>
import BoardSideBar from '/src/components/board/BoardSideBar.vue';
import BoardQuick from '/src/components/board/BoardQuick.vue';
import BoardFrame from '/src/components/board/BoardFrame.vue';



</script>


<template>
    <div class="mainContainer">
        <div class="blank"></div>
        <div class="boardBox">
            <BoardSideBar />
            <!-- // BoardFrame 내용물 렌더시 변경 -->
            <BoardFrame></BoardFrame>

            <BoardQuick />
        </div>
        <div class="blank"></div>
    </div>
</template>


<style scoped>
.mainContainer {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: row;
}



.blank {

    width: 10%;
}

.boardBox {
    height: 800px;
    width: 80%;
    display: flex;
    flex-direction: row;
}
</style>