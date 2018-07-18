var express=require('express')
var app=express();
var login=require('./login.js')

exports.kuayu=function(){
	app.all('*', function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By", ' 3.2.1')
		if (req.method == "OPTIONS") res.sendStatus(200); /*让options请求快速返回*/
		else next();
	});
}
var server=app.listen(3000,'127.0.0.1',()=>{
	console.log("端口3000运行");
})