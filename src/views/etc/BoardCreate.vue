<template>

    <div class="container-lg mt-3">

        <div class="p-10 w-100 h-100 ">
            <h1>Q/A Create</h1>

            <div class=" justify-content-center  mt-4">
                <div class="row w-100  justify-content-centerr">
                    <div class="col-5">

                    </div>
                    <div class="col-1">
                        Writer :
                    </div>
                    <div class="col-2">

                        {{ b_writer }}
                    </div>
                    <div class="col-4">

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

                        <input class="titleBox" style="width: 100%;" placeholder="input title" v-model="b_title" />
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
                    <div class="col-5">

                        <input class="contentsBox " style="height: 400px; width: 100%;" placeholder="input contents"
                            v-model="b_contents" />
                    </div>
                    <div class="col-3">

                    </div>
                </div>
                <div class="input-group">

                    <div class="col-3"></div>

                    <div class="col-6">

                        <div class="row mt-3">
                            <div style="display: none;"> <input type="file" name="file" multiple="multiple"
                                    ref="fileInput" @change="onFileChange()"></div>
                            <div class="row">


                                <div class="col-2">Files : </div>
                                <div class="col-1"> </div>


                                <div class="col-8">
                                    <div v-for="(el, i) in fileList" :key="i">{{ el.name
                                        }} <a href="#" @click="confirm(i)">삭제</a></div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-3"></div>



                </div>
            </div>


        </div>
        <div class="row text-center mt-5">
            <div class="col-4"></div>
            <div class="col-2"> <button @click="attachedSelect()">attached</button></div>
            <div class="col-2"><button @click=" registerAttached()">register</button></div>
            <div class="col-4"></div>
        </div>
    </div>

</template>
<style></style>

<script>
import dayjs from "dayjs";
export default {
    data: function () {
        return {
            b_writer: '',
            b_title: '',
            b_contents: '',
            a_title: '',
            a_contents: '',
            fileList: [],
            file: {},
        }
    },
    methods: {
        registerAttached() {

            var url2 = '/board/insertAttached';

            let formData = new FormData();
            formData.append("b_writer", this.$store.state.userId);
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
            // if (confirm("해당 첨부 파일을 제외 하시겠습니까?")) {
                this.fileList.splice(i, 1)
            // }
        }, attachedSelect() {

            this.$refs.fileInput.click();
        }

    },
    mounted() {

        this.b_writer = this.$store.state.userId

    },

}


</script>