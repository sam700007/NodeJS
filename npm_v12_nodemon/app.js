//https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525240?start=350
//exporting third party module, https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525242?start=0
console.log('Jai Sh Raam');
console.log('app.js started');

/*
//https://www.npmjs.com/package/nodemon
For use during development of a node.js based application.

nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

nodemon does not require any changes to your code or method of development. nodemon simply wraps your node application and keeps an eye on any files that have changed. Remember that nodemon is a replacement wrapper for node, think of it as replacing the word "node" on the command line when you run your script.

C:\SabaNodeUploader\practice\npm_v12_nodemon>npm install -g nodemon
C:\Users\arsingh\AppData\Roaming\npm\nodemon -> C:\Users\arsingh\AppData\Roaming\npm\node_modules\nodemon\bin
\nodemon.js
C:\Users\arsingh\AppData\Roaming\npm
`-- nodemon@1.12.1
  +-- chokidar@1.7.0
  | +-- anymatch@1.3.2
  | | +-- micromatch@2.3.11
  | | | +-- arr-diff@2.0.0
  | | | | `-- arr-flatten@1.1.0
  | | | +-- array-unique@0.2.1
  | | | +-- braces@1.8.5
  | | | | +-- expand-range@1.8.2
  | | | | | `-- fill-range@2.2.3
  | | | | |   +-- is-number@2.1.0
  | | | | |   +-- isobject@2.1.0
  | | | | |   +-- randomatic@1.1.7
  | | | | |   | +-- is-number@3.0.0
  | | | | |   | | `-- kind-of@3.2.2
  | | | | |   | `-- kind-of@4.0.0
  | | | | |   `-- repeat-string@1.6.1
  | | | | +-- preserve@0.2.0
  | | | | `-- repeat-element@1.1.2
  | | | +-- expand-brackets@0.1.5
  | | | | `-- is-posix-bracket@0.1.1
  | | | +-- extglob@0.3.2
  | | | +-- filename-regex@2.0.1
  | | | +-- kind-of@3.2.2
  | | | | `-- is-buffer@1.1.6
  | | | +-- object.omit@2.0.1
  | | | | +-- for-own@0.1.5
  | | | | | `-- for-in@1.0.2
  | | | | `-- is-extendable@0.1.1
  | | | +-- parse-glob@3.0.4
  | | | | +-- glob-base@0.3.0
  | | | | `-- is-dotfile@1.0.3
  | | | `-- regex-cache@0.4.4
  | | |   `-- is-equal-shallow@0.1.3
  | | |     `-- is-primitive@2.0.0
  | | `-- normalize-path@2.1.1
  | |   `-- remove-trailing-separator@1.1.0
  | +-- async-each@1.0.1
  | +-- glob-parent@2.0.0
  | +-- inherits@2.0.3
  | +-- is-binary-path@1.0.1
  | | `-- binary-extensions@1.11.0
  | +-- is-glob@2.0.1
  | | `-- is-extglob@1.0.0
  | +-- path-is-absolute@1.0.1
  | `-- readdirp@2.1.0
  |   +-- graceful-fs@4.1.11
  |   +-- readable-stream@2.3.3
  |   | +-- core-util-is@1.0.2
  |   | +-- isarray@1.0.0
  |   | +-- process-nextick-args@1.0.7
  |   | +-- safe-buffer@5.1.1
  |   | +-- string_decoder@1.0.3
  |   | `-- util-deprecate@1.0.2
  |   `-- set-immediate-shim@1.0.1
  +-- debug@2.6.9
  | `-- ms@2.0.0
  +-- es6-promise@3.3.1
  +-- ignore-by-default@1.0.1
  +-- lodash.defaults@3.1.2
  | +-- lodash.assign@3.2.0
  | | +-- lodash._baseassign@3.2.0
  | | | `-- lodash._basecopy@3.0.1
  | | +-- lodash._createassigner@3.1.1
  | | | +-- lodash._bindcallback@3.0.1
  | | | `-- lodash._isiterateecall@3.0.9
  | | `-- lodash.keys@3.1.2
  | |   +-- lodash._getnative@3.9.1
  | |   +-- lodash.isarguments@3.1.0
  | |   `-- lodash.isarray@3.0.4
  | `-- lodash.restparam@3.6.1
  +-- minimatch@3.0.4
  | `-- brace-expansion@1.1.8
  |   +-- balanced-match@1.0.0
  |   `-- concat-map@0.0.1
  +-- ps-tree@1.1.0
  | `-- event-stream@3.3.4
  |   +-- duplexer@0.1.1
  |   +-- from@0.1.7
  |   +-- map-stream@0.1.0
  |   +-- pause-stream@0.0.11
  |   +-- split@0.3.3
  |   +-- stream-combiner@0.0.4
  |   `-- through@2.3.8
  +-- touch@3.1.0
  | `-- nopt@1.0.10
  |   `-- abbrev@1.1.1
  +-- undefsafe@0.0.3
  `-- update-notifier@2.3.0
    +-- boxen@1.2.2
    | +-- ansi-align@2.0.0
    | +-- camelcase@4.1.0
    | +-- cli-boxes@1.0.0
    | +-- string-width@2.1.1
    | | +-- is-fullwidth-code-point@2.0.0
    | | `-- strip-ansi@4.0.0
    | |   `-- ansi-regex@3.0.0
    | +-- term-size@1.2.0
    | | `-- execa@0.7.0
    | |   +-- cross-spawn@5.1.0
    | |   | +-- lru-cache@4.1.1
    | |   | | +-- pseudomap@1.0.2
    | |   | | `-- yallist@2.1.2
    | |   | +-- shebang-command@1.2.0
    | |   | | `-- shebang-regex@1.0.0
    | |   | `-- which@1.3.0
    | |   |   `-- isexe@2.0.0
    | |   +-- get-stream@3.0.0
    | |   +-- is-stream@1.1.0
    | |   +-- npm-run-path@2.0.2
    | |   | `-- path-key@2.0.1
    | |   +-- p-finally@1.0.0
    | |   `-- strip-eof@1.0.0
    | `-- widest-line@1.0.0
    |   `-- string-width@1.0.2
    |     +-- code-point-at@1.1.0
    |     +-- is-fullwidth-code-point@1.0.0
    |     | `-- number-is-nan@1.0.1
    |     `-- strip-ansi@3.0.1
    |       `-- ansi-regex@2.1.1
    +-- chalk@2.3.0
    | +-- ansi-styles@3.2.0
    | | `-- color-convert@1.9.1
    | |   `-- color-name@1.1.3
    | +-- escape-string-regexp@1.0.5
    | `-- supports-color@4.5.0
    |   `-- has-flag@2.0.0
    +-- configstore@3.1.1
    | +-- dot-prop@4.2.0
    | | `-- is-obj@1.0.1
    | +-- make-dir@1.1.0
    | | `-- pify@3.0.0
    | +-- unique-string@1.0.0
    | | `-- crypto-random-string@1.0.0
    | `-- write-file-atomic@2.3.0
    |   +-- imurmurhash@0.1.4
    |   `-- signal-exit@3.0.2
    +-- import-lazy@2.1.0
    +-- is-installed-globally@0.1.0
    | +-- global-dirs@0.1.1
    | | `-- ini@1.3.4
    | `-- is-path-inside@1.0.0
    |   `-- path-is-inside@1.0.2
    +-- is-npm@1.0.0
    +-- latest-version@3.1.0
    | `-- package-json@4.0.1
    |   +-- got@6.7.1
    |   | +-- create-error-class@3.0.2
    |   | | `-- capture-stack-trace@1.0.0
    |   | +-- duplexer3@0.1.4
    |   | +-- is-redirect@1.0.0
    |   | +-- is-retry-allowed@1.1.0
    |   | +-- lowercase-keys@1.0.0
    |   | +-- timed-out@4.0.1
    |   | +-- unzip-response@2.0.1
    |   | `-- url-parse-lax@1.0.0
    |   |   `-- prepend-http@1.0.4
    |   +-- registry-auth-token@3.3.1
    |   | `-- rc@1.2.2
    |   |   +-- deep-extend@0.4.2
    |   |   +-- minimist@1.2.0
    |   |   `-- strip-json-comments@2.0.1
    |   `-- registry-url@3.1.0
    +-- semver-diff@2.1.0
    | `-- semver@5.4.1
    `-- xdg-basedir@3.0.0

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\nodemon\node_modules\chokidar\n
ode_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin",
"arch":"any"} (current: {"os":"win32","arch":"x64"})

C:\SabaNodeUploader\practice\npm_v12_nodemon>

*/
console.log('dynamic action'+7+9);
/*

C:\SabaNodeUploader\practice\npm_v12_nodemon>nodemon app.js
[nodemon] 1.12.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
Jai Sh Raam
app.js started
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Jai Sh Raam
app.js started
dynamic action79
[nodemon] clean exit - waiting for changes before restart

*/
