<template>
    <div class="login" ref="login">
                <h3>登录</h3>
                <label for="">用户名：</label><br>
                <input type="text" placeholder="请输入用户名" class="intext" v-model="name"><br/>
                <label for="">密码：</label><br>
                <input type="password" placeholder="请输入密码" class="intext" v-model="pwd"><br/>
                <button @click="intLogin" class="btn" type="button">登录</button>
                <button @click="reset">重置</button>   
    </div>
</template>
<script>
import {login} from '../../api/api'
import Cookie from '../../global/cookie'
export default {
    data(){
        return{
            fullHeight:document.documentElement.clientHeight,
            fullWidth:document.documentElement.clientWidth,
            timer:false,
            name:'',
            Ok:'',
            pwd:'',
            userName:''
        }
    },
    mounted(){
        //将屏幕宽度与高度挂载
        const _this=this;
        window.onresize=()=>{
            return(()=>{
                window.fullHeight=document.documentElement.clientHeight;
                window.fullWidth=document.documentElement.clientWidth;
                _this.fullWidth=window.fullWidth;
                _this.fullHeight=window.fullHeight;
            })()
        }
        _this.$refs.login.style.height=_this.fullHeight+"px";
        _this.$refs.login.style.width=_this.fullWidth+"px";
    },
    watch:{
        //监听移动屏幕的高度跟宽度
        fullHeight(val){ 
            if(!this.timer){
                this.fullHeight=val;
                this.timer=true;
                let _this=this;
                _this.$refs.login.style.height=_this.fullHeight+"px";
                setTimeout(function(){
                    _this.timer=false
                },400)
            }
        },
        fullWidth(val){
            if(!this.timer){
                this.fullWidth=val;
                this.timer=true;
                let _this=this;
                _this.$refs.login.style.width=_this.fullWidth+"px";
                setTimeout(function(){
                    _this.timer=false
                },400)
            }
        }
    },
    methods:{
        intLogin(){
            //点击登录
            var _this=this;
            let paramData={
                name:  _this.name,
                pwd:  _this.pwd
            };
            //console.log(paramData)
            //交互
            login(paramData).then((res)=>{
                Cookie.setCookie("userName",_this.name);
                Cookie.setCookie("userOk",res.data.userOk);
                if(res.data.userOk){
                    _this.$router.push({path:'/Home/JingXuan'}) //如果登录成功则转跳主页
                } 
                else{
                    alert("登录失败！");
                }
            })
        },
        reset(){
            this.name="";
            this.pwd=""
        }
  },
}
</script>

<style scoped>
    div{
        padding: 60% 30%;
        box-sizing:border-box;
        background-color:darkkhaki;
    }
    h3{
        font-size: 0.4rem;
        font-family: "微软雅黑";
        color: darkgoldenrod
    }
    .intext{
        background-color: gainsboro;
        border-radius: 0.05rem;
    }
    .btn{
        margin: 0.2rem 0.4rem;
        background-color: grey;
    }
</style>



