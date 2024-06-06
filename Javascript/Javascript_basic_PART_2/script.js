//Functions

function logger() {
    console.log("hello world!");
}

//calling / running / invoking function
logger();
logger();
logger();

// function fruitJuice(apples, oranges){
//     console.log(`juice: ${apples} apples and ${oranges} oranges.`);
// }

// fruitJuice(2, 3);



// Function declarations Vs Expressions

//Function declarations

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(2003);

//Function Expressions

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2003);

console.log(age1, age2);


//Arrow Functions
//Shorter Syntax for Function Declarations:
//Arrow functions provide a concise syntax for declaring functions, especially when the function body is a single statement.

const calcAge3 = birthYear => 2037 - birthYear;
const ag3 = calcAge3(2003);
console.log(ag3);


//function calling another function 

const cutPieces = function (fruit) {
    return fruit * 4;
};
const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
};
console.log(fruitProcessor(2, 3));


//Introduction to Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'John';
console.log(friends);
friends.push("jack"); // pushes new element in a array
console.log(friends);
friends.shift(); //removes starting element in a array
console.log(friends);
friends.unshift("jack"); // pushes new from the start of a array
console.log(friends);
friends.pop(); //removes starting element in a array
console.log(friends);

// Introduction to Objects

//Array:
//Uses square brackets [].
//Stores a collection of elements that are ordered and indexed by numbers (starting from 0).

const jonasArrays = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

// Object:
// Uses curly braces {}.
// Stores data as key-value pairs, where each value is associated with a unique key (property name).

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName) // prints the last name


console.log(jonas.lastName);
console.log(jonas['lastName']);
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// console.log(jonas. 'last' + nameKey)

//Object Methods

