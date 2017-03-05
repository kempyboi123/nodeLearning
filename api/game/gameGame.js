'use strict';

var path = require('path');
let fs = require('fs');
var readStuff = '';
fs.readFile(path.join(__dirname + '/gameJSON.json'), 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    readStuff = data;
    var parsedDATA = JSON.parse(readStuff); // parsing JSON to utilise as an object
    console.log(parsedDATA); // logging to show test data
    parsedDATA.name = 'parsedStuff'; // utilise the functionality of an object to make sure its been parsed
    readStuff = parsedDATA;
    module.exports.a = parsedDATA; // update the details in module.exports
    console.log(readStuff);
    console.log(JSON.stringify(readStuff));
    fs.writeFile(path.join(__dirname + '/gameJSON.json'), JSON.stringify(readStuff), 'utf-8', (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
});
module.exports = {
    a: readStuff // this stays as an empty string unless its updated
};