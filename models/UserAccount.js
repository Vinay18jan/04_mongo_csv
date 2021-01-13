const mongoose = require('mongoose');

const UserAccountSchema = mongoose.Schema({
    accountName: String
});

module.exports = mongoose.model('UserAccount', UserAccountSchema);