'use strict';
console.log('bravo Index loading');
var alphaImports = require('../../alpha');//ASK TOM look in the parent or the parent of the current directory
module.exports = function (router) {
    router.get('/bravo/:value', function (req, res) {
        var caltec = req.params.value;
        if (isNaN(Number(caltec))) {
            caltec = alphaImports.bravo(caltec);
        }
        else {
            caltec = alphaImports.bravo(Number(caltec));
        }
        res.send({
            data: caltec
        }); // two different variables concatenated together will convert to a type that can handle them both, in this case string can be numbers so it converts to a string
        console.log('bravo Index get called');
    });
};
