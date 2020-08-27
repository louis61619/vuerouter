<template>
  <div>
    <h2>我是首頁</h2>
    <p>我是首頁內容， 哈哈哈</p>
    <router-link to="/home/news">新聞</router-link>
    <router-link to="/home/events">活動</router-link>
    <transition>
      <router-view></router-view>
    </transition>
    
    <cpn></cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn.vue";
export default {
  name: "Home",
  components: {
    Cpn
  },
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log("home created");
    
    // this.$router.push('/home/news')
        
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    console.log("actived")
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.path);
    this.path = this.$route.path;
    next();
  }
};
</script>

<style>
</style>