const mongoose = require('mongoose');

const PolicyCarrierSchema = mongoose.Schema({
    company_name: String
});

module.exports = mongoose.model('PolicyCarrier', PolicyCarrierSchema);