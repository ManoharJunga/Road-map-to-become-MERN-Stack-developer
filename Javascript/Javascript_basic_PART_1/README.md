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
# Now Step by Step I will be explaining how javascript can be used.

### Logging a Message to the Console:

```javascript
console.log('Hello, World!');
```
This statement logs the message "Hello, World!" to the browser's console.

### Declaring and Logging a Variable:

```javascript
let js = "amazing";
console.log(js);
```
This statement declares a variable 'js' and assigns it the value "amazing", then logs it to the console.

### Performing a Simple Calculation:

```javascript
console.log(20 + 1 + 12 + 1);
```
This statement calculates the sum of 20, 1, 12, and 1, and logs the result to the console.

### Variable Manipulations

```javascript
let x, y;
x = 10;
y = 20;
let c = '56';

console.log((x + y) - 56); // -26
console.log(x + y + c);    // '3056'
console.log(c + x + y);    // '561020'

```
- `(x + y) - 56`: Calculates the sum of `x` and `y`, then subtracts `56`, resulting in `-26`.
- `x + y + c`: Concatenates the sum of `x` and `y` with the string `'56'`, resulting in the string `'3056'`.
- `c + x + y`: Concatenates the string `'56'` with the string representations of `x` and `y`, resulting in the string `'561020'`.


### Comparison Operators:
### Equality Operator (==):

```javascript
console.log(5 == '5'); // true
console.log(0 == false); // true
console.log(null == undefined); // true
```

The `==` operator compares values regardless of their data types.

### Strict Equality Operator (===)

```javascript
console.log(5 === '5'); // false
console.log(0 === false); // false
console.log(null === undefined); // false
The === operator compares both values and types.
```

Using strict equality (`===`) is generally recommended because it avoids unexpected behavior that can occur due to type coercion. It ensures that both the values and types are identical for the comparison to evaluate to true.

- Use `==` for loose equality comparisons where type conversion is acceptable.
- Use `===` for strict equality comparisons where both value and type must match. This is usually the preferred option to avoid unexpected behavior.

### Leap Year Check

```javascript
const year = prompt("Enter the year");

if (year % 4 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}
```
This code checks if the entered year is a leap year.

### Bitwise Operators

```javascript
let comp = 10;
console.log(~comp); // Bitwise NOT operator
console.log(comp << 1); // Left shift operator
console.log(comp >> 1); // Right shift operator
console.log(comp >>> 1); // Unsigned right shift operator
```

Bitwise operators perform operations at the bit level.

### Data Types

```javascript
let JavaScript = true; // Boolean
console.log(JavaScript); // true
console.log(typeof JavaScript); // "boolean"
console.log(typeof "JavaScript"); // "string"
console.log(typeof 10); // "number"

let javascriptFun = "manohar"; // String
console.log(typeof javascriptFun); // "string"

let year; // Undefined
console.log(typeof year); // "undefined"

year = 1919; // Number
console.log(typeof year); // "number"
```
JavaScript supports various data types including boolean, string, number, and undefined.

### For Loop Example

```javascript
let text = "";
for (let i = 1; i <= 10; i++) {
    text += i + " ";
}
console.log(text);

```
This loop concatenates numbers from 1 to 10 into a string and logs it.

### Switch Statement Example

```javascript
let i = prompt("Enter any number 1 2 3");
let number = Number(i);
switch (number) {
    case 1: alert('1'); break;
    case 2: alert('2'); break;
    case 3: alert('3'); break;
    default: alert('default'); break;
}


```

This switch statement alerts the user based on the number input.

### Variable Declarations: let, const, var

```javascript
let age = 30;
age = 31;

const birthYear = 2003;
// birthYear = 2002; // This will cause an error

var job = 'programmer';
job = 'teacher';

let lastName1 = "manohar";
console.log(lastName1);

```

- `let`: Declares a block-scoped variable that can be reassigned.
- `const`: Declares a block-scoped variable that cannot be reassigned.
- `var`: Declares a function-scoped or globally-scoped variable.


### Basic Operators

```javascript
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + lastName);

let x1 = 10 + 5; // 15
x1 += 10; // x = x + 10 = 25
x1 *= 4; // x = x * 4 = 100
x1++; // x = x + 1 = 101
x1--; // x = x - 1 = 100
x1--; // x = x - 1 = 99
console.log(x1);

```
- Basic arithmetic and assignment operators.
- String concatenation with the `+` operator.

### Comparison Operators

```javascript
console.log(ageJonas > ageSarah);
console.log(ageJonas >= 18);
```

- `>` and `>=`: Greater than and greater than or equal to operators.