var dbConn  = require('../../Status/config/db.config');


var Story=function(story){
    this.email=story.email;
    this.name=story.name;
}

Story.createStory=(employeeReqData,result)=>{

    dbConn.query('INSERT INTO story SET ?',employeeReqData,(err,res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Story created successfully');
            result(null, res)
        }
    })
}

Story.getAllStory = (email,result) =>{
    dbConn.query('SELECT * FROM(SELECT * FROM `story`)VAR2 WHERE email!=?  ORDER BY id DESC LIMIT 10',[email], (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}
module.exports=Story;