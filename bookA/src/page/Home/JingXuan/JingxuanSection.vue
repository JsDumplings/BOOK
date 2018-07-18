<template>
  <div class="free">
     <ul><h4>热门</h4>
      <li v-for="book in books" v-bind:key="book.id">
          <img v-bind:src="book.src" alt="">
          <p>
            <span></span><br/>
            <s></s>
          </p>
       </li>
     </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'JingxuanSection',
  data(){
    return{
       books:[]
    }
  }
}
</script>
<style scoped>
div{
  margin-top: 0.2rem;
  width: 100%;height: 9rem;
  padding-left: 0.4rem;
  background-color: #ffffff;
}
img{
  margin-top: 0.2rem;
  width: 2rem;
  height: 3rem;
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
  font-size: 15px
}
</style>

