<script setup>
// const userId = ""
import axios from 'axios';
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex';
const now = 1
const count = 10

const store = useStore()
const boardList = computed(() => store.state.boardList);
onMounted(async () => {
    const res = await axios.post("/board/boardInfo", {
        now: now, count: count
    })

    store.commit("setBoardList", await res.data)

})

</script>   


<template>
    <div class="boardContainer">
        <div class="legendContainer">
            <div class="checkBox"> 체크 </div>
            <div class="cnt">
                <div>번호</div>
            </div>
            <div class="title">제목</div>
            <div class="writter">글쓴이</div>
            <div class="date">작성일</div>
            <div class="file">파일</div>
            <div class="clicked">조회수</div>
        </div>
        <div class="rowContainer" v-for="(detail, i) in boardList" :key="i">
            <div class="checkBox"> 체크 </div>
            <div class="cnt">
                <div>{{ detail.b_Cnt }}</div>
            </div>
            <div class="title">{{ detail.b_title }}</div>
            <div class="writter">{{ detail.b_writer }}</div>
            <div class="date">{{ detail.b_date }}</div>
            <div class="file">
                <div v-if="detail.attachedFileList.length != 0">{{ detail.attachedFileList.length }}
                </div>
                <div v-else></div>

            </div>
            <div class="clicked">조회수</div>
        </div>
        <!-- //for문 -->
    </div>
</template>
<style scoped>
.rowContainer {
    align-items: center;
    display: flex;
    height: 50px;
    border-bottom: 1px solid black;
}

.legendContainer {
    align-items: center;
    display: flex;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.164);
    border-bottom: 1px solid black;
    border-top: 1px solid black;
}

.checkBox {
    display: flex;
    justify-content: center;
    width: 10%;
}

.cnt {
    display: flex;
    justify-content: center;
    width: 5%;
}

.title {
    display: flex;
    justify-content: center;
    width: 600px;
}

.writter {
    display: flex;
    justify-content: center;
    width: 8%;
}

.date {
    display: flex;
    justify-content: center;
    width: 25%;
}

.file {
    display: flex;
    justify-content: center;
    width: 7%;
}

.clicked {
    display: flex;
    justify-content: center;
    width: 5%
}
</style>