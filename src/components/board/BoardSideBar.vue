    <template>
        <div class="sideBarContainer">

            <div class="blank"></div>
            <div class="comunity">커뮤니티</div>

            <div class="barColumn">엘범</div>
            <div class="barColumn">일반게시판</div>
            <div class="barColumn">파일업로드</div>
            <div class="barColumn">한줄게시판</div>
            <div class="barColumn">등등게시판</div>



        </div>

    </template>

<style scoped>
.comunity {
    display: flex;
    background-color: rgba(0, 0, 0, 0.341);
    color: white;
    justify-content: center;
    align-items: center;
    height: 10%;
    font-size: 20px;
}


.barColumn {
    line-height: 150%;
    margin-top: 20px;

    align-items: center;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;

}

.sideBarContainer {
    width: 200px;
    margin-right: 2%;
}

.blank {

    width: 100%;
    height: 7%;
}
</style>