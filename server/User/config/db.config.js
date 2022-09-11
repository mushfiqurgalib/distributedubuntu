const mysql=require('mysql2');

const dbConn = mysql.createConnection({
    host:'db',
    user:'root',
    password:'root',
    database:'users'
});

// dbConn.connect(function(error){
// if(error) throw error;
// console.log('database connected');
// })

module.exports=dbConn;