

const StoryModel=require('../models/story.model');
const jwt=require('jsonwebtoken');
const minio=require('minio');
const crypto=require('crypto');
const { diskStorage } = require('multer');
var dbConn  = require('../../Status/config/db.config');

var minioClient = new minio.Client({
    endPoint: '127.0.0.1',
    port: 9000  ,
    useSSL: false,
    accessKey: 'z2DIVKvrGW7JLwyZ',
    secretKey: 'nD4nXPf5oNTJl4FlBdLlz1jYlrC2diUY'
});
// get all employee list

// exports.verifyJwt = (req, res, next) => {
//     var token=req.body.jwttoken;
//     // if('authorization' in req.headers)
//     //     token = req.headers['authorization'].split(' ')[1];

//     if(!token)
//         return res.status(403).send({auth: false, message: 'No token provided.'});

//     else{
//         jwt.verify(token, process.env.JWT_SECRET,
//             (err, decoded) => {
//                 if(err)
//                     return res.status(500).send({ auth: false, message: 'Token authentication failed' });
//                 else{
//                     req._id = decoded._id;
//                     next()
//                 }
//             }
//         )
//     }

// }
// create new employee


exports.getAllStory = (req, res)=> {
    //console.log('here all employees list');
    const UserReqData=new StoryModel(req.body);
    // console.log(req.body);
    const email=req.params.email;
    console.log(email);
    console.log('employeeReqData', UserReqData);
    StoryModel.getAllStory(email,(err, story) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', story);
        res.send(story)
    })
}

//create new status
    exports.createnewstory=(req,res)=>{
        // console.log(req.file);
        // console.log(req.body);
        var uuid=crypto.randomUUID();
       
        // story.email=req.body.email;
        // story.name=uuid;
        dbConn.query('INSERT INTO story (email,name) VALUES (?,?)',[req.body.email,uuid],(err,res)=>{
            if(err){
                console.log('Error while inserting data');
                // result(null, err);
            }else{
                console.log('Story created successfully');
                // result(null, res)
            }
        })
        
        
        minioClient.fPutObject('class', uuid, req.file.path, function(err, objInfo) {
            if(err) {
                res.send(err);
            }
            console.log("Success", objInfo.etag, objInfo.versionId)
        })
        console.log(req.file);
        res.send("Success");
 }
 

 


 
// module.exports={
//     fileengine
// }