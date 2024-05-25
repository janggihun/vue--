<template>
    <div class="container-lg mt-3">

        <div class="p-10 w-100 h-100 ">
            <h1>Q/A UpdatePage</h1>
            <h1>n.{{ tmpMap.b_Cnt }} Page</h1>
            <div class=" justify-content-center  mt-4">
                <div class="row w-100  justify-content-centerr">
                    <div class="col-3">

                    </div>
                    <div class="col-1">
                        Writer :
                    </div>
                    <div class="col-5">
                        {{ tmpMap.b_writer }}
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
                    <div class="col-5" id="titleBox">

                        <input class="titleBox" style="width: 100%;" v-model="b_title" />
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
                    <div class="col-5" id="contentsBox">

                        <input class="contentsBox " style="height: 400px; width: 100%;" v-model="b_contents" />
                    </div>
                    <div class="col-3">

                    </div>
                </div>
                <div class="input-group">

                    <div class="col-3"></div>

                    <div class="col-6">

                        <div class="row mt-2">
                            <div class="col-3">files :</div>
                            <div style="display: none;"> <input type="file" name="file" multiple="multiple"
                                    ref="fileInput" @change="onFileChange()"></div>
                            <div class="col-8">
                                <div v-for="(el, i) in fileList" :key="i">{{ el.name
                                    }} <a href="#" @click="confirm(i)"> delete</a></div>
                                <div v-for="(file, i) in tmpMap.attachedFileList" :key="i" ref=""> {{ file.a_title
                                    }}<a href="#"
                                        @click="deleteAttached(file.b_Cnt, file.a_num, file.a_title, i)">  delete</a>
                                </div>
                            </div>
                            <hr>
                        </div>

                    </div>

                    <div class="col-1"></div>
                </div>
            </div>


        </div>
        <div class="row mt-3">
            <div class="col-3"></div>
            <div class="col-2"> <button @click="attachedSelect()">attached</button></div>
            <div class="col-1"></div>
            <div class="col-1"><button @click="updateBoard()">update</button></div>
            <div class="col-1"></div>
            <div class="col-1"><button @click="back()">back</button></div>
            <div class="col-5"></div>
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
            now: ''
        }
    }, methods: {
        back() {
            console.log(this.tmpInt)
            location.href = "/board/" + this.now
        }, deleteAttached(a, b, c, i) {

            let fileName = a + "_" + b + "_" + c
            console.log(fileName)
            this.tmpMap.attachedFileList.splice(i, 1);
            const fileUrl = '/board/attachedDelete/' + fileName;
            this.axios({
                method: 'delete',
                url: fileUrl,
            }).then((res) => {
                console.log(res.data)
            });


        }, updateBoard() {

            var url2 = '/board/update';

            let formData = new FormData();
            formData.append("b_Cnt", this.b_Cnt);
            formData.append("b_title", this.b_title);
            formData.append("b_contents", this.b_contents);
            formData.append("b_date", dayjs().format('YYYY-MM-DD HH:mm:ss'))

            this.fileList.forEach((el) => {
                formData.append("files", el)
            })

            this.axios.post(url2, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",

                },

            })
                .then(function () {
                
                    location.href = "/board/1"
                })
                .catch(function (error) {
                    console.log(error);
                });

        }, onFileChange() {
            this.fileList.push(this.$refs.fileInput.files[0])
            this.$refs.fileInput.value = ""; // value 초기화

        }, confirm(i) {

            this.fileList.splice(i, 1)

        }, attachedSelect() {

            this.$refs.fileInput.click();
        }
    }, mounted() {
        this.tmpMap = this.$store.state.tmpMap
        this.b_Cnt = this.tmpMap.b_Cnt
        this.b_title = this.tmpMap.b_title
        this.b_contents = this.tmpMap.b_contents
        this.now = this.$store.state.now

    }


}

</script>