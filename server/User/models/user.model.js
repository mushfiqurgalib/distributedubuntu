var dbConn  = require('../../config/db.config');
const jwt=require('jsonwebtoken');
var User = function(users){
    this.email     =   users.email;

    this.password          =   users.password;

 
}


// get all employees
// Employee.getAllEmployees = (result) =>{
//     dbConn.query('SELECT * FROM employees', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Employees fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get employee by ID from DB
User.getUserByemail = (employeeReqData, result)=>{
    dbConn.query('SELECT * FROM users WHERE email=? AND password=?', [employeeReqData.email,employeeReqData.password], (err, res)=>{
        console.log(res);
        if(err){
            console.log('Error while fetching employee by name', err);
             result(null, err);
        }else{
            if(res.length==1){
            const username=employeeReqData.email;
            const user={name:username};
            const access=jwt.sign(user,process.env.JWT_KEY);
             result(null,access);}
            // result(null, res);
           
        }
    })
}



// create new employee
User.createUser = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO users SET ? ', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Employee created successfully');
            result(null, res)
        }
    })
}

// User.generateJwt = function() {
  
//     return jwt.sign (users.email,process.env.JWT_KEY);

      
// }


// // update employee
// Employee.updateEmployee = (id, employeeReqData, result)=>{
//     dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.designation,employeeReqData.salary, id], (err, res)=>{
//         if(err){
//             console.log('Error while updating the employee');
//             result(null, err);
//         }else{
//             console.log("Employee updated successfully");
//             result(null, res);
//         }
//     });
// }

// // delete employee
// Employee.deleteEmployee = (id, result)=>{
//     // dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
//     //     if(err){
//     //         console.log('Error while deleting the employee');
//     //         result(null, err);
//     //     }else{
//     //         result(null, res);
//     //     }
//     // })
//     dbConn.query("UPDATE employees SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the employee');
//             result(null, err);
//         }else{
//             console.log("Employee deleted successfully");
//             result(null, res);
//         }
//     });
// }

module.exports = User;