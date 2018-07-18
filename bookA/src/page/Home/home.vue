<template>
  <div id="home">
    <My-header :message="pageName"></My-header>
    <router-view></router-view>
    <Foot :message="pageName"></Foot>
  </div>
</template>

<script>
import Foot from '../../components/footer/foot'
import MyHeader from '../../components/header/My-header'
export default {
  name:'home',
  data(){
    return{
      pageName:'jingxuan'
    }
  },
  components:{
    Foot,
    MyHeader
  },
  watch:{
    //监听那个路由过来的，分别获取那个路由的name数据
    '$route'(to,from){
      this.pageName=to.name;
      if(this.pageName==='find'){
        this.pageName='发现'
      }else if(this.pageName==='kind'){
        this.pageName='分类'
      }else if(this.pageName==='my'){
        this.pageName='我的'
      }
    }
  }
}
</script>
<style scoped>
*{padding: 0;margin: 0}
#home{
  background-color:#C0C0C0
}
</style>


