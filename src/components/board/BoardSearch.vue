<script setup>
import BoardPage from '/src/components/board/BoardPage.vue';



</script>
<template>

    <div class="searchContainer">

        <div>
            <select>
                <option value="title">제목 </option>
                <option value="contents">내용 </option>
                <option value="t_c">제목+내용 </option>
            </select>
        </div>
        <div>

            <input type="test" placeholder="검색어를 입력해주세요" />
        </div>
        <div>

            <button>검색</button>
        </div>
        <BoardPage />
    </div>


</template>

<style scoped>
.searchContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.059);
    width: 100%;
    height: 70px;
}

input {
    width: 300px;
    height: 30px;
}
select{
    width: 150px;
        height: 35px;
}
</style>