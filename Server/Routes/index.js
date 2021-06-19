/*
File: Routes/index.js
Name: Kateryna Khomenko
ID: 301091332
Date: 2-Jun-2021
*/

let express = require('express');
let router = express.Router();

let indexController = require('../Controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Me page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the login page. */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the register page. */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the register page. */
router.post('/register', indexController.processRegisterPage);

/* GET Route for performing the logout page. */
router.get('/logout', indexController.performLogout);


module.exports = router;