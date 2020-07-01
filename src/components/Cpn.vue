<template>
  <div class="bord">
    <h2>哈哈哈ㄏ哈哈ㄏ哈哈哈</h2>
    <p>笑死人</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: '我是cpn組件'
    }
  },
};
</script>

<style>
.bord{
  border: 1px solid red;
}
</style>