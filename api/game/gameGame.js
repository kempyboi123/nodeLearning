'use strict';
//============================================
// var openFile = function () {
//     var path = require('path');
//     var input = path.join((__dirname+'/testRead.txt'));

//     var reader = new FileReader();
//     reader.onload = function () {
//         var dataURL = reader.result;
//         var output = document.getElementById('output');
//         output.src = dataURL;
//     };
//     console.log(reader.readAsDataURL(input.files[0]));
// };
// openFile;
//=============================================================================
// var jsonfile = require('jsonfile');
// var file = './gameJSON.json';
// jsonfile.readFile(file, function (err, obj) {
//     console.log(obj);
// });
//================================================================================

var path = require('path');
let fs = require('fs');
var readStuff ='';
fs.readFile(path.join(__dirname+'/gameJSON.json'),'utf-8',(err, data) => {
    if (err) {
        console.log(err);
    }
    readStuff = data; // IF IS JSON, SHOULD PARSE TO UTILISE THE DATA
    module.exports.a = readStuff; // update the details in module.exports
    console.log(readStuff);
});
module.exports = {
    a: readStuff // this stays as an empty string unless its updated
};
console.log(readStuff);