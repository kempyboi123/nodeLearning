`npm init` //to install npm and begin using it (this is effectively signing up for npm)
install node
`node mainScriptName.js`  // this will execute your script and provide any returns/logs

`npm install --save-dev mocha`//FOR TESTING  // this will install a testing framework 'mocha' and all its dependencies as a 'dev' only framework, e.g non dev machines don't need it

`npm install` // check for dependencies and install them

`npm install --save-dev chai`//FOR TESTING  // for the 'assert' capability required for mocha

read test area in package.json to see how testing is implemented and utilised
it'll tell mocha which 'spec' files to look and will run them as tests

to do testing you simply run `npm test`//FOR TESTING  after setting up some tests and linking to them in package.json

`npm run test-watch`//FOR TESTING  //means that every test is run when a file with a test is saved, need to add `--watch` to the end of the test in package.json    Ctrl + c to stop testing

adding `--reporter nyan` //can see additional reporters on mochas site, will add somethings to the terminal test

`npm install -g nodemon` //nodemon == node so if i run `nodemon index.js` it will act as node would but will auto restart by node server if i change any file(js files only?) 

`npm install superagent`//FOR TESTING // will allow you to send requests to a server in the testing area, check index.spec.js to see

`npm install --save-dev eslint` to allow for 'intellisense' like functionality in js in vscode

edit the .eslintrc.js file to add/remove rules, check their site for details
`npm install --save-dev eslint-plugin-mocha`//FOR TESTING  adds a plugin for eslint to check mocha, and make sure its functioning as it should, according to the rules set for it#

`npm install --save body-parser` this is for parsing requests from a post method in the 'body' area


APIs are end points the have no HTML involved, they're just server shit, so they dont have HTML in them or client side js,
that goes into an APP set of files, those files are sent and then call the API endpoints to add additional data, like a list of peeps thats kept on the server