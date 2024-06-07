// DOM Manipulation


{/*
// GetElementById()
// This method selects an HTML element based on its unique ID attribute.
// It returns the first element with the specified ID.
const title = document.getElementById('main-heading');
console.log(title);  // Logs the element with id 'main-heading' to the console.

// GetElementsByClassName()
// This method selects all HTML elements that have the specified class name.
// It returns an HTMLCollection (which is similar to an array but not exactly an array).
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);  // Logs a collection of elements with the class 'list-items'.

// GetElementsByTagName()
// This method selects all HTML elements with the specified tag name.
// It returns an HTMLCollection.
const tagname = document.getElementsByTagName('li');
console.log(tagname);  // Logs a collection of 'li' (list item) elements.

// querySelector()
// This method returns the first element that matches the specified CSS selector.
// If no matches are found, it returns null.
const container = document.querySelector('div');
console.log(container);  // Logs the first 'div' element found in the document.

// querySelectorAll()
// This method returns all elements that match the specified CSS selector.
// It returns a NodeList, which is similar to an array and can be iterated over.
const allcontainer = document.querySelectorAll('div');
console.log(allcontainer);  // Logs a NodeList of all 'div' elements found in the document.


*/}


// Styling An Element with a color

// const title = document.querySelector('#main-heading');
// title.style.color =  'red';
// console.log(title);

// Styling font size

// const listItems = document.querySelectorAll('.list-items');


// for(let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '100px';
// }
// console.log(listItems);

// const firstlist = document.querySelector(".list-items");

// console.log(firstlist.innerHTML);
// console.log(firstlist.textContent);
// console.log(firstlist.innerText);


// Creating Elements 

const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding Elements

ul.append(li);

//Modifying the test

// li.innerText = "Testing"

//Modifying Attributes & Classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');
// li.classList.add('list-items')

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute("id"));
