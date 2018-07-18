<template>
  <div>
      <mt-swipe :auto='2000'>
          <mt-swipe-item v-for="item in items" :key="item.id">
              <img :src="item.src" class="image">
          </mt-swipe-item> 
      </mt-swipe>
  </div>
</template>
<script>
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    name:'LunBo',
    data(){
        return{
            items:[
                {src:require('../../../images/1.jpg')},
                {src:require('../../../images/2.jpg')},
                {src:require('../../../images/3.jpg')},
                {src:require('../../../images/4.jpg')}
            ],
        }
    },
    components:{
       'mt-swipe':Swipe,
       'mt-swipe-item':SwipeItem
    }
}
</script>
<style scoped>
.mint-swipe{
    height: 5rem;
}
.image{
    width: 10rem;
    height: 5rem;
}
</style>

