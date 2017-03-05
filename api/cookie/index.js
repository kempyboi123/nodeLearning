'use strict';
console.log('cookie Index loading');
var path = require('path');
module.exports = function (router) {
    router.get('/cookie', function (req, res) {
        res.sendFile(path.join(__dirname + '/jsCookieHtml.html'));
        console.log('cookie Index get called');
    });
};