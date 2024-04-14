const User = require("../models/user");
// const express = require('express')
// const bodyParser = require('body-parser');

// const app = express()
// app.use(express.json());
// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({ extended: true }));

const asyncHandler = require("express-async-handler");

// Display list of all Authors.

// exports.login = (req, res) => { 
//     const requestData = req.body; 
//     // Process the received data (e.g., save to a database) 
//     console.log('Received data:', requestData); 
//     // below picture is given of console data on server 
//     res.status(200).send('Data received successfully!'); 
// }; 
exports.login = asyncHandler(async (req, res, next) => {
    // const payload = req; 
    console.log(req.body)

    const username = req.body.username
    const password = req.body.password
    console.log(username, password)

    try {
    // Find user by username and password
    const user = await User.findOne({ username:username, password:password });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user data
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

exports.signup = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user list");
});

// Display detail page for a specific user.
exports.user_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: user detail: ${req.params.id}`);
});

// Display user create form on GET.
exports.user_create_get = asyncHandler(async (req, res, next) => {
    console.log(await Promise.all([User.countDocuments({}).exec()]))
    res.send(await Promise.all([User.countDocuments({}).exec()]));
});

// Handle user create on POST.
exports.user_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: user create POST");
});

// Display user delete form on GET.
exports.user_delete_get = asyncHandler(async (req, res, next) => {
    const status = {
        "Status": "Running"
     };
     
    res.send(status);
});

// Handle user delete on POST.
exports.user_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: user delete POST");
});

// Display user update form on GET.
exports.user_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: user update GET");
});

// Handle user update on POST.
exports.user_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: user update POST");
});
