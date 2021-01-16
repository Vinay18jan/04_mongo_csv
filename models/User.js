const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({ 
    firstname: {
        type: String,
        trim: true
    },
    dob: Date,
    address: String,
    phone: String,
    state: String,
    zip: String,
    gender: String,
    userType: String
 });

 module.exports = mongoose.model('User', UserSchema);