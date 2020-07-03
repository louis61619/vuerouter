<template>
  <div id="app">
    <!-- Tag將標籤渲染為需要的 replace為去除返回件-->
    <!-- <router-link to="/home" tag="button" replace>首頁</router-link>
    <router-link to="/about" tag="button" replace>關於</router-link> -->
    <!-- <button @click="homeClick">首頁</button>
    <button @click="aboutClick">關於</button>
    <button @click="userClick">用戶</button> -->
    <router-link to="/home">首頁</router-link>
    <router-link to="/about">關於</router-link>
    <router-link :to="'/user/' + userId">用戶</router-link>
    
    
    <router-view></router-view>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userId: 'Renny'
    }
  },
  methods: {
  //   homeClick() {
  //     //通過代碼的方式修路由 vue-router
  //     //push => pushState
      
  //     // this.$router.push('/home')
  //     this.$router.replace('/home');
  //   },
  //   aboutClick() {
  //     // this.$router.push('/about')
  //     this.$router.replace('/about')
      
  //   },
  //   userClick() {
      
  //     this.$router.replace('/user')
  //   }
   },
  
}
</script>

<style>
  .active{
    color: red;
  }
</style>
