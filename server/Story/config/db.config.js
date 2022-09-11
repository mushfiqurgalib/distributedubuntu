const mysql=require('mysql2');

const dbConn = mysql.createConnection({
    host:'storydb',
    user:'root',
    password:'root',
    database:'story'
});

dbConn.connect(function(error){
if(error) throw error;
console.log('database connected');
})

module.exports=dbConn;