'use strict';
console.log('hello Index loading');
module.exports = function (router) {
    router.get('/hello', function (req, res) {
        res.send('by dickins its you!');
        console.log('hello Index called');
    });
};