console.log('Jai Sh Raam');
console.log('App started');

// All module docs, https://nodejs.org/api/

//`const` means that the identifier can’t be reassigned.
//Question: What will happen when we try to reassign the const variable?
//Error Message : Uncaught TypeError: Assignment to constant variable.

//I use `let` when I need to reassign a variable. Because I use one variable to represent one thing, the use case for `let` tends to be for loops or //mathematical algorithms.
//`let`, is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will //be used only in the block it’s defined in, which is not always the entire containing function.

//The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.
//Example: var a =10;
//Variable declarations are processed before the execution of the code.
//The scope of a JavaScript variable declared with var is its current execution context.
//The scope of a JavaScript variable declared outside the function is global.

//`var` is now the weakest signal available when you define a variable in JavaScript. The variable may or may not be reassigned, and the variable may or may //not be used for an entire function, or just for the purpose of a block or loop.

/*
//https://www.w3schools.com/nodejs/nodejs_modules.asp

What is a Module in Node.js?
Consider modules to be the same as JavaScript libraries.

A set of functions you want to include in your application.

Built-in Modules
Node.js has a set of built-in modules which you can use without any further installation.

Look at our Built-in Modules Reference for a complete list of modules.

Include Modules
To include a module, use the require() function with the name of the module:

var http = require('http');
Now your application has access to the HTTP module, and is able to create a server:

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
Create Your Own Modules
You can create your own modules, and easily include them in your applications.

The following example creates a module that returns a date and time object:

Example
Create a module that returns the current date and time:

exports.myDateTime = function () {
    return Date();
};
Use the exports keyword to make properties and methods available outside the module file.

Save the code above in a file called "myfirstmodule.js"


Include Your Own Module
Now you can include and use the module in any of your Node.js files.

Example
Use the module "myfirstmodule" in a Node.js file:

var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);

//http://fredkschott.com/post/2014/06/require-and-the-module-system/
*/

// fs module, https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
const fs=require('fs');


//fs.appendFile('greetings.txt','Welcome Arun & Team');//it will create a file name greetings.txt and write string 'Welcome Arun & Team' in it. 
//If executed more then once then that message will be appended back to back

const os=require('os');

var user=os.userInfo();
//console.log(user);//print complete user object
console.log('username : '+user.username);
console.log('homedir : '+user.homedir);

//fs.appendFile('greetings.txt','Welcome '+ user.username +' & Team');
//fs.appendFile('greetings.txt',`Hello ${user.username}`);//` above tab key on ur keyboard