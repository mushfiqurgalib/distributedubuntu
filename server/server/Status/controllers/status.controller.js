
const StatusModel=require('../models/status.model');

const jwt=require('jsonwebtoken');
const minio=require('minio');
const crypto=require('crypto');
const { diskStorage } = require('multer');
var dbConn  = require('../config/db.config');

var minioClient = new minio.Client({
    endPoint: '127.0.0.1',
    port: 9000  ,
    useSSL: false,
    accessKey: 'IQG3CTw2fY9Hwav5',
    secretKey: 'lIeujKtaDuynNuT89jBTVfoDnawkRRVZ'
});


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


 


 exports.createnewstatus = (req, res) =>{
    const UserReqData = new StatusModel(req.body);
   
    console.log('employeeReqData',req.body);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        StatusModel.createStatus(UserReqData, (err, user)=>{
            if(err){
            res.send(err);}
            else{
            res.send({status: true, message: 'Story Created Successfully',data:user})}
        })
    }
}
// update employee
