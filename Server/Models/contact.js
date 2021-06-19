/*
File: Models/contact.js 
Name: Kateryna Khomenko
ID: 301091332
Date: 17-Jun-2021
*/


let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
}, {
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);