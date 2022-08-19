const express = require('express');
const router = express.Router();
const multer=require('multer');

const employeeController = require('../controllers/status.controller');

const fileengine=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"--"+file.originalname);
    },
    
 });
const upload=multer({storage:fileengine});


// get all employees
// router.get('/', employeeController.getEmployeeList);

// get employee by ID


router.post('/status', employeeController.createnewstatus);



router.get('/status/:email', employeeController.getAllStatus);



module.exports = router;