//精选页面的分类展示
function jingXuanSection(res){
	var mysql=require('mysql');
    const connection=mysql.createConnection({  //连接mysql数据库
        host:'localhost',
        port:'3306',
        user:'root',
        password:'12345',
        database:'book'
});
    connection.connect();
	connection.query("SELECT * FROM books",(error,results,fields)=>{  //查找数据库中的值
		if(error) throw error;
		//console.log("userOk:"+results);
		res.send(results);
		res.end();
	});
}
module.exports=jingXuanSection;