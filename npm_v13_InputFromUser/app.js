//https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525240?start=350
//exporting third party module, https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525242?start=0
console.log('Jai Sh Raam');
console.log('app.js started');

const fs=require('fs');
const os=require('os');
const _ = require('lodash');

const notes=require('./f1/notes');


var command0=process.argv[0];
var command1=process.argv[1];
var command2=process.argv[2];

//console.log('Param 0:'+command0);
//console.log('Param 1:'+command1);
//console.log('Param 2:'+command2);
/*
C:\SabaNodeUploader\practice\npm_v13_InputFromUser>node app.js list
Jai Sh Raam
app.js started
Jai Sh Raam
notes.js started
Param 0:C:\Program Files\nodejs\node.exe
Param 1:C:\SabaNodeUploader\practice\npm_v13_InputFromUser\app.js
Param 2:list
*/

var command=process.argv[2];

console.log('process:',process.argv);//to print complete argument array
/*
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\SabaNodeUploader\\practice\\npm_v13_InputFromUser\\app.js',
  'list' ]
*/

if (command==='add'){
	console.log('Adding new note');
}else if (command==='list'){
	console.log('Listing all Notes');
}else if (command === 'read'){
	console.log('Reading note');
}else if (command === 'remove'){
	console.log('Removing note');
}else{
	console.log("No command Identified");
}
/*
C:\SabaNodeUploader\practice\npm_v13_InputFromUser>node app.js lis9 add
Jai Sh Raam
app.js started
Jai Sh Raam
notes.js started
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\SabaNodeUploader\\practice\\npm_v13_InputFromUser\\app.js',
  'lis9',
  'add' ]
No command Identified
*/

//video 14, https://github.com/yargs/yargs, used for parsing
//npm install yargs@4.7.1 --save
//--save will update package.js and in future u only want to run npm install and it will download all required modules

const yargs=require('yargs');
const yargsArgv=yargs.argv;
//var command=yargsArgv._[0];//== var command=process.argv[2];
console.log('yargsArgv:',yargsArgv);
/*
process: [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\SabaNodeUploader\\practice\\npm_v13_InputFromUser\\app.js',
  'lis9',
  'add' ]

yargsArgv: { _: [ 'lis9', 'add' ], '$0': 'app.js' }
*/
/*
C:\SabaNodeUploader\practice\npm_v13_InputFromUser>node app.js lis9 --add:newnode
Jai Sh Raam
app.js started
Jai Sh Raam
notes.js started
process: [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\SabaNodeUploader\\practice\\npm_v13_InputFromUser\\app.js',
  'lis9',
  '--add:newnode' ]
No command Identified
yargsArgv: { _: [ 'lis9' ], 'add:newnode': true, '$0': 'app.js' }
No command Identified


C:\SabaNodeUploader\practice\npm_v13_InputFromUser>node app.js lis9 --add:newnode, --list=all
Jai Sh Raam
app.js started
Jai Sh Raam
notes.js started
process: [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\SabaNodeUploader\\practice\\npm_v13_InputFromUser\\app.js',
  'lis9',
  '--add:newnode,',
  '--list=all' ]
No command Identified
yargsArgv: { _: [ 'lis9' ],
  'add:newnode,': true,
  list: 'all',
  '$0': 'app.js' }
No command Identified

C:\SabaNodeUploader\practice\npm_v13_InputFromUser>node app.js lis9 --add:newnode --list=all
Jai Sh Raam
app.js started
Jai Sh Raam
notes.js started
process: [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\SabaNodeUploader\\practice\\npm_v13_InputFromUser\\app.js',
  'lis9',
  '--add:newnode',
  '--list=all' ]
No command Identified
yargsArgv: { _: [ 'lis9' ],
  'add:newnode': true,
  list: 'all',
  '$0': 'app.js' }
No command Identified



C:\SabaNodeUploader\practice\npm_v13_InputFromUser>node app.js lis9 --add:newnode --list="all node"
Jai Sh Raam
app.js started
Jai Sh Raam
notes.js started
process: [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\SabaNodeUploader\\practice\\npm_v13_InputFromUser\\app.js',
  'lis9',
  '--add:newnode',
  '--list=all node' ]
No command Identified
yargsArgv: { _: [ 'lis9' ],
  'add:newnode': true,
  list: 'all node',
  '$0': 'app.js' }
No command Identified

C:\SabaNodeUploader\practice\npm_v13_InputFromUser>

// with space instead of :
C:\SabaNodeUploader\practice\npm_v13_InputFromUser>node app.js lis9 --add nwnode --list="all node"
Jai Sh Raam
app.js started
Jai Sh Raam
notes.js started
process: [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\SabaNodeUploader\\practice\\npm_v13_InputFromUser\\app.js',
  'lis9',
  '--add',
  'nwnode',
  '--list=all node' ]
No command Identified
yargsArgv: { _: [ 'lis9' ], add: 'nwnode', list: 'all node', '$0': 'app.js' }
No command Identified

C:\SabaNodeUploader\practice\npm_v13_InputFromUser>
*/
/*
C:\SabaNodeUploader\practice\npm_v15_JSONToFile>node app.js add --title="BookMy Show" --body="Lucknow Central
 4 shows"
Jai Sh Raam
app.js started
Jai Sh Raam
notes.js started
yargsArgv: { _: [ 'add' ],
  title: 'BookMy Show',
  body: 'Lucknow Central 4 shows',
  '$0': 'app.js' }
Adding new note
addNoteMethod: BookMy Show Lucknow Central 4 shows
*/
if (command==='add'){
	console.log('Adding new note');
	notes.addNote(yargsArgv.title,yargsArgv.body);
					/*
					C:\SabaNodeUploader\practice\npm_v13_InputFromUser>node app.js add --title=Secret --body="This is scret body"

				Jai Sh Raam
				app.js started
				Jai Sh Raam
				notes.js started
				process: [ 'C:\\Program Files\\nodejs\\node.exe',
				  'C:\\SabaNodeUploader\\practice\\npm_v13_InputFromUser\\app.js',
				  'add',
				  '--title=Secret',
				  '--body=This is scret body' ]
				Adding new note
				yargsArgv: { _: [ 'add' ],
				  title: 'Secret',
				  body: 'This is scret body',
				  '$0': 'app.js' }
				Adding new note
				Adding Note Secret This is scret body

					*/
}else if (command==='list'){
	console.log('Listing all Notes');
}else if (command === 'read'){
	console.log('Reading note');
}else if (command === 'remove'){
	console.log('Removing note');
}else{
	console.log("No command Identified");
}