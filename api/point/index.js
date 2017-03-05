'use strict';
console.log('point Index loading');
var alphaImports = require('../../alpha');//ASK TOM look in the parent or the parent of the current directory
module.exports = function (router) {
    router.get('/point', function (req, res) {
        res.send(alphaImports.point);
        console.log('point Index get called');
    });
};