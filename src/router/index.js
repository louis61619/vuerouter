//配置路由相關的信息

import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//路由懶加載的寫法

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')

const News = () => import('../components/News')
const Events = () => import('../components/Events')
const Profile = () =>import('../components/Profile')

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
    component: Home,
    meta: {
      title: '首頁'
    },
    children: [
      
      {
        path: 'news',
        component: News
      },
      {
        path: 'events',
        component: Events
      }
      
    ]
    
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '關於'
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用戶'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '檔案'
    },
  }

]

const router = new VueRouter({
  routes,
  // mode: 'history' //history模式 hash為hash模式
  linkActiveClass: 'active', //將路由自動匹配的class標籤router-link  將class標籤渲染為active

})

//改變每一頁的title
//vue導航守衛 
router.beforeEach((to, from, next) => {
  //從from跳轉到to
  document.title = to.matched[0].meta.title;
  
  next(); //跳轉頁面

})

//3.將router對象傳入實例中
export default router;