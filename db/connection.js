
// here you can establish connection with mongodb
// by using mongoose package

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODBURI, ()=>{
    console.log("connected successfully");
})