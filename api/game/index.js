'use strict';
console.log('game Index loading');
var path = require('path');
var gameImports = require(path.join(__dirname + '/gameGame'));
module.exports = function (router) {

    router.get('/game', function (req, res) {
        var butt = 'how bout da';
        res.send(butt);
        console.log('game index get called');
        console.log(gameImports.a);
    });

    router.post('/game', function (req, res) {
        console.log('game index post called');
        res.send(); // IMPLEMENT
    });
};