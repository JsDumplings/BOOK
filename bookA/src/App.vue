<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import home from './page/Home/home'
export default {
  name: 'app',
  components:{
    home,
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
