/*It will work on npm 8 or above
so first checj npm version
npm -v
If need to upgrade npm, then use
npm install npm -g
or
npm upgrade
*/
var myAddress = {
	street:'a45',city:'sre'
}
debugger;
var person = {
	name:'shraam', age:21, address:myAddress
}
console.log(person);
console.log(person.address.city);
/*
to simply run node program just do
node person.js
but for debugging
node inspect person.js

*/

//C:\Users\arsingh\AppData\Roaming\npm;C:\maven\apache-maven-3.5.0\bin;D:\tools\javalib\jdk1.8.0_31\bin\