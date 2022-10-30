// A server.js file will now able to run our application
// it first import app from app file 
// and add listener to run server at specific port

const app = require('./app');

//importing dotenv 
const dotenv = require('dotenv');

//configuring dotenv
dotenv.config();

//port
const port=process.env.PORT || 5000;

//listening port
app.listen(port,()=>{
    console.log("listening at port 5000");
})

module.exports= app;