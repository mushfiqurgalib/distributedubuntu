const express = require('express');
const router = express.Router();
const multer=require('multer');

const employeeController = require('../controllers/status.controller');




// get all employees
// router.get('/', employeeController.getEmployeeList);

// get employee by ID


router.post('/status', employeeController.createnewstatus);



router.get('/status/:email', employeeController.getAllStatus);



module.exports = router;