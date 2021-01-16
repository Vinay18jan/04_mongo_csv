const mongoose = require('mongoose');

const UserAccountSchema = mongoose.Schema({
    account_name: String
});

module.exports = mongoose.model('UserAccount', UserAccountSchema);