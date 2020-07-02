<template>
  <div id="app">
    <!-- Tag將標籤渲染為需要的 replace為去除返回件-->
    <router-link to="/home" tag="button" replace>首頁</router-link>
    <router-link to="/about" tag="button" replace>關於</router-link>
    <router-view></router-view>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
  .active{
    color: red;
  }
</style>
