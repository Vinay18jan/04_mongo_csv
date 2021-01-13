const mongoose = require('mongoose');

const PolicyCarrierSchema = mongoose.Schema({
    companyName: String
});

module.exports = mongoose.model('PolicyCarrier', PolicyCarrierSchema);