
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//load env vars
dotenv.config({ path: './config/config.env' });

//connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

