function mysqlConnection(){
    var mysql=require('mysql');
    const connection=mysql.createConnection({  //连接mysql数据库
        host:'localhost',
        port:'3306',
        user:'root',
        password:'12345',
        database:'book'
});
    connection.connect();
}
module.exports=mysqlConnection

