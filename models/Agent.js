const mongoose = require('mongoose');

const AgentSchema = mongoose.Schema({ 
    agentName: String
 });

 module.exports = mongoose.model('Agent', AgentSchema);