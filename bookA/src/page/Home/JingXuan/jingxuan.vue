<template>
<div>
    <!-- 轮播 -->
    <My-lunbo></My-lunbo>
    <Jingxuan-section></Jingxuan-section>
</div>
</template>

<script>
import MyLunbo from '../JingXuan/MyLunbo'
import JingxuanSection from './JingxuanSection'
export default {
    name:'jingxuan',
    components:{
        MyLunbo,
        JingxuanSection
    },
}
</script>