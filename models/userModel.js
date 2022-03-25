const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {type:String, required:true, enum:['Mr', 'Mrs', 'Miss'], trim:true},
    name: {type:String, required:true, trim:true},
    phone: {type:String, required:true, unique:true, match:/^[6-9]\d{9}$/, trim:true },
    email: {type:String, required:true, trim:true, unique:true, match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/},
    password : {type:String, required:true, trim:true, minlength:8, maxlength:15},
    address: {street: {type:String, trim:true}, city: {type:String, trim:true}, pincode: {type:String, trim:true}},


}, {timestamps:true});




module.exports = mongoose.model('Users', userSchema);