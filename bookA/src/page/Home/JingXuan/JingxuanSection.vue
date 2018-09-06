<template>
  <div class="free">
     <ul><h4>热门&nbsp;&nbsp;<i>更多》</i></h4>
      <li v-for="book in books3" v-bind:key="book.id">
          <img v-bind:src="book.imgsrc" alt="" @click="enterBookInf(book.bookname,book.author)">
          <p>
            <span>{{book.author}}</span><br/>
            <s>{{book.bookprice}}元</s>
          </p>
       </li>
     </ul>
     <ul><h4>文学名著&nbsp;&nbsp;<i>更多》</i></h4>
      <li v-for="book in books1" v-bind:key="book.id">
          <img v-bind:src="book.imgsrc" alt="">
          <p>
            <span>{{book.author}}</span><br/>
            <s>{{book.bookprice}}元</s>
          </p>
       </li>
     </ul>
     <ul><h4>武侠玄幻&nbsp;&nbsp;<i>更多》</i></h4>
      <li v-for="book in books2" v-bind:key="book.id">
          <img v-bind:src="book.imgsrc" alt="">
          <p>
            <span>{{book.author}}</span><br/>
            <s>{{book.bookprice}}元</s>
          </p>
       </li>
     </ul>
  </div>
</template>
<script>
import axios from 'axios'
import {showBookData} from '../../../api/api'
export default {
  name:'JingxuanSection',
  data(){
    return{
       books:[],
       books1:[],
       books2:[],
       books3:[]
    }
  },
  methods:{
    enterBookInf(bookName,authorName){//进入图书详情页,通过路由将点击的书名,作者传参
      this.$router.push({path:'/bookInfo/bookInfo',query:{bookname:bookName,author:authorName}})
    }
  },
  mounted(){
    showBookData({}).then((res)=>{ //展示书籍数据
      console.log("res",res.data);
      this.books=res.data;
      res.data.forEach(element => {
        
        if(element.booktype=='文学名著' && this.books1.length<8){
           this.books1.push(element);
        }
        if(element.booktype=="玄幻武侠" && this.books2.length<8){
          this.books2.push(element);
        }
        if(element.active=="hot"  && this.books3.length<8){
          this.books3.push(element);
          console.log("element",this.books3);
        }
      });
    })
  }
}
</script>
<style scoped>
div{
  width: 100%;
  background-color: #ffffff;
}
img{
  margin-top: 0.2rem;
  width: 2rem;
  height: 3rem;
}
ul{
  float: left;
  margin-left: 0.4rem;
  margin-bottom: 0.3rem;
}
li{
  float: left;
  margin-right: 0.4rem
}
p{
  margin-top: 0.1rem;
  width: 2rem;
  height: 0.8rem;
}
h4{
  font-size: 15px;
  color: red;
}
h4 i{
  font-size: 10px;
}
</style>


