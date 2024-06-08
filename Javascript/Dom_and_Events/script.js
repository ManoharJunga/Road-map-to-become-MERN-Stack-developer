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

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

//Adding Elements

// ul.append(li);

//Modifying the test

// li.innerText = "Testing"

//Modifying Attributes & Classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');
// li.classList.add('list-items')

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute("id"));



// Traverse the DOM


// Parent Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement)

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement)

//child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.color = 'blue';

// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

// Sibling Node Traversal


// let ul = document.querySelector('ul');
// const div = document.querySelector('div');


// console.log(div.childNodes);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);



// Event Listeners

// element.addEventListener('click', function);

// const buttonTwo = document.querySelector('.btn-2');

// function alertbtn() {
//     alert('Example two entered');
// }

// buttonTwo.addEventListener('click', alertbtn);


// Mouseover

// const newBackgroundColor = document.querySelector('.box-3');

// function changeBgColor() {
//     newBackgroundColor.style.backgroundColor = 'red';
// }

// newBackgroundColor.addEventListener('mouseover', changeBgColor);

// const revealbtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');

// function revealText() {
//     if (hiddenContent.classList.contains('reveal')) {
//         hiddenContent.classList.remove('reveal');
//     } else {
//         hiddenContent.classList.add('reveal');
//     }
// }  

// revealbtn.addEventListener('click', revealText);


//Event Probagation

//3 Phases
// 1.Event Capturing
// 2.Target
// 3.Event Bubbling


// document.addEventListener('DOMContentLoaded', function () {
//     const outerDiv = document.querySelector('.outer');
//     const middleDiv = document.querySelector('.middle');
//     const innerDiv = document.querySelector('.inner');

//     // Event capturing
//     outerDiv.addEventListener('click', () => {
//         console.log('Outer Div (Capturing)');
//     }, true);

//     middleDiv.addEventListener('click', () => {
//         console.log('Middle Div (Capturing)');
//     }, true);

//     innerDiv.addEventListener('click', (event) => {
//         console.log('Inner Div (Capturing)');
//         event.stopPropagation(); // Stops propagation
//     }, true);

//     // Event bubbling
//     outerDiv.addEventListener('click', () => {
//         console.log('Outer Div (Bubbling)');
//     });

//     middleDiv.addEventListener('click', () => {
//         console.log('Middle Div (Bubbling)');
//     });

//     innerDiv.addEventListener('click', (event) => {
//         console.log('Inner Div (Bubbling)');
//         event.stopPropagation(); // Stops propagation
//     });
// });


// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it all of its present AND future descendants that match a selector.





