const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({ 
    firstName: String,
    dob: String,
    address: String,
    phoneNumber: Number,
    state: String,
    zipCode: Number,
    gender: String,
    userType: String
 });

 module.exports = mongoose.model('User', UserSchema);