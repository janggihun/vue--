<template>
  <div class="container mt-5">

    <div>
      <label for="userId">id:</label>
      <input id="userId" type="text" v-model="userId">
    </div>
    <div>
      <label for="userPw">pw:</label>
      <input id="userPw" type="password" v-model="userPw">
    </div>
    <button @click="submitForm" class="btn btn-primary">login</button>

    <div><a href="/main">register us</a></div>
  </div>
</template>

<script>

export default {
  data() {
    return {

      userId: '',
      userPw: ''
    }
  },
  methods: {

    submitForm: function () {
      var data = {
        userId: this.userId,
        userPw: this.userPw
      }
      this.axios({
        method: "post",
        url: '/login/idcheck',
        data: data,
      }).then(res => {
        if (res.data == 1) {
          this.$store.commit("setUserId", data.userId)
          this.$router.push("/board/1")
        }
        this.userId = "";
        this.userPw = "";
      }).catch(error => {
        console.log("err:", error);
      });
    }
  },
}


</script>

<style></style>