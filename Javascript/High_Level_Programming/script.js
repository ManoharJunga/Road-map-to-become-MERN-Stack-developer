//Scoping in Practice


// 'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     function printAge(){
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//         }
//         console.log(millenial);
//     }
//     printAge();
// }
// const firstName = 'John';
// calcAge(1996)

// Destructuring of Array

const restaurant = {
    name: 'Classico Italian',
    location: 'Via Angelo Tavanti 23',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
}


const arr = [2,3,4];
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);