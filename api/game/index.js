'use strict';
console.log('game Index loading');
var path = require('path');
var gameImports = require(path.join(__dirname+'/gameGame'));
module.exports = function (router) {

    router.get('/game', function (req, res) {
        var butt = 'how bout da';
        res.send(butt);
        console.log('game index get called');
        console.log(gameImports);
        console.log(gameImports.a); 
        console.log(gameImports.a()); 
        d();
    });

    router.post('/game', function (req, res) {
        console.log('game index post called');
        let firstn = req.body.fname;
        let lastn = req.body.lname;
        let returnObj={ name: { first: firstn, last: lastn }, dateJoined: Date() };
        res.send(returnObj); //I CAN SEND DATA but how the fuck do i use it(For some js method) and then send it in an html file
        //res.sendFile(path.join(__dirname + '/peoples.html'));
    });
};

var d = function(){

};