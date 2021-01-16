const mongoose = require('mongoose');

const AgentSchema = mongoose.Schema({ 
    agent: String
 });

 module.exports = mongoose.model('Agent', AgentSchema);