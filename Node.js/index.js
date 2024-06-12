// console.log("hello From index.js");
// const add = require('./add');

// const sum = add(1,2);
// console.log(sum);

// require("./superman");
// require("./batman");

// Creating a node server 


// const http = require("node:http");

// const server = http.createServer((req, res)=>{

//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("Hello World!");
// });
// server.listen(3001, () => {
//     console.log("server running on port 3001");
// })

// JSON Response

// const http = require("node:http");
// const server = http.createServer((req, res)=>{
//     const superHero = {
//         firstName: "Bruce",
//         lastname: 'Wayne',
//     }
//     res.writeHead(200, {"Content-Type": "application/json"});
//     res.end(JSON.stringify(superHero));
// });
// server.listen(3001, () => {
//     console.log("server running on port 3001");
// })

// HTML Response

// const http = require("node:http");
// const fs = require("node:fs");
// const server = http.createServer((req, res)=> {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     const html = fs.readFileSync("./index.html", "utf-8");
//     res.end(html);
// });
// server.listen(3001, () => {
//     console.log("server running on port 3001");
// })