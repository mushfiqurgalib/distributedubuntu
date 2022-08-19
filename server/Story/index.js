const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
// create express app
require('dotenv').config();
const app = express();
const uuid=require('uuid');
const axios=require('axios');
const dotenv=require('dotenv');
// setup the server port
const port = process.env.PORT || 5002;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());
 app.use(cors());
// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import employee routes
const employeeRoutes = require('./routes/story.route');

// create employee routes
app.use('/api/v1/employee', employeeRoutes);



// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});