<template>
  <div class="container-xxl mt-3">
    <div class="p-10 w-100 h-100 ">
      <div id="boardInfo">

        <h1>Q/A Board</h1>
        <!-- <h1>Board page : {{ now }}</h1> -->
        <div class="mt-3 text-end mt-2"><button @click="write()">write</button></div>
        <div class="row bg-dark text-white">

          <div class="col-3">Num</div>
          <div class="col-3">Title</div>
          <div class="col-2">Writter</div>
          <div class="col-2">attached</div>
          <div class="col-2">Date</div>
        </div>
        <div class="boardBox">
          <div v-for="(detail, i) in boardList" :key="i" @mouseover="hover = true" @mouseleave="hover = false">
            <div class="row col-12 datail mt-1 mx-auto" @click="boardDetailInfo(detail)">
              <div class="col-3">{{ detail.b_Cnt }}</div>
              <div class="col-3"> {{ detail.b_title }}</div>
              <div class="col-2">{{ detail.b_writer }}</div>

              <div v-if="detail.attachedFileList.length != 0" class="col-2">{{ detail.attachedFileList.length }}</div>
              <div v-else class="col-2"></div>
              <div class="col-2">{{ detail.b_date }}</div>
            </div>

            <div v-if="detail.b_answer != null" class="row answerhover mt-1" @click="boardAnswerInfo(detail)">
              <div class="col-1"></div>
              <div class="answer col-3 " v-if="userId == 'admin'"> ↳ [{{ detail.b_Cnt }}][reply]  </div>
              <div class="col-1 sort"> {{ detail.b_answer }} </div>
              <div class="col-5"></div>
              <div class="col-2 sort">{{ detail.b_replyDate }} </div>
            </div>



          </div>
          <div class="mt-1">
        
          </div>
          
        </div>
        <BoardPage />
      </div>
    </div>
  </div>
</template>

<script>
import BoardPage from '@/views/BoardPage.vue';

export default {
  name: "BoardView",
  data() {
    return {
      userId: '',
      now: '',
      boardList: [],
      hover: false,

    }
  },
  methods: {
    write() {
      let tmpId = this.$store.state.userId
      if (tmpId) {

        this.$router.push('/board/create')
      } else {
        this.$router.push('/login')
      }
    }, boardDetailInfo(e) {

      this.$router.push("/board/detail/" + this.now + "/" + e.b_Cnt)
    }, boardAnswerInfo(e) {

      this.$router.push("/board/detail/" + this.now + "/" + e.b_Cnt)
    },
  }, created() {
    this.$store.commit("setCount", 10) // put in count what you want
    this.now = this.$route.params.now
    let tmpMap = {}
    tmpMap.now = this.$route.params.now
    tmpMap.count = this.$store.state.count
    console.log(tmpMap)
    this.axios({
      method: "post",
      
      url: '/board/boardInfo',
      data: tmpMap
    }).then(res => {
      console.log(res.data)
      this.boardList = res.data
      this.$store.commit("setBoardList", res.data)
      // console.log(this.boardList)
    }).catch(error => {
      console.log("err:", error);
    });

  },
  components: {
    BoardPage

  }
}

</script>
<style>
.sort{

  display: flex;
  justify-content: center;
  align-items: center;

}

.boardBox {
  height: 600px;
  overflow: auto;
}

.boardBox::-webkit-scrollbar {
  display: none;
}

.answer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.datail {

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 247, 247);
  border: 1px solid green;
  margin-top: 2px;
  height: 50px;
  width: 100%;
}

.datail:hover {

  color: white;
  background-color: rgb(4, 0, 0);

}

.w-20 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;

}

.answerhover {}

.answerhover:hover {

  background-color: antiquewhite;
  border: 1px solid black;

}
</style>