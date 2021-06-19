/*
File: Models/user.js 
Name: Kateryna Khomenko
ID: 301091332
Date: 17-Jun-2021
*/


//require modules for the User Model

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(

    {

        username: {
            type: String,
            default: '',
            trim: true,
            require: "username is required"
        },
        /*
        password: {
            type: String,
            default: '',
            trim: true,
            require: "password is required"

        },*/
        email: {
            type: String,
            default: '',
            trim: true,
            require: "email is required"
        },
        displayName: {
            type: String,
            default: '',
            trim: true,
            require: "Display Name is required"
        },
        created: {
            type: Date,
            default: Date.now,
        },
        updated: {
            type: Date,
            default: Date.now,
        }


    }, {
        collection: "users"
    }
);

//configure options for User MOdel

let options = ({ missingPasswordError: 'Wrong / Missing Password' });
User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);