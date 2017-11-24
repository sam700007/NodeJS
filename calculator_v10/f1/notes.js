console.log('Jai Sh Raam');
console.log('notes.js started');

module.exports.age=32;

//converted annonmous function to error function
module.exports.addNote = ()=>{
	console.log('Inside addNote function');
	return 'New Note';
};

module.exports.add = (a, b)=>{
	console.log('Inside add function');
	return a+b;
};

module.exports.sub = (a, b)=>{
	console.log('Inside sub function');
	return a-b;
};