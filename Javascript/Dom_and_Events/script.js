'use strict';

// Selecting and Manipulating Events

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 40;
// document.querySelector('.guess').value = 100;

// Handling Click Events

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess);
//     if(!guess){
//         document.querySelector('.message').textContent = 'No Number';
//     }
// });

// Implementing a game logic

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess);
//     if (!guess) {
//         document.querySelector('.message').textContent = 'No Number';
//     } else if (guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too Low';
//             score--;
//             document.querySelector('.score').textContent = score
//         } else {
//             document.querySelector('.message').textContent = 'You lost the game';
//             document.querySelector('.score').textContent = 0;
//             document.querySelector('body').style.backgroundColor = 'red';
//         }
//     } else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too high';
//             score--;
//             document.querySelector('.score').textContent = score;
            
//         } else {
//             document.querySelector('.message').textContent = 'You lost the game';
//             document.querySelector('.score').textContent = 0;
//             document.querySelector('body').style.backgroundColor = 'red';
//         }
//     } else {
//         document.querySelector('.message').textContent = 'Correct Number';
//         document.querySelector('body').style.backgroundColor = 'green';
//         document.querySelector('.number').textContent = secretNumber;

//     }
// });

