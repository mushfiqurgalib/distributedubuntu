const mysql=require('mysql');

const dbConn = mysql.createConnection({
    port:3306,
    host:'localhost',
    user:'root',
    password:'',
    database:'status'
});

dbConn.connect(function(error){
if(error) throw error;
console.log('database connected');
})

module.exports=dbConn;