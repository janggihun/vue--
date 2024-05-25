<script setup>
import axios from 'axios';
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex';


const now = 1
const count = 10
const store = useStore()
// const boardList = store.state.boardList

const pageList = computed(() => store.state.pageList);
const page = store.getters.getPage
onMounted(async () => {
    const res = await axios.post("/board/pageInfo", {
        now: now, count: count
    })
    console.log(res.data)
    store.commit("setPageList", await res.data.pageList)
    store.commit("setPage", await res.data.page)

})
const getNewPage = () => {
    const now = 5;
    const res = await axios.post("/board/pageInfo", {
        now: now, count: count
    })
    
}
const clickPage = (cnt) => {

    if (cnt == 0) {
        if (page.pre == 0) {
            alert("this is firstPage")
        } else if (page.next == 0) {
            alert("this is lastPage")
        }

    } else {

        console.log(cnt)

    }
}


</script>





<template>

    <div class="pageContainer">
        <div class="page" @click="clickPage(page.pre)">&lt;&lt;&lt;</div>
        <div class="page" v-for="(p, i) in pageList" :key="i"> {{ p }}</div>
        <div class="page" @click="clickPage(page.next)"> &gt; &gt; &gt;</div>
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

    margin-right: 30px;
}
</style>