//https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525240?start=350
//exporting third party module, https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525242?start=0
console.log('Jai Sh Raam');
console.log('app.js started');

const fs=require('fs');
const os=require('os');
const _ = require('lodash');

const notes=require('./f1/notes');



var command=process.argv[2];


//video 14, https://github.com/yargs/yargs, used for parsing
//npm install yargs@4.7.1 --save
//--save will update package.js and in future u only want to run npm install and it will download all required modules

const yargs=require('yargs');
const yargsArgv=yargs.argv;
//var command=yargsArgv._[0];//== var command=process.argv[2];
console.log('yargsArgv:',yargsArgv);

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
					
}else if (command==='list'){
	//C:\SabaNodeUploader\practice\npm_v15_JSONToFile>node app.js list
	console.log('Listing all Notes');
	notes.listNote();
}else if (command === 'read'){
	//C:\SabaNodeUploader\practice\npm_v15_JSONToFile>node app.js read  --title="Book3y Show"
	console.log('Reading note');
	notes.readNote(yargsArgv.title);
}else if (command === 'remo'){
	//C:\SabaNodeUploader\practice\npm_v15_JSONToFile>node app.js remo  --title="Book3y Show"
	console.log('Removing note');
	notes.deleteNote(yargsArgv.title);
}else{
	console.log("No command Identified");
}