<template>
<div>
  <h2 class="red">我是關於</h2>
  <p>我是關於內容，哈哈哈</p>
  <button @click="btnClick">按鈕</button>
</div>
  
</template>

<script>
export default {
  name: "about",
  methods: {
    btnClick(){
      console.log('13131');
    }
  },
}

</script>

<style>
  .red{
    color: red;
  }
</style>