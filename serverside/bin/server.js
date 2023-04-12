'use strict'
require('@babel/polyfill');
require('@babel/register');

var config = require('../config/config');
const app = require('../app').default;
var configdata = config.get(process.env.Node_env);
// import 'dotenv/config'

var apiPort = configdata.api_port;
var http = require('http');
var server = http.createServer(app);
server.listen(apiPort);

server.on('listening',() => {
    console.log("Server created successfully.listen port no:" +apiPort)
})