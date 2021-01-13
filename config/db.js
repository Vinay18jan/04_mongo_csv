const mongoose = require('mongoose');

const connectDB = async function()  {
    const conn = await mongoose.connect(process.env.MONGO_URI,  {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
     console.log(`MONGO SERVER CONNECTED AT ${conn.connection.host}`);
}

module.exports = connectDB;