const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const userRoute = require('./routes/users');

const app = express();

dotenv.config({ path: './config/.env' })
app.use(morgan('dev'));
connectDB();

app.use('/user', userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
