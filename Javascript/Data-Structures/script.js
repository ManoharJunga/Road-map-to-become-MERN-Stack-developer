'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy', 
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic','Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours:{
        thu: {
            open: 12, 
            close: 22,
        },
        fri: {
            open: 11, 
            close: 23,
        },
        Sat: {
            open: 0,
            close: 24,
        }

        
    },
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

//Destructuring Array

const [x, y, z] = arr;
console.log(x, y, z);

let [ main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Destructuring variables
[main, secondary] = [secondary, main]
console.log(main, secondary);


// Receive 2 return values from a function
const [starter, mainCourse ] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring variables
const nested = [2, 4, [5, 6]];
// const [i,,j] = nested;
// console.log(i, j);

const [i,,[j,k]] = nested;
console.log(i, j, k);

const [p, q, r] = [8,9]
console.log(p,q,r);