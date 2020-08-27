<template>
  <div id="app">
    <!-- Tag將標籤渲染為需要的 replace為去除返回件-->
    <!-- <router-link to="/home" tag="button" replace>首頁</router-link>
    <router-link to="/about" tag="button" replace>關於</router-link>-->
    <!-- <button @click="homeClick">首頁</button>
    <button @click="aboutClick">關於</button>
    <button @click="userClick">用戶</button>-->
    <router-link to="/home">首頁</router-link>
    <router-link :to="{path: '/about'}">關於</router-link>
    <!-- <router-link :to="'/user/' + userId">用戶</router-link> -->
    <button @click="userClick">用戶</button>
    <!-- <router-link :to="{path: '/profile', query: {name: 'Renny', age: '18', height: '1.75'}}">檔案</router-link> -->
    <button @click="profileClick">檔案</button>
    <h2>11111111111</h2>
    <!-- 保持活躍 -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "Renny",
      userAge: "18",
    };
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
    // userClick() {
    //   this.$router.replace('/user/' + this.userId)
    // },
    userClick() {
      this.$router.replace({
        // path: '/user/' + this.userId + '/' + this.userAge,
        path: '/user/' + this.userId,
        name: 'user',
        params: {
          userId: this.userId,
          userAge: this.userAge
        }
      })
    },
    profileClick() {
      this.$router.replace({
        path: "/profile",
        query: {
          name: "Renny",
          age: "25",
          height: "1.75",
        },
      });
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
