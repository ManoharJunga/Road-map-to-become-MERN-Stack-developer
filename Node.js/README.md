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