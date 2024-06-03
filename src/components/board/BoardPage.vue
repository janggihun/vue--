<script setup>
import axios from "axios";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
/*
now : 현재 페이지 번호
count : 행수
*/
const now = 1;
const count = 10;
const store = useStore();

const pageList = computed(() => store.state.pageList);
const page = computed(() => store.state.page);

/*
1.
    now : 현재 페이지 번호
    count : 게시글 갯수

2. onMounted

3. (now,count) -> RestApi

4. 페이징리스트
 */
onMounted(async () => {
  const res = await axios.get("/board/pageInfo", {
    params: {
      now: now,
      count: count,
    },
  });
  store.commit("setPageList", await res.data.pageList);
  store.commit("setPage", await res.data.page);
});
/*
1.
    now : 현재 페이지 번호
    count : 게시글 갯수

2. getNewPage

3.  (now, count)-> RestAPI(게시글)
    (now, count)-> RestAPI(페이징)

4.  게시글, 페이징

    게시글과 페이징 정보를 Store에 저장
*/
const getNewPage = async (now) => {
  const res = await axios.get("/board/pageInfo", {
    params: {
      now: now,
      count: count,
    },
  });
  store.commit("setPageList", await res.data.pageList);
  store.commit("setPage", await res.data.page);

  const res1 = await axios.post("/board/boardInfo", {
    now: now,
    count: count,
  });

  store.commit("setBoardList", await res1.data);
};

/*

1.  
    cnt : 페이지 번호

2. clickPage

3.  (cnt) -> Alert

4. 유효성 검사

    페이지의 끝과 처음부분 제어

*/

const clickPage = (cnt) => {
  if (cnt == 0) {
    if (store.getters.getPage.pre == 0) {
      alert("this is firstPage");
    } else if (store.getters.getPage.next == 0) {
      alert("this is lastPage");
    }
  } else {
    getNewPage(cnt);
  }
};
</script>

<template>
  <div class="pageContainer">
    <div class="page" @click="clickPage(page.pre)">&lt;&lt;</div>
    <div class="page" v-for="(p, i) in pageList" :key="i" @click="getNewPage(p)">{{ p }}</div>
    <div class="page" @click="clickPage(page.next)">&gt; &gt;</div>
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
