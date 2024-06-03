<script setup>
import axios from "axios";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const nowPage = 1;
const boardRowCount = 10;
const store = useStore();

const pageList = computed(() => store.state.pageList);
const page = computed(() => store.state.page);

/*
- onMounted
- (nowPage,boardRowCount) -> RestApi(/board/pageInfo)
- hook은 함수불가
 */
onMounted(async () => {
  const res = await axios.get("/board/pageInfo", {
    params: {
      now: nowPage,
      count: boardRowCount,
    },
  });
  store.commit("setPageList", await res.data.pageList);
  store.commit("setPage", await res.data.page);
});
/*
- getNewPage
- (nowPage, boardRowCount)-> RestAPI("/board/pageInfo")
  (nowPage, boardRowCount)-> RestAPI("/board/boardInfo")

-  게시글, 페이징 정보
*/
const getNewPage = async (nowPage) => {
  const res = await axios.get("/board/pageInfo", {
    params: {
      now: nowPage,
      count: boardRowCount,
    },
  });
  store.commit("setPageList", await res.data.pageList);
  store.commit("setPage", await res.data.page);

  const res1 = await axios.post("/board/boardInfo", {
    now: nowPage,
    count: boardRowCount,
  });

  store.commit("setBoardList", await res1.data);
};

/*
- clickedPageBtn
- (pageNumber) -> Alert
- 첫페이지와 마지막페이지 제어
*/

const clickedPageBtn = (pageNumber) => {
  if (pageNumber == 0) {
    if (store.getters.getPage.pre == 0) {
      alert("this is firstPage");
    } else if (store.getters.getPage.next == 0) {
      alert("this is lastPage");
    }
  } else {
    getNewPage(pageNumber);
  }
};
</script>

<template>
  <div class="pageContainer">
    <div class="page" @click="clickedPageBtn(page.pre)">&lt;&lt;</div>
    <div class="page" v-for="(p, i) in pageList" :key="i" @click="getNewPage(p)">{{ p }}</div>
    <div class="page" @click="clickedPageBtn(page.next)">&gt; &gt;</div>
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
.page:hover {
  color: white;
  background-color: rgb(128, 94, 53);
}
</style>
