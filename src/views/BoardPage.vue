<template>
    <nav aria-label="Page navigation ">
        <ul class="pagination position_page">

            <li class="page-item" @click="boardMove(page.theFirst)">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true"> &lt;&lt;&lt; </span>
                </a>
            </li>

            <li class="page-item" @click="boardMove(page.pre)">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

 

            <li class="page-item" v-for="(p, i) in pageList" :key="i" @click="boardMove(p)"><a class="page-link"
                    href="#">{{ p }}</a></li>
            <li class="page-item" @click="boardMove(page.next)">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
            <li class="page-item" @click="boardMove(page.theLast)">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true"> &gt; &gt; &gt;</span>
                </a>
            </li>
        </ul>
    </nav>

</template>
<script>

export default {
    name: "BoardPage",
    data() {
        return {
            pageList: [],
            page: {},
        }

    }, methods: {
        boardMove(p) {

            if (p == 0) {
                if (this.page.pre == 0) {
                    alert("this is firstPage")
                } else if (this.page.next == 0) {
                    alert("this is lastPage")
                }

            } else {
                location.href = "/board/" + p
            }

        },
        notKeepGoing() {

            alert("any board more!!")

        }
    },
    create() {



    }, mounted() {
        let tmpMap = {}
        tmpMap.now = this.$route.params.now
        tmpMap.count = this.$store.state.count

        this.axios({
            method: "post",
            url: '/board/pageInfo',
            data: tmpMap
        }).then(res => {
            console.log(res.data)
            this.page = res.data.page
            this.pageList = res.data.pageList
            // this.$store.commit("setPage", res.data.page)
            // this.$store.commit("setPageList", res.data.pageList)
        }).catch(error => {
            console.log("err:", error);
        });



    }

}



</script>

<style>
.position_page {

    align-items: center;
    justify-content: center;
    left: 40%;

}
</style>
