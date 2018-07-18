<template>
  <div id="MyHeader">
     <div class="reader-icon" @click="loginPage">
       <svg class="icon wode-icon" aria-hidden="true">
        <use xlink:href="#icon-wode"></use>
       </svg>
     </div>
     <div class="change" ref='all'>
          <!-- jingxuan -->
        <div class="search" ref="input" v-show="this.message=='jingxuan'">
              <svg class="icon sousuo-icon" aria-hidden="true">
                  <use xlink:href="#icon-sousuo"></use>
              </svg>
          <input type="text" placeholder="书名/作者">
        </div>
        <!-- find -->
        <div>
            <h1 ref="h" v-show="this.message!='jingxuan'">{{this.message}}</h1>
        </div>
     </div>
  </div>
</template>
<script>
import icon from '../../assets/fonts/iconfont.js'
export default {
  name:'MyHeader',
  props:{
    message:String
  },
  data(){
    return{
      
    }
  },
  methods:{
    loginPage(){ //点击之后转跳登录注册页面
       this.$router.push({path:'/Login/Login'})
    }
  }
}
</script>
<style scoped>
.icon{
    vertical-align: -1em;
    fill: currentColor;
    overflow: hidden;
  }
  .wode-icon{
    margin: 0.3em 0.3em;
    width: 2.5em;height: 2.5em;
  }
  .sousuo-icon{
    margin-top: 0.9em;
    width: 1.4em; height: 1.4em;
    float:left;
  }
   #MyHeader{
     height: 1rem;
     padding: 0.2rem 0.4rem;
     background-color: paleturquoise;
   }
   .change{
     height: 1rem;
     width: 1rem;
     float: left;
   }
   .reader-icon{
     margin-right: 0.8rem;
     float: left;
     height: 1rem;
     width: 1rem;
     border-radius: 0.5rem;
     background-color: peru
   }
   .search{
      height: 1rem;
      width: 6rem;
      border-radius: 0.4rem;
      background-color: orange
   }
   input{
     width: 4rem;
     height: 1rem;
     float:left;
     border: none;
     background-color:orange
   }
   input::-webkit-input-placeholder{
     color:#FFF;
   }
   h1{
     height: 0.86rem;width: 6rem;
     padding-top: 0.14rem;
     font-size: 20px;
     font-weight: 200;
     letter-spacing: 5px;
     text-align: center;
     color: #FFF;
   }
   .block{
     display: block;
   }
   .none{
     display: none
   }
</style>


