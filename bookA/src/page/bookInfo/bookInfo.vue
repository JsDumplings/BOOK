<template>
    <div>
        <h1>书籍详情页</h1>
        书名：{{bookname}}
        作者：{{author}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            bookname:'',
            author:''
        }
    },
    mounted(){
        //通过路由传值得到书名跟作者
        this.bookname=this.$route.query.bookname;
        this.author=this.$route.query.author;
    }
}
</script>

