var express=require('express');
var login=require('./routes/login')
var kuayu=require('./kuayu');
var jingXuanSection=require('./routes/jingXuanSection')

//创建app
var app=express();

//配置
kuayu(app);//跨域
//路由

//登录
app.post('/login',(req,res,next)=>{
    let response = {
		'name': req.body.name,
		'pwd': req.body.pwd
	}
    console.log("req",response);
    login(response,res);//调用登录的后台业务js
})

//显示精选页（首页）的书本分类数据
app.post('/showBookData',(req,res)=>{
    jingXuanSection(res);
})
//监听
app.listen(3000,'127.0.0.1',()=>{
    console.log("server运行3000")
})

