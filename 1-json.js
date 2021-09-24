const fs = require('fs')
// const book = {
//   title: 'Berserk',
//   author: 'Kentaro Miura'
// }


// const stringJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', stringJSON)

// //?NOTE remember writeFileSync will create a file in the current directory. arg1 = filename, arg2 = content
// //?NOTE SO this creates a file called 1-json.json with our stringified JSON book in it 

// const dataBuffer = fs.readFileSync('1-json.json')
// //?NOTE allows us to read a file and takes a single argument, the name of the file
// console.log(dataBuffer);
// //? NOTE a string is not returned from readfile, a buffer is, which is a war for nodejs to represent binary data 
// //? to get the string back we can use the toString() method
// const dataJSON = dataBuffer.toString()
// console.log(dataJSON);

// const data = JSON.parse(dataJSON);
// //? here we are saving our parsed data information from our JSON string that we read from our file into a variable called data

// console.log(data.title);


//! CHALLENGE

//! 1) Load and parse the JSON data
const data = JSON.parse(fs.readFileSync('1-json.json').toString())

//! 2) Change the name and age property using your info
data.name = 'Nick';
data.age = 30;

//! 3) Stringify the changed object and overwrite the original data
fs.writeFileSync('1-json.json', JSON.stringify(data))

//! 4) Test your work by viewing data in the JSON file
// ✅