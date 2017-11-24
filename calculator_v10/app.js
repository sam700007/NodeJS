//https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525240?start=350
//exporting third party module, https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525242?start=0
console.log('Jai Sh Raam');
console.log('app.js started');


const notes=require('./f1/notes');

console.log('Age Exported : '+notes.age);

var res=notes.addNote();
console.log(res);
console.log('----My Calculator-----');
var resAdd=notes.add(5,7);
console.log('Addition of 5 + 7 = '+resAdd);
console.log(notes.sub(7,9));