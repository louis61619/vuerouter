<template>
<div>
  <h2>{{$route.params.userId}}</h2>
  <h2>{{$route.params.userAge}}</h2>
  <h2>{{userId}}</h2>
  <h2>我是user頁面</h2>
  <p>我是用戶頁面內容, 嘿嘿嘿</p>
</div>
  
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      //獲取前面組件的資料
      return this.$route.params.userId
    }
  },
  created() {
    console.log('user create')
  },
  destroyed() {
    console.log('user destroyed')
  },
}
</script>

<style>

</style>