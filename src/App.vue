<template>
  <div id="app">
    
    <router-link to="/home">首頁</router-link>
    <router-link to="/about">關於</router-link>
    <router-view></router-view>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>

</style>
