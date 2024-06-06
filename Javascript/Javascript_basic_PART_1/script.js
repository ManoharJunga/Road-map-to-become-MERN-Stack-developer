// 1. Logging a Message to the Console
// This statement logs the message "Hello, World!" to the browser's console.
console.log('Hello, World!');

// 2. Declaring and Logging a Variable
// This statement declares a variable 'js' and assigns it the value "amazing", then logs it to the console.
let js = "amazing";
console.log(js);

// 3. Performing a Simple Calculation
// This statement calculates the sum of 20, 1, 12, and 1, and logs the result to the console.
console.log(20 + 1 + 12 + 1);

// Variable Assignments and Arithmetic Operations
let x, y;
x = 10;
y = 20;
let c = '56';

console.log((x + y) - 56);
// (x + y) - 56: Calculates the sum of x and y, then subtracts 56, resulting in -26.

console.log(x + y + c);
// x + y + c: Concatenates the sum of x and y with the string '56', resulting in the string '3056'.

console.log(c + x + y);
// c + x + y: Concatenates the string '56' with the string representations of x and y, resulting in the string '561020'.

// == and === Comparison Operators
// In JavaScript, == and === are comparison operators used to compare values. They have different behaviors:

// == (Equality Operator):
// The == operator compares the values on both sides and returns true if they are equal, regardless of their data types. If the values are different types, JavaScript will attempt to convert one or both values to a common type before comparison.
console.log(5 == '5'); // true, because the values are equal after type coercion
console.log(0 == false); // true, because both 0 and false are falsy values
console.log(null == undefined); // true, because both null and undefined are equal in value but different types

// === (Strict Equality Operator):
// The === operator, also known as the strict equality operator, compares both the values and the types of the operands. It returns true only if the values are equal and have the same data type.
console.log(5 === '5'); // false, because the values are of different types
console.log(0 === false); // false, because they have different types
console.log(null === undefined); // false, because they have different types

// Using strict equality (===) is generally recommended because it avoids unexpected behavior that can occur due to type coercion. It ensures that both the values and types are identical for the comparison to evaluate to true.

// Example of a leap year check using a prompt (commented out for non-browser environments)
/*
const year = prompt("Enter the year");
if (year % 4 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}
*/

// Bitwise Operators
let comp = 10;
console.log(~comp);        // Bitwise NOT operator
console.log(comp << 1);    // Bitwise left shift operator
console.log(comp >> 1);    // Bitwise right shift operator
console.log(comp >>> 1);   // Bitwise zero-fill right shift operator

// Data Types
let JavaScript = true;
console.log(JavaScript);             // Logs: true
console.log(typeof JavaScript);      // Logs: boolean
console.log(typeof "JavaScript");    // Logs: string
console.log(typeof 10);              // Logs: number

let javascriptFun = "manohar";
console.log(typeof javascriptFun);   // Logs: string

let year;
console.log(typeof year);            // Logs: undefined

year = 1919;
console.log(typeof year);            // Logs: number

// Loop Example
let text = " ";
for (let i = 1; i <= 10; i++) {
    text += i + " ";
}
console.log(text);

// Switch Case Example using prompt (commented out for non-browser environments)
/*
let i = prompt("Enter any number 1 2 3");
let number = Number(i);
switch (number) {
    case 1: alert('1'); break;
    case 2: alert('2'); break;
    case 3: alert('3'); break;
    default: alert('default'); break;
}
*/

// let, const, var
let age = 30;
age = 31;

const birthYear = 2003;
// birthYear = 2002; // This line would cause an error because birthYear is a constant

var job = 'programmer';
job = 'teacher';

let lastName1 = "manohar";
console.log(lastName1);

// Basic Operators
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

// Comparison Operators
console.log(ageJonas > ageSarah);     // Logs: true
console.log(ageJonas >= 18);          // Logs: true
