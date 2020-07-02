//配置路由相關的信息

import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About'

//1.通過vue.use(插件), 安裝插件
Vue.use(VueRouter)

//2.創建VueRouter對象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }

]

const router = new VueRouter({
  routes,
  // mode: 'history' //history模式 hash為hash模式
  linkActiveClass: 'active', //將路由自動匹配的class標籤router-link  將class標籤渲染為active
})

//3.將router對象傳入實例中
export default router;