'use strict';

// var readStuff = '';


// fs.readFile(path.join(__dirname + '/save.json'), 'utf-8', (err, readStuff) => {
//     if (err) {
//         //we need to create the file
//         console.log(err);
//     }
//     readStuff = data;
//     var parsedDATA = JSON.parse(readStuff); // parsing JSON to utilise as an object
//     console.log(parsedDATA); // logging to show test data
//     parsedDATA.name = 'parsedStuff'; // utilise the functionality of an object to make sure its been parsed
//     readStuff = parsedDATA;
//     module.exports.a = parsedDATA; // update the details in module.exports
//     console.log(readStuff);
//     console.log(JSON.stringify(readStuff));
//     fs.writeFile(path.join(__dirname + '/save.json'), JSON.stringify(readStuff), 'utf-8', (err) => {
//         if (err) throw err;
//         console.log('It\'s saved!');
//     });
// });

var path = require('path');
let fs = require('fs');

let file = path.join(__dirname + '/save.json');
let baseFile = {
    name: 'test'
};

module.exports = {
    //a: readStuff, // this stays as an empty string unless its updated
    //callback will be called with (err, fileData)
    getSettings: (callback) => { // getSettings is the key, it holds a function with a callback as its argument
        fs.readFile(file, (err, data) => { //fs.readFile the file at that path (file), when that finishes no matter how it goes go to the next function
            if (err) {
                //file not there, we must create it from the fires of hell
                console.log('save file doesn\'t exist, creating');
                fs.writeFile(file, JSON.stringify(baseFile), (err) => { // as there's no file we write a file instead of read, we right the JSON of the basefile 
                    callback(err, baseFile); // end the get getSettings function with this callback, returning err(if there is one, hopefully this'll be null/undef) and the js object baseFile
                });
            } else {
                callback(null, JSON.parse(data));// additional end to function, there was no error so instead of writing a file we read and parse the file that we need, we would then apply the setting
            }
        });
    }
};