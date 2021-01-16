const mongoose = require('mongoose');

const PolicyInfoSchema = mongoose.Schema({
    policy_number: String,
    policy_start_date: Date,
    policy_end_date: Date,
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