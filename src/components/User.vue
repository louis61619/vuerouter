<template>
<div>
  <h2>{{$route.params.userId}}</h2>
  <h2>{{$route.params.userAge}}</h2>
  <h2>{{userId}}</h2>
  <h2>我是user頁面</h2>
  <p>我是用戶頁面內容, 嘿嘿嘿</p>
  <router-link :to="{path: '/user/' + this.userId +'/' + this.userAge +'/news'}">新聞</router-link>
  <router-link v-if="userAge == 18" :to="{path: '/user/' + this.userId +'/' + this.userAge + '/events'}">活動</router-link>
  <router-view></router-view>
</div>
  
</template>

<script>
export default {
  name: "User",
  
  computed: {
    userId() {
      //獲取前面組件的資料
      return this.$route.params.userId
    },
    userAge() {
      return this.$route.params.userAge
    },
    path() {
      return '/user/' + this.userId + '/' + this.userAge +'/' + this.$router.options.routes[3].children[0].path
    }
  },
  created() {
    console.log('user create')
    console.log(this.path)
    console.log(this.$router.options.routes[3].children[0].path)
  },
  destroyed() {
    console.log('user destroyed')
    // this.$router.push(this.path);
  },
  activated() {
    console.log('mounted')
    this.$router.push(this.path);
  }
  // activated() {
  //   console.log("actived")
  //   this.$router.push(this.path);
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log(this.path);
  //   this.path = this.$route.path;
  //   next();
  // }
}
</script>

<style>

</style>