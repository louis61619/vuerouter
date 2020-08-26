<template>
  <div>
    <h2>我是profile</h2>
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.name}}</h2>
    <p>我是profile內容</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  created() {
    console.log('profile create')
  },
  destroyed() {
    console.log('profile destroyed')
  },

}
</script>

<style>

</style>