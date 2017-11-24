//converting object to string
/*
var obj={
	name:'ShRaam',
	class:10
};

var stringObj=JSON.stringify(obj);

console.log(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/

//converting string to object
/*
var personString='{"name":"ShRaam","age":25}';
var person = JSON.parse(personString);

console.log(person.name);
console.log(person.age);
*/

//Now writing into a file reading a string and converting back to JSON
const fs=require('fs');

var originalNote={
	title:'MyTitle',
	body:'Body of Note'
};

//fs.writeFileSync('notes.js',originalNote);//it will store, [object Object] i.e not required
//correct way is to first convert object to JSON
var stringOriginalNote=JSON.stringify(originalNote);
fs.writeFileSync('notes.js',stringOriginalNote);//it will result into, {"title":"MyTitle","body":"Body of Note"}
//after multiple run also, only single object will remain there but write will happen

//now how to read string object from file
var noteFromFile=fs.readFileSync('notes.js');
console.log(noteFromFile);/*
<Buffer 7b 22 74 69 74 6c 65 22 3a 22 4d 79 54 69 74 6c 65 22 2c 22 62 6f 64 79 22 3a 22 42 6f
 20 4e 6f 74 65 22 7d>
*/

var noteJSON = JSON.parse(noteFromFile);
console.log(noteJSON);//{ title: 'MyTitle', body: 'Body of Note' }
console.log(noteJSON.title);//MyTitle
