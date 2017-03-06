'use strict';
console.log('game Index loading');
var path = require('path');
var gameImports = require(path.join(__dirname + '/gameGame'));
module.exports = function (router) {

    router.get('/game', function (req, res) {
        console.log('game index get called');
        gameImports.getSettings((err, save) => { // get the setting, the execute the next function(with the args err,save)
            console.log('game saves loaded');
            if(err) // if err is defined/!null
            {
                res.status(500).send(err); //if something went real bad, send server error instead of defining the error
                return; // exits the function so the next bit of the function isn't run(no point sending bad data)
            }
            res.send(save); //end point of the function sending the 'data' to the client environment 
        });
    });

    router.post('/game', function (req, res) {
        console.log('game index post called');
        res.send(); // IMPLEMENT
    });
};