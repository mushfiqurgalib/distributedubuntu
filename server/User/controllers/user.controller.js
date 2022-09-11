const UserModel = require("../models/user.model");

// get all employee list
exports.getEmployeeList = (req, res) => {
  //console.log('here all employees list');
  EmployeeModel.getAllEmployees((err, employees) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("Employees", employees);
    res.send(employees);
  });
};

// get employee by ID
exports.getUserByemail = (req, res) => {
  try {
    const UserReqData = new UserModel(req.body);
    


    UserModel.getUserByemail(UserReqData, (err, user) => {
      if (err) res.send(err);
      console.log("single employee data", user);

      res.send(user);
    });

// res.json({
//     Jwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXJpZkBnbWFpbC5jb20iLCJpYXQiOjE2NjI0NDkwMjd9.2jvx7H3nLO7XjHnYG3c-7QePuiEGJI_dSl5QvWgSuNQ"
// })
  } catch {
    res.json(
      JSON.stringify({
        testing: "CHILLOX BURGER",
      })
    );
  }
};
exports.verifyJWT = (req, result) => {
  jwt.verify(req.params.jwt, process.env.JWT_KEY, (error, decoded) => {
    if (error) {
      console.log("error");
    } else {
      result.send(decoded);
    }
  });
};
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
exports.createnewuser = (req, res) => {
  const UserReqData = new UserModel(req.body);
  console.log("employeeReqData", UserReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    UserModel.createUser(UserReqData, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: true,
          message: "Employee Created Successfully",
          data: user,
        });
      }
    });
  }
};

// update employee
exports.updateEmployee = (req, res) => {
  const employeeReqData = new EmployeeModel(req.body);
  console.log("employeeReqData update", employeeReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    EmployeeModel.updateEmployee(
      req.params.id,
      employeeReqData,
      (err, employee) => {
        if (err) res.send(err);
        res.json({ status: true, message: "Employee updated Successfully" });
      }
    );
  }
};

// delete employee
exports.deleteEmployee = (req, res) => {
  EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Employee deleted successully!" });
  });
};

// module.exports={
//     fileengine
// }
