const mongoose = require('mongoose');

const HostSchema = mongoose.Schema({
    name: String,
    ipaddr: String
});

module.exports = mongoose.model('Host', HostSchema);