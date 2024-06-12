# NODE.JS

## What is Node.js?

- Node.js is an open-source, cross-platform JavaScript runtime environment

- Open source - source code is publicly available for sharing and modification

- Cross platform - Available on Mac, Windows and Linux
JavaScript runtime environment - ?

## Why learn Node.js?
• Build end-to-end JavaScript applications
• A number of major companies like LinkedIn, Netflix, PayPal have all migrated from other backend technologies to Node.js
• Full stack development is one of the most sought out skill sets by companies
• Huge community support

## What can you build with Node.js?
• Traditional websites
• Backend services like APIs
• Real-time applications
• Streaming services
• CLI tools
• Multiplayer games
Node.js allows you to build complex and powerful applications

## Browser vs Node.js

In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. You don't have the document, window and all the other objects that are provided by the browser.

In the browser, we don't have all the nice APls that Node.js provides through its modules. For example the filesystem access functionality.

With Node.js you control the environment.

With a browser, you are at the mercy of what the users choose.

## Modules
A module is an encapsulated and reusable chunk of code that has its own context
In Node.js, each file is treated as a separate module
Types of Modules
1. Local modules - Modules that we create in our application

**add.js**
```js
const add = (a, b) => {
  return a + b;
}

module.exports = add;
```

**index.js**
```js
console.log("hello From index.js");
const add = require('./add'); 
const sum = add(1,2); 
console.log(sum);
```

Explanation:

In `add.js`, we define the `add` function and export it using `module.exports = add;`. This makes the `add` function available to be imported in other files.

In `index.js`, we require the `add` function from `add.js` using `const add = require('./add');`. We then use the `add` function to calculate the sum of 1 and 2, and log the result to the console.

### Local Modules Summary
In node.js, each file is a module that is isolated by default To load a module into another file, we use the require function When index.js is executed, the code in the module is also executed
If the file we are requiring is a javascript file, we can skip specifying the extension and node.js will infer it on our behalf

### export module

**add.js**
```js
const add = (a, b) => {
    return a+b;
};
module.exports = add;
```

**index.js**
```js
console.log("hello From index.js");
const add = require('./add');
const sum = add(1,2);
console.log(sum);
```

In `add.js`, we define the `add` function and export it using `module.exports = add;`.

In `index.js`, we require the `add` function from `add.js` using `const add = require('./add');`, and then use it to calculate the sum of 1 and 2, logging the result to the console.

2. Built-in modules - Modules that Node.js ships with out of the box
3. Third party modules - Modules written by other developers that we can use in our application.



## CommonJS
- CommonJS is a standard that states how a module should be structured and shared
- Node.js adopted CommonS when it started out and is what you will see in code bases

## Module Wrapper

-  module in node.js gets wrapped in an lIFE before being loaded
 - IIFE helps keep top-level variables scoped to the module rather than the global object
- The lIFE that wraps every module contains 5 parameters which are pretty important for the functioning of a module

## Asynchronous JavaScript

JavaScript is a synchronous, blocking, single-threaded language

Synchronous
If we have two functions which log messages to the console, code executes top down, with only one line executing at any given time

```js
function A() {
console. log ('A' )
}
function B( ) {
console. log ('B' )
}
A ( )
B( )
// -> Logs A and then B
```

**Reading a File in Node.js**
Node.js provides the `fs` (file system) module for working with the file system. In this example, we'll demonstrate how to read a file using both synchronous and asynchronous methods.

**Synchronous Reading**

The synchronous method of reading a file is `fs.readFileSync()`. Here's an example:
```js
const fs = require("node:fs");
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);
```
In this example, we first import the `fs` module using `const fs = require("node:fs");`. We then call `fs.readFileSync()` with the file path `./file.txt` and the encoding `"utf-8"`. This method will block the execution of the program until the file is read, and then return the contents of the file as a string. We store the result in the `fileContents` variable and log it to the console.

**Asynchronous Reading**

The asynchronous method of reading a file is `fs.readFile()`. Here's an example:
```js
fs.readFile('./file.txt',"utf-8" ,(error, data) => {
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
})
```
In this example, we call `fs.readFile()` with the file path `./file.txt`, the encoding `"utf-8"`, and a callback function. The callback function takes two arguments: `error` and `data`. If there is an error reading the file, it will be passed to the callback function in the `error` argument. If the file is read successfully, the contents of the file will be passed to the callback function in the `data` argument.

In the body of the callback function, we first check if there is an error by checking if `error` is truthy. If there is an error, we log it to the console. If there is no error, we log the contents of the file to the console.

Using the asynchronous method allows the program to continue executing while the file is being read, which can be more efficient for larger files or for programs that need to perform other tasks while the file is being read.

## How the web works
Computers connected to the internet are called clients and servers
Clients are internet-connected devices such as computers or mobile phones along with web-accessing software available on those devices such as a web browser
Servers on the other hand are computers that store web pages, sites, or apps

## HTTP and Node
We can create a web server using Node.js
Node.js has access to operating system functionality like networking
Node has an event loop to run tasks asynchronously and is perfect for creating web servers that can simultaneously handle large volumes of requests
The node server we create should still respect the HTTP format
The HTTP module allows creation of web servers that can transfer data over
НТТР


**Example 1: Plain Text Response**

This example creates an HTTP server that responds with a plain text message "Hello World!".
```js
const http = require("http"); // not "node:http", just "http"

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!");
});
server.listen(3001, () => {
    console.log("server running on port 3001");
})
```
Here's what's happening:

* We create an HTTP server using `http.createServer()`.
* The callback function is called for each incoming request.
* We set the HTTP response code to 200 (OK) using `res.writeHead()`, and specify the `Content-Type` header as `text/plain` to indicate that the response body contains plain text.
* We then end the response with `res.end()`, passing the string "Hello World!" as the response body.

**Example 2: JSON Response**

This example creates an HTTP server that responds with a JSON object.
```js
const http = require("http"); // not "node:http", just "http"

const server = http.createServer((req, res) => {
    const superHero = {
        firstName: "Bruce",
        lastName: 'Wayne',
    }
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(superHero));
});
server.listen(3001, () => {
    console.log("server running on port 3001");
})
```
Here's what's happening:

* We create an HTTP server using `http.createServer()`.
* The callback function is called for each incoming request.
* We define a JSON object `superHero` with two properties: `firstName` and `lastName`.
* We set the HTTP response code to 200 (OK) using `res.writeHead()`, and specify the `Content-Type` header as `application/json` to indicate that the response body contains JSON data.
* We then end the response with `res.end()`, passing the JSON object as a string using `JSON.stringify()`.

**Example 3: HTML Response**

This example creates an HTTP server that responds with an HTML file.
```js
const http = require("http"); // not "node:http", just "http"
const fs = require("fs"); // not "node:fs", just "fs"

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    const html = fs.readFileSync("./index.html", "utf-8");
    res.end(html);
});
server.listen(3001, () => {
    console.log("server running on port 3001");
})
```
Here's what's happening:

* We create an HTTP server using `http.createServer()`.
* The callback function is called for each incoming request.
* We set the HTTP response code to 200 (OK) using `res.writeHead()`, and specify the `Content-Type` header as `text/html` to indicate that the response body contains HTML data.
* We read the contents of an HTML file `index.html` using `fs.readFileSync()` and store it in the `html` variable.
* We then end the response with `res.end()`, passing the HTML content as a string.
