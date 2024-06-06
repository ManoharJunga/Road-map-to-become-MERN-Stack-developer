# JavaScript Basics

This project contains the basic setup for learning JavaScript from scratch. It includes an HTML file that links to a JavaScript file, allowing you to practice and understand fundamental JavaScript concepts.

## Project Structure

- `index.html`: The main HTML file that links to the JavaScript file.
- `script.js`: The JavaScript file where you can write and execute your JavaScript code.

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Edge)
- A code editor (e.g., VS Code, Sublime Text, Atom)

### Instructions

1. **Clone the Repository**


```bash
   git clone https://github.com/ManoharJunga/Road-map-to-become-MERN-Stack-developer/tree/main/Javascript/Javascript_basic.git
   cd javascript_basic
```

2. Open the Project in Your Code Editor

Open the cloned repository folder in your preferred code editor.

3. Run the Project

Open the index.html file in your web browser by either:

Double-clicking the index.html file, or
Opening the file from your code editor's terminal with a browser (e.g., open index.html on MacOS, start index.html on Windows).


`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Basics</title>
</head>
<body>
    <h1>Welcome to JavaScript Basics</h1>
    <p>Open the console to see the JavaScript output.</p>
</body>
<script src="./script.js"></script>
</html>

```
# Now after completing part 1 we are now diving into the last part for the javascript basics.

**Functions**

In JavaScript, functions are blocks of code that can be executed multiple times with different inputs. They are useful for organizing code, reducing repetition, and making code more reusable.

### Function Declarations

Function declarations are defined using the `function` keyword followed by the function name and parameters in parentheses. For example:
```
function logger() {
    console.log("hello world!");
}
```
### Function Expressions

Function expressions are defined by assigning a function to a variable. For example:
```
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
```
### Arrow Functions

Arrow functions are a concise way to define functions, especially when the function body is a single statement. For example:
```
const calcAge3 = birthYear => 2037 - birthYear;
```
### Function Calling Another Function

Functions can call other functions to perform complex tasks. For example:
```
const cutPieces = function (fruit) {
    return fruit * 4;
};
const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
};
```
**Arrays**

Arrays are data structures that store a collection of elements that are ordered and indexed by numbers (starting from 0). They are defined using square brackets `[]`.

### Array Methods

Arrays have several methods that can be used to manipulate them, such as:

* `push()`: adds a new element to the end of the array
* `shift()`: removes the first element of the array
* `unshift()`: adds a new element to the beginning of the array
* `pop()`: removes the last element of the array

For example:
```
const friends = ['Michael', 'Steven', 'Peter'];
friends.push("jack"); // adds a new element to the end of the array
friends.shift(); // removes the first element of the array
friends.unshift("jack"); // adds a new element to the beginning of the array
friends.pop(); // removes the last element of the array
```
**Objects**

Objects are data structures that store data as key-value pairs, where each value is associated with a unique key (property name). They are defined using curly braces `{}`.

### Object Properties

Objects have properties that can be accessed using dot notation or bracket notation. For example:
```
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName); // prints the last name
console.log(jonas['lastName']); // prints the last name
```
This repository provides a basic understanding of JavaScript functions and data structures, including arrays and objects. It covers function declarations, function expressions, arrow functions, and function calling another function, as well as array methods and object properties.