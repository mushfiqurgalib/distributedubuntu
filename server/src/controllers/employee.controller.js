
const UserModel = require('../models/employee.model');
const StatusModel=require('../models/status.model');
const StoryModel=require('../models/story.model');
const jwt=require('jsonwebtoken');
const minio=require('minio');
const crypto=require('crypto');
const { diskStorage } = require('multer');
var dbConn  = require('../../config/db.config');

var minioClient = new minio.Client({
    endPoint: '127.0.0.1',
    port: 9000  ,
    useSSL: false,
    accessKey: 'IQG3CTw2fY9Hwav5',
    secretKey: 'lIeujKtaDuynNuT89jBTVfoDnawkRRVZ'
});
// get all employee list
exports.getEmployeeList = (req, res)=> {
    //console.log('here all employees list');
    EmployeeModel.getAllEmployees((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
}

// get employee by ID
exports.getUserByemail = (req, res)=>{
    //console.log('get emp by id');
    const UserReqData=new UserModel(req.body);
    UserModel.getUserByemail(UserReqData, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single employee data',user);
      
        res.send(user);
    })
}
exports.verifyJWT=(req,result)=>{
    jwt.verify(req.params.jwt,process.env.JWT_KEY,
        (error,decoded)=>{
            if(error){
                console.log("error");
            }
            else{
                result.send(decoded);
            }
        })

}
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
exports.createnewuser = (req, res) =>{
    const UserReqData = new UserModel(req.body);
    console.log('employeeReqData', UserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(UserReqData, (err, user)=>{
            if(err){
            res.send(err);}
            else{
            res.json({status: true, message: 'Employee Created Successfully',data:user})}
        })
    }
}

exports.getAllStatus = (req, res)=> {
    //console.log('here all employees list');
    const UserReqData=new StatusModel(req.body);
    // console.log(req.body);
    const email=req.params.email;
    console.log(email);
    console.log('employeeReqData', UserReqData);
    StatusModel.getAllStatus(email,(err, status) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', status);
        res.send(status)
    })
}

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
 

 


 exports.createnewstatus = (req, res) =>{
    const UserReqData = new StatusModel(req.body);
   
    console.log('employeeReqData', UserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        StatusModel.createStatus(UserReqData, (err, user)=>{
            if(err){
            res.send(err);}
            else{
            res.json({status: true, message: 'Story Created Successfully',data:user})}
        })
    }
}
// update employee
exports.updateEmployee = (req, res)=>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee updated Successfully'})
        })
    }
}

// delete employee
exports.deleteEmployee = (req, res)=>{
    EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Employee deleted successully!'});
    })
}

// module.exports={
//     fileengine
// }