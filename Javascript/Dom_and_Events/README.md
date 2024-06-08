# DOM and Events Fundamentals

### DOM
The DOM (Document Object Model) represents an HTML document as a tree structure where each node is an object representing a part of the document. Below is an example of a simple HTML document and its corresponding DOM tree structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document Title</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
    <div>
        <a href="https://example.com">Link to Example</a>
    </div>
</body>
</html>

```
### Corresponding DOM Tree Structure
The DOM tree structure for the above HTML document can be visualized as follows:

```less
#document
├── html
│   ├── head
│   │   ├── meta
│   │   └── title
│   └── body
│       ├── h1
│       ├── p
│       └── div
│           └── a

```
### Detailed Breakdown
1. #document: The root node of the DOM tree, representing the entire document.
2. `html`: The `<html>` element, representing the root of the HTML document.
    - `head`: The `<head>` element, containing metadata and links to scripts and styles.
    - `meta`: The `<meta`> element, specifying the character set of the document.
    - `title`: The `<title>` element, specifying the title of the document.
    - `body`: The `<body>` element, containing the content of the document.
    - `h1`: The `<h1>` element, representing a top-level heading.
    - `p`: The `<p>` element, representing a paragraph.
    - `div`: The `<div>` element, representing a division or section.
    - `a`: The `<a>` element, representing a hyperlink.

Here is the rewritten text in a clean and organized format:

**DOM Manipulation**

### Selecting Elements

* `getElementById()`: Selects an HTML element based on its unique ID attribute. Returns the first element with the specified ID.
```javascript
const title = document.getElementById('main-heading');
console.log(title);  // Logs the element with id 'main-heading'
```
* `getElementsByClassName()`: Selects all HTML elements that have the specified class name. Returns an HTMLCollection.
```javascript
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);  // Logs a collection of elements with the class 'list-items'
```
* `getElementsByTagName()`: Selects all HTML elements with the specified tag name. Returns an HTMLCollection.
```javascript
const tagname = document.getElementsByTagName('li');
console.log(tagname);  // Logs a collection of 'li' (list item) elements
```
* `querySelector()`: Returns the first element that matches the specified CSS selector. If no matches are found, returns null.
```javascript
const container = document.querySelector('div');
console.log(container);  // Logs the first 'div' element found in the document
```
* `querySelectorAll()`: Returns all elements that match the specified CSS selector. Returns a NodeList.
```javascript
const allcontainer = document.querySelectorAll('div');
console.log(allcontainer);  // Logs a NodeList of all 'div' elements found in the document
```

### Styling Elements

* Styling an Element with a Color
```javascript
const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);
```
* Styling Font Size
```javascript
const listItems = document.querySelectorAll('.list-items');

for(let i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize = '100px';
}
console.log(listItems);
```

### InnerHTML, TextContent, and InnerText

* `innerHTML`: Logs HTML content
* `textContent`: Logs text content
* `innerText`: Logs text content (excluding hidden text)
```javascript
const firstlist = document.querySelector(".list-items");

console.log(firstlist.innerHTML);  
console.log(firstlist.textContent);  
console.log(firstlist.innerText);  
```

### Creating and Modifying Elements

* Creating Elements
```javascript
const ul = document.querySelector('ul');
const li = document.createElement('li');
```
* Adding Elements
```javascript
ul.append(li);
```
* Modifying the Text
```javascript
li.innerText = "Testing";
```
* Modifying Attributes & Classes
```javascript
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');
li.classList.add('list-items');

const title = document.querySelector('#main-heading');
console.log(title.getAttribute("id"));
```

### Traversing the DOM

* Parent Node Traversal
```javascript
let ul = document.querySelector('ul');

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;

console.log(html.parentNode);
console.log(html.parentElement);
```
* Child Node Traversal
```javascript
let ul = document.querySelector('ul');

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.color = 'blue';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
```
* Sibling Node Traversal
```javascript
let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);
console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
```

**Mouseover Event**

You can change the background color of an element when the mouse hovers over it using the `mouseover` event.

```javascript
const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'ed';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);
```

**Toggling Hidden Content**

Toggle the visibility of an element by adding or removing a CSS class when a button is clicked.

```javascript
const revealbtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealText() {
    if (hiddenContent.classList.contains('reveal')) {
        hiddenContent.classList.remove('reveal');
    } else {
        hiddenContent.classList.add('reveal');
    }
}  

revealbtn.addEventListener('click', revealText);
```

**Event Propagation**

Event propagation refers to the order in which events are handled in the DOM. There are three phases:

1. **Event Capturing**: The event starts from the root and goes down to the target element.
2. **Target**: The event reaches the target element.
3. **Event Bubbling**: The event bubbles up from the target element to the root.

**Example Code**

```javascript
document.addEventListener('DOMContentLoaded', function () {
    const outerDiv = document.querySelector('.outer');
    const middleDiv = document.querySelector('.middle');
    const innerDiv = document.querySelector('.inner');

    // Event Capturing
    outerDiv.addEventListener('click', () => {
        console.log('Outer Div (Capturing)');
    }, true);

    middleDiv.addEventListener('click', () => {
        console.log('Middle Div (Capturing)');
    }, true);

    innerDiv.addEventListener('click', (event) => {
        console.log('Inner Div (Capturing)');
        event.stopPropagation(); // Stops propagation
    }, true);

    // Event Bubbling
    outerDiv.addEventListener('click', () => {
        console.log('Outer Div (Bubbling)');
    });

    middleDiv.addEventListener('click', () => {
        console.log('Middle Div (Bubbling)');
    });

    innerDiv.addEventListener('click', (event) => {
        console.log('Inner Div (Bubbling)');
        event.stopPropagation(); // Stops propagation
    });
});
```