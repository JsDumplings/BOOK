<template>
  <div>
    <h1>分类</h1>
    <!-- 左边侧栏 -->
    <div class="left">
      <ul>
        <li>男生</li>
        <li>女生</li>
        <li>出版</li>
        <li>二次元</li>
      </ul>
    </div>
    <!-- 右边内容 -->
    <div class="right">
        <ul>
           <li>
             <p></p>
           </li>
        </ul>
    </div>
  </div>
</template>

<script>
  import Foot from '../../../components/footer/foot'
  export default {
    name: 'kind',
    components: {
      Foot
    },
    data(){
      return{
        leftkind:''
      }
    },
    methods:{
      dianji:(cur)=>{
        this.leftkind=cur
      }
    }
  }
</script>
<style scoped>
h1{
  width: 10rem;
  font-size: 0.6rem;
  text-align: center
}
.left{
  width: 2rem;
}
.left ul li{
  width: 2rem;
  height: 1.2rem;
  color: gray;
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.4rem
}
.right{
  width: 8rem;
}
</style>

