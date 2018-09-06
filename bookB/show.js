function showData(type){
    connection.query('SELECT hot FROM users_table where type=book_'+type+''),(error,results,fields)=>{
        if(error) throw error;
        for(let i in results){
            console.log("results[i]",results[i]);
        }
        res.send(results);
    };
}
module.exports=showData