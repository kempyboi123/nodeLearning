'use strict';

var path = require('path');
let fs = require('fs');
var readStuff ='';
fs.readFile(path.join(__dirname+'/gameJSON.json'),'utf-8',(err, data) => {
    if (err) {
        console.log(err);
    }
    readStuff = data;
    var parsedDATA = JSON.parse(readStuff); // parsing JSON to utilise as an object
    console.log(parsedDATA); // logging to show test data
    parsedDATA.name = 'newParsedStuff'; // utilise the functionality of an object to make sure its been parsed
    readStuff = parsedDATA; 
    module.exports.a = parsedDATA; // update the details in module.exports
    console.log(readStuff);
});
module.exports = {
    a: readStuff // this stays as an empty string unless its updated
};
console.log(readStuff);