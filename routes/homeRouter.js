// This is an initial route folder
// The router will determine at which path you will sending data
// the router requireds controller to send data in specific router
//  it also determine curd operation

const { home } = require('../controller/home.controller');

const homeRouter = require('express').Router();


homeRouter.get("/", home);

module.exports=homeRouter;