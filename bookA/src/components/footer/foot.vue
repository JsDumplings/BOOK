<template>
  <ul v-bind="start()">
    <li>
      <router-link exact :to="{name:'jingxuan'}">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jingxuan"></use>
      </svg>
      <p>精选</p>
    </router-link></li>
    <li><router-link exact :to="{name:'find'}">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-faxian"></use>
      </svg>
      <p>发现</p>
    </router-link></li>
    <li><router-link exact :to="{name:'kind'}">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenlei"></use>
      </svg>
      <p>分类</p>
    </router-link></li>
    <li><router-link exact :to="{name:'my'}">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wode"></use>
      </svg>
      <p>我的</p>
    </router-link></li>
  </ul>
</template>


<script>
import icon from '../../assets/fonts/iconfont.js'
  export default{
      name:'foot',
      props:{
        message:String
      },
      data(){
        return {
         
        }
      },
      methods:{
        start:function(){
        //console.log(this.message)
        }
      }
  }
</script>
<style scoped>
.icon{
    width: 2em; height: 2em;
    vertical-align: -1em;
    fill: currentColor;
    overflow: hidden;
  }
.active{
  text-decoration: none;
  fill:red;
  color: red
}
ul{
  position: fixed;
  z-index: 100;
  bottom: 0;
  background-color: greenyellow
}
li{
  list-style: none;
  float: left;
  text-align: center;
  line-height: 0.8rem;
  width: 2.5rem;
  height: 1.5rem;
}
</style>

