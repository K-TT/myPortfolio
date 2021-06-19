/*
File: Routes/contact.js 
Name: Kateryna Khomenko
ID: 301091332
Date: 17-Jun-2021
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

//helper function for guard purposes
function requireAuth(req, res, next) {
    //check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}


let contactController = require('../Controllers/contact');

/*GET Router for the Contacts list page - READ operation*/
router.get('/', contactController.displayContactList);

/*GET Router for displaying the Add page - CREATE operation*/
router.get('/add', requireAuth, contactController.displayAddPage);

/*POST Router for processing the Add page - CREATE operation*/
router.post('/add', requireAuth, contactController.processAddPage);

/*GET Router for displaying the Update page - UPDATE operation*/
router.get('/update/:id', requireAuth, contactController.displayUpdateContact);

/*POST Router for processing the Update page - UPDATE operation*/
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id', requireAuth, contactController.performDelete);


module.exports = router;