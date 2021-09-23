//! Importing Nodejs Core Modules
// const fs = require('fs');
// //? fs = FileSystem module, require will load the fs module and we will assign that to a variable called fs

// fs.writeFileSync('notes.txt', 'My name is Nick.')
// //? writeFileSync is the syncronous version of a method that creates a file. The first argument is the file name while the second argument is the content.

// fs.appendFileSync('notes.txt', ' This text has been appended')

//! Importing Your Own Files
//? Each file (or Module) has it's OWN scope, so to use one file's variables in another file, we will need to export the variable
const getNotes = require('./notes');

getNotes();