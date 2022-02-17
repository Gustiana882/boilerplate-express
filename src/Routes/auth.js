const express = require('express');

const route = express.Router();
const Login = require('../Controllers/auth/login');
const Register = require('../Controllers/auth/register');

route.post('/login', Login);
route.post('/register', Register);

module.exports = route;
