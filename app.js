// This is an application or main file of expressjs
// This file contain all routes middleware and database configs
// This file is then exported to server.js

const express = require('express');

const app = express();

const dotenv = require('dotenv');
dotenv.config();


const homeRouter = require('./routes/homeRouter');


// express middleware
app.use(express.json());


// express routes
app.use("/", homeRouter);

module.exports=app;