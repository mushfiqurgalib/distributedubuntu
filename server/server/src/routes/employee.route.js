const express = require('express');
const router = express.Router();
const multer=require('multer');

const employeeController = require('../controllers/employee.controller');

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
router.post('/login',employeeController.getUserByemail);

// create new employee
router.post('/', employeeController.createnewuser);

router.post('/status', employeeController.createnewstatus);

router.post('/story',upload.single("image"), employeeController.createnewstory);

router.get('/profile/:jwt',employeeController.verifyJWT);

router.get('/status/:email', employeeController.getAllStatus);

router.get('/story/:email', employeeController.getAllStory);
// update employee
router.put('/:id', employeeController.updateEmployee);

// delete employee
router.delete('/:id',employeeController.deleteEmployee);

module.exports = router;