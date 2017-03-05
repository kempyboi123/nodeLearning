'use strict';

//============================================
//server begins here
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true // body parser = deal with post requests
}));
var router = express.Router(); // ask tom difference between router and server
var port = process.env.PORT || 3000; // if there's an environment variable called port use its value, else use 3k 
router.use(express.static(__dirname + '/api'));

//============================================
//middleware stuff
// if this middleware is done before a route is created it is applied to the route
// if it done after the route is created it is not applied 
router.use((function (req, res, next) {
    console.log(req.url);
    next();
}));
// will apply specific middleware only to one router as defined
// in the first argument in this case '/hello'
router.use('/hello', function (req, res, next) {
    console.log('hello from the path /hello');
    next();
});

//will look for the :value parameter, this only comes up for 'bravo'
//so this peice of middleware will only apply to the bravo path
router.param('value', function (req, res, next) {
    console.log('hello from the middleware');
    next();
});

//==========================================================
//Routes
var cookiePath = require('./api/cookie');
cookiePath(router);

var peoplePath = require('./api/people');
peoplePath(router);

var helloPath = require('./api/hello');
helloPath(router);

var pointPath = require('./api/point');
pointPath(router);

var bravoPath = require('./api/bravo');
bravoPath(router);

var gamePath = require('./api/game');
gamePath(router);

//main index path, left here as an example for routing
var path = require('path');
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log('main Index get called');
});

server.use('/', router); // Apply all the router routers to the server


//=============================================================
//server start listening
server.listen(port, function () {
    console.log(`Learning server listening on port ${port}!`);
}); 