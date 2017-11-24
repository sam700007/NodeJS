//https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525240?start=350
//exporting third party module, https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525242?start=0
console.log('Jai Sh Raam');
console.log('app.js started');

//https://lodash.com/docs/4.17.4
/*npm material
C:\SabaNodeUploader\practice>npm -v
3.10.10

...............................................................

C:\SabaNodeUploader\practice>npm -info

Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, edit, explore, get,
    help, help-search, i, init, install, install-test, it, link,
    list, ln, login, logout, ls, outdated, owner, pack, ping,
    prefix, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, tag, team, test, tst, un, uninstall,
    unpublish, unstar, up, update, v, version, view, whoami

npm <cmd> -h     quick help on <cmd>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    C:\Users\arsingh\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@3.10.10 C:\Program Files\nodejs\node_modules\npm

...............................................................

C:\SabaNodeUploader\practice>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (practice) Arun Singh
Sorry, name can only contain URL-friendly characters and name can no longer contain capital letters.
name: (practice) Arun
Sorry, name can no longer contain capital letters.
name: (practice) arun
version: (1.0.0) 1
Invalid version: "1"
version: (1.0.0) 1.0
Invalid version: "1.0"
version: (1.0.0) 1.0.0
description: first Program
entry point: (app.js)
test command: na
git repository: na
keywords: na
author: shraam
license: (ISC) na
Sorry, license should be a valid SPDX license expression (without "LicenseRef"), "UNLICENSED", or "SEE LICE
E IN <filename>".
license: (ISC) isc
Sorry, license should be a valid SPDX license expression (without "LicenseRef"), "UNLICENSED", or "SEE LICE
E IN <filename>" and license is similar to the valid expression "ISC".
license: (ISC) ISC
About to write to C:\SabaNodeUploader\practice\package.json:

{
  "name": "arun",
  "version": "1.0.0",
  "description": "first Program",
  "main": "app.js",
  "scripts": {
    "test": "na"
  },
  "repository": {
    "type": "git",
    "url": "na"
  },
  "keywords": [
    "na"
  ],
  "author": "shraam",
  "license": "ISC"
}


Is this ok? (yes) y

C:\SabaNodeUploader\practice>


---it createas a file name pakage.json in base dir

...................installation of npm modules........................
//help link, https://www.npmjs.com/package/lodash, https://lodash.com/docs/4.17.4
C:\SabaNodeUploader\practice>npm install lodash --save
arun@1.0.0 C:\SabaNodeUploader\practice
`-- lodash@4.17.4

//it will result into download of lodash in base dir and update of above package.json with this new module
//as, C:\SabaNodeUploader\practice\node_modules\lodash
"dependencies": {
    "lodash": "^4.17.4"
  }
  
//since lodash is installed now, lets use it
*/
//https://lodash.com/docs/4.17.4
const _ = require('lodash');

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

let arr3 = _.chunk(['a', 'b', 'c', 'd'], 3);
console.log(arr3);

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);

console.log(_.isString('ShRaam'));//true
console.log(_.isString(false));//false since boolean
/*
To share with friend or put on github, dlete module folder(for git just ignore it)
and use existing program run
npm install
it will read package.json and install all required modules again.
*/
