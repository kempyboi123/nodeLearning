'use strict';
console.log('game Index loading');
var path = require('path');
var gameImports = require(path.join(__dirname + '/gameGame'));
module.exports = function (router) {

    router.get('/game', function (req, res) {
        var butt = 'how bout da';
        console.log('game index get called');
        gameImports.getSettings((err, save) => {
            console.log('save loaded');
            if(err)
            {
                res.status(500).send(err);
                return;
            }
            res.send(save);
        });
    });

    router.post('/game', function (req, res) {
        console.log('game index post called');
        res.send(); // IMPLEMENT
    });
};