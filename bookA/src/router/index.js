import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/page/Home/home'
import Find from '@/page/Home/Find/find'
import Kind from '@/page/Home/Kind/kind'
import JingXuan from '@/page/Home/JingXuan/jingxuan'
import My from '@/page/Home/My/my'
import Login from '@/page/Login/Login'
import bookInfo from '@/page/bookInfo/bookInfo'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:"active", //高亮样式
  routes:[
    {
      path:'/',
      name:'App',
      component:App,
      redirect:'/Login/Login',  //重定向
      children:[
        {
        name:'home',    //初始进入app的页面
        path:'/Home',
        component:Home,
        children:[
          {
            name:'find',      //发现页面
            path:'/Home/Find',
            component:Find,
          },{
            name:'kind',     //分类页面
            path:'/Home/Kind',
            component:Kind,
          },{
            name:'my',       //我的书架页面
            path:'/Home/My',
            component:My,
          },{
            name:'jingxuan',      //精选页面
            path:'/Home/JingXuan',
            component:JingXuan,
          }]
      },{
        name:'Login',        //登录页面
        path:'/Login/Login',
        component:Login
      },{
        name:'bookInfo',
        path:'/bookInfo/bookInfo',
        component:bookInfo
      }]
    }
  ]
})