const mongoose = require('mongoose');

const LogMessageSchema = mongoose.Schema({
    time: Date,
    message: String,
    hostId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Host'
    }
});

module.exports = mongoose.model('Log', LogMessageSchema);