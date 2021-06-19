/*
File: Controllers/index.js 
Name: Kateryna Khomenko
ID: 301091332
Date: 17-Jun-2021
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../Config/db');

//create the User Model instance
let userModel = require('../Models/user');
let User = userModel.User; //alias


module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home', page: 'home', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About me', page: 'about', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'My Projects', page: 'projects', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services', page: 'services', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact me', page: 'contact', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayLoginPage = (req, res, next) => {
    //check if user already logged in

    if (!req.user) {
        res.render('auth/login', {

            title: "Login",
            page: 'login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    } else {
        return res.redirect('/');
    }

}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            //server error
            if (err) {
                return next(err);
            }

            //is there a user login error?
            if (!user) {

                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
            }
            req.login(user, (err) => {
                //server error?
                if (err) {
                    return next(err);
                }

                const payload = {
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email
                }

                const authToken = jwt.sign(payload, DB.Secret, {
                    expiresIn: 604900 //1 week
                });
                /* TODO-Getting ready for API
                                res.json({
                                    success: true,
                                    msg: "User Logged Iin successfully!",
                                    user: {
                                        id: user._id,
                                        displayName: user.displayName,
                                        username: user.username,
                                        email: user.email
                                    },
                                    token: authToken
                                });
                */
                return res.redirect('/contact-list');
            });
        })(req, res, next);

}

module.exports.displayRegisterPage = (req, res, next) => {
    //check if user already is not registered
    if (!req.user) {
        res.render('auth/register', {

            title: "Register",
            page: 'register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    } else {
        return res.redirect('/');
    }

}

module.exports.processRegisterPage = (req, res, next) => {
    //instantiate a user object
    let newUser = new User({
        username: req.body.username,
        //password:req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!');
            }
            return res.render('auth/register', {
                title: "Register",
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        } else {
            //if no error exists, registration is successful 

            //redirect the user and authenticate them

            //TODO-Getting ready for API
            //res.json({ success: true, msg: "User registered successfully" });

            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contact-list')
            });
        }
    });

}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}