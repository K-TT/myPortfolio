/*
File: Routes/users.js
Name: Kateryna Khomenko
ID: 301091332
Date: 2-Jun-2021
*/


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Placeholder');
});

module.exports = router;