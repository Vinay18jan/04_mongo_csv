const mongoose = require('mongoose');

const PolicyInfoSchema = mongoose.Schema({
    policyNumber: String,
    policyStartDate: Date,
    policyEndDate: Date,
    policyCategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'PolicyCategory'
    },
    policyCarrierId: {
        type: mongoose.Schema.ObjectId,
        ref: 'PolicyCarrier'
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('PolicyInfo', PolicyInfoSchema);