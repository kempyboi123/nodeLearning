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


let fs = require('fs');
let dickButt = function () {
    return 'bravo';
};


fs.readFile('/testRead',dickButt);
// fs.readFile('/testRead', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


module.exports = {
    a: dickButt
};