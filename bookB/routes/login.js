
function login(response,res){
var mysql=require('mysql');
//登录
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
}
module.exports=login
