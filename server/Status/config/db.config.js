const mysql=require('mysql2');

const dbConn = mysql.createConnection({
  
    host:'statusdb',
    user:'root',
    password:'root',
    database:'status'
});

dbConn.connect(function(error){
if(error) throw error;
console.log('database connected');
})

module.exports=dbConn;