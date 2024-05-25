<script setup>
import axios from 'axios';
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex';

const now = 1
const count = 10
const store = useStore()
// const boardList = store.state.boardList

const pageList = computed(() => store.state.pageList);
const page = computed(() => store.state.page);
onMounted(async () => {
    const res = await axios.post("/board/pageInfo", {
        now: now, count: count
    })
    console.log(res.data)
    store.commit("setPageList", await res.data.pageList)
    store.commit("setPage", await res.data.page)

})
const getNewPage = async (now) => {

    const res = await axios.post("/board/pageInfo", {
        now: now, count: count
    })
    store.commit("setPageList", await res.data.pageList)
    store.commit("setPage", await res.data.page)

    const res1 = await axios.post("/board/boardInfo", {
        now: now, count: count
    })

    store.commit("setBoardList", await res1.data)
}

const clickPage = (cnt) => {

    if (cnt == 0) {
        if (store.getters.getPage.pre == 0) {
            alert("this is firstPage")
        } else if (store.getters.getPage.next == 0) {
            alert("this is lastPage")
        }

    } else {
        getNewPage(cnt)
        console.log(cnt)

    }
}

</script>

<template>

    <div class="pageContainer">
        <div class="page" @click="clickPage(page.pre)">&lt;&lt;</div>
        <div class="page" v-for="(p, i) in pageList" :key="i" @click="getNewPage(p)"> {{ p }}</div>
        <div class="page" @click="clickPage(page.next)"> &gt; &gt; </div>
    </div>

</template>

<style scoped>
.pageContainer {

    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

}

.page {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: bisque;
    margin-right: 10px;
    border-radius: 10px;
    border: 1px solid blue;
}
.page:hover{
    
    color: white;
    background-color: rgb(128, 94, 53);

}
</style>