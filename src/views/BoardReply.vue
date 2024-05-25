<template>


    <div class="container-lg mt-3">

        <div class="p-10 w-100 h-100 ">
            <h1>Q/A reply</h1>
            <h1>Board n.{{ b_Cnt }} for answer</h1>



            <div class=" justify-content-center  mt-4">


                <div class="row w-100  justify-content-center mt-4">
                    <div class="col-3">

                    </div>
                    <div class="col-1">
                        Contents:
                    </div>
                    <div class="col-5" style="height: 100px;">

                        {{ tmpMap.b_contents }}
                        <hr>
                    </div>
                    <div class="col-3">

                    </div>
                </div>

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
        <div class="row col-12">
            <div class="col-3"></div>
            <div class="col-1">{{ userId }} :</div>
            <div class="col-3"> <input style="height: 200px; width: 500px;" type="text" v-model="answerValue" /></div>
            <div class="col-3"></div>
        </div>


        <div class="row mt-5">
            <div class="col-7"></div>
            <div class="col-1"><button @click="replyRegister()">register</button></div>


            <div class="col-1"><button @click="back()">back</button></div>
            <div class="col-3"></div>
        </div>

    </div>

</template>


<script>
import dayjs from "dayjs";
export default {

    data() {

        return {
            fileList: [],
            file: {},
            tmpMap: {},
            b_Cnt: '',
            b_title: '',
            b_contents: '',
            now: '',
            userId: '',
            answerValue: ""
        }

    }, methods: {


        back() {
            console.log(this.tmpInt)
            location.href = "/board/" + this.now
        }, downloadFile(a, b, c) {

            let fileName = a + "_" + b + "_" + c
            console.log(fileName)

            let fileUrl = '/board/download/' + fileName;
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


        }, replyRegister() {


            let url = "/board/reply"
            let data = {
                "b_Cnt" : this.b_Cnt,
                'b_charge': this.userId,
                "b_answer" : this.answerValue,
                "b_replyDate" : dayjs().format('YYYY-MM-DD HH:mm:ss')
            }
            this.axios({
                method: 'put',
                url: url,
                data: data
            }).then((res) => {
                console.log(res.data)
                location.href = "/board/"+this.now
            });


        }


    }, mounted() {
        this.userId = this.$store.state.userId
        this.tmpMap = this.$store.state.tmpMap
        this.b_Cnt = this.tmpMap.b_Cnt
        this.b_title = this.tmpMap.b_title
        this.b_contents = this.tmpMap.b_contents
        this.now = this.$store.state.now
    }
}
</script>