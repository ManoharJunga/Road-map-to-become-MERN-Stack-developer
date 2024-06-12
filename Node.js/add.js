// Local Modules

// const add = (a, b) => {
//     return a + b;
// }
// const sum = add(1,2);
// console.log(sum);


// Modules Exports

// const add = (a, b) => {
//     return a+b;
// };
// module.exports = add;


//reading File Synchronously
const fs = require("node:fs");
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);


//reading File Asynchronously
fs.readFile('./file.txt',"utf-8" ,(error, data) => {
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
})