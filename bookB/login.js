var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var assert=require('assert').strict;
var mysql=require('mysql');
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	if (req.method == "OPTIONS") res.sendStatus(200); /*让options请求快速返回*/
	else next();
});
//var urlEncode = bodyParser.urlencoded( {extended: false} );
app.use(bodyParser.urlencoded( {extended: false}));
app.use(bodyParser.json());
//登录
var respons="";
app.post("/login", (req,res)=>{  //获取前台传过来的登录数据
	response = {
		'name': req.body.name,
		'pwd': req.body.pwd
	}
	console.log("1:"+response.name);
	//response=JSON.stringify(response);    //转换格式
	const connection=mysql.createConnection({  //连接mysql数据库
		host:'localhost',
		port:'3306',
		user:'root',
		password:'12345',
		database:'book'
	});
	var userOk=false;  //登录成功的状态判定
	connection.connect();
	connection.query("SELECT * FROM users_table",(error,results,fields)=>{  //查找数据库中的值
		if(error) throw error;
		for(let i in results){       //将用户名、密码和数据库中的比较
			if(response.name===results[i].user_name && response.pwd==results[i].user_password){
				userOk=true; break;
			}else{
				userOk=false;
			}
		}
		console.log("userOk:"+userOk);
		const R={            //返回用户名跟判断用户是否成功登录的状态码
			"name":response.name,
			"userOk":userOk
		};
		res.send(R);
		res.end();
	});
connection.end();
});

app.get("/login",(req,res)=>{
	res.writeHead(200, {"Content-Type": "application/json;charset=utf-8" });
	res.end("000:"+response.name);
})
var server=app.listen(3000,'127.0.0.1',()=>{
	console.log("端口3000运行");
})