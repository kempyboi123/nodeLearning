'use strict';
console.log('people Index loading');
// var path = require('path');
var arrayOfPeeps = [{ name: { first: 'alpha', last: 'bravo' }, dateJoined: 'Wed Mar 01 2017 17:26:03 GMT+0000 (GMT Standard Time)' }];
module.exports = function (router) {


    router.get('/people', function (req, res) {
        res.send(arrayOfPeeps);
        console.log('people Index get called');
    });

    router.post('/people', function (req, res) {
        console.log('people index post called');
        let firstn = req.body.fname;
        let lastn = req.body.lname;
        let returnObj={ name: { first: firstn, last: lastn }, dateJoined: Date() };
        arrayOfPeeps.push(returnObj); 
        res.send(returnObj); //I CAN SEND DATA but how the fuck do i use it(For some js method) and then send it in an html file
        //res.sendFile(path.join(__dirname + '/peoples.html'));
    });
};