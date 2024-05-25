<template>

    <div class="container-lg mt-3">

        <div class="p-10 w-100 h-100 ">
            <h1>Q/A Detail</h1>
            <h1>Board n.{{ b_Cnt }}</h1>


            <div class=" justify-content-center  mt-4">
                <div class="row w-100  justify-content-centerr">
                    <div class="col-3">

                    </div>
                    <div class="col-1">
                        Writer :
                    </div>
                    <div class="col-5">

                        {{ tmpMap.b_writer }}
                        <hr>

                    </div>
                    <div class="col-3">

                    </div>
                </div>
            </div>

            <div class=" justify-content-center  mt-4">

                <div class="row w-100  justify-content-centerr">
                    <div class="col-3">

                    </div>
                    <div class="col-1">
                        Tittle :
                    </div>
                    <div class="col-5">

                        {{ tmpMap.b_title }}
                        <hr>
                    </div>
                    <div class="col-3">

                    </div>
                </div>
                <div class="row w-100  justify-content-center mt-4">
                    <div class="col-3">

                    </div>
                    <div class="col-1">
                        Contents:
                    </div>
                    <div class="col-5" style="height: 200px;">

                        {{ tmpMap.b_contents }}
                        <hr>
                    </div>
                    <div class="col-3">

                    </div>
                </div>
                <div class="input-group">

                    <div class="col-3"></div>

                    <div class="col-6">
                        <div class="row">
                            <div class="col-3">files :</div>
                            <div class="col-2"></div>
                            <div class="col-3">
                                <div v-for="(file, i) in tmpMap.attachedFileList" :key="i" ref=""> <a href="#"
                                        @click="downloadFile(file.b_Cnt, file.a_num, file.a_title)"> {{ file.a_title
                                        }}</a></div>
                            </div>
                            <hr>
                        </div>
                    </div>

                    <div class="col-1"></div>



                </div>
            </div>


        </div>
        <div class="row mt-5">
            <div class="col-3"></div>
            <div class="col-1"><button @click="updateCheck()">update</button></div>
            <div class="col-1"></div>
            <div class="col-1"><button @click="deleteBoard()">delete</button></div>
            <div class="col-1" v-if="userId == 'admin'"><button @click="reply()">답변하기(reply)</button> </div>
            <div class="col-1" v-else></div>
            <div class="col-1"><button @click="back()">back</button></div>
            <div class="col-4"></div>
        </div>
    </div>

</template>


<script>

export default {
    name: "BoardDetail",
    data() {
        return {

            b_Cnt: '',
            tmpList: [],
            tmpMap: {},
            userId: this.$store.state.userId,
            now: '',


        }
    },
    methods: {
        back() {
            console.log(this.tmpInt)
            location.href = "/board/" + this.now
        }, deleteBoard() {

            if (this.tmpMap.b_writer == this.userId) {

                this.axios.delete('/board/delete/' + this.b_Cnt)

                    .then(() => {
                        alert("delete done!")
                        this.back()
                    }).catch(error => {
                        console.log("err:", error);
                    });

            } else {

                alert("Not working, because you are not Writer")
            }


        }, updateCheck() {

            if (this.tmpMap.b_writer == this.userId) {
                this.tmpMap.b_Cnt = this.b_Cnt
                this.$store.commit("setTmpMapList", this.tmpMap)
                this.$store.commit("setNow", this.now)

                location.href = "/board/update"
            } else {
                // console.log(this.tmpMap.b_writer)
                // console.log(this.userId)
                alert("Not Working, you are not writter")
            }
        }, downloadFile(a, b, c) {

            let fileName = a + "_" + b + "_" + c
            console.log(fileName)

            const fileUrl = '/board/download/' + fileName;
            this.axios({
                method: 'get',
                url: fileUrl,
                responseType: 'blob',
            }).then((res) => {

                const newUrl = window.URL.createObjectURL(new Blob([res.data]));
                const atag = document.createElement('a');
                atag.href = newUrl;
                atag.download = c;
                atag.click();
                atag.remove();
                window.URL.revokeObjectURL(newUrl);

            });


        }, reply() {

            this.$store.commit("setTmpMapList", this.tmpMap)
            this.$store.commit("setNow", this.now)

            location.href = "/board/reply"
        }
    },
    mounted() {
        this.b_Cnt = this.$route.params.b_Cnt
        this.now = this.$route.params.now
        this.tmpList = this.$store.state.boardList
        this.tmpMap = this.tmpList.find(el => el.b_Cnt == this.b_Cnt)

    }

}

</script>