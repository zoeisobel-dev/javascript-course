// Game Development Hour 1 - Game Foundation & DOM Basics
'use strict';
// DOM Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl);
// Change the text content on messageE1
messageEl.textContent = 'Hello from javascript';

const scoreE1 = document.querySelector('.score');
// scoreE1.textContent = 15;

const numberE1 = document.querySelector('.number');
// numberE1.textContent = 10;

const highscoreE1 = document.querySelector('.highscore');
// highscoreE1.textContent = 18;

const guessInputE1 = document.querySelector('.guess');
// guessInputE1.value = 6;

// Game state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Your secret number is:', secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

////////////
// Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
    // code block
    console.log('Check button clicked!');
    const guess = Number (document.querySelector('.guess').value);
    console.log('Players guessed:', guess);

    if (guess === secretNumber) {
        console.log('Correct guess!!!');
        document.querySelector('.message').textContent = 'Umaapoy! poy poy! Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
    } else if (guess > secretNumber) {
        console.log('Too high!');
        document.querySelector('.message').textContent = 'IHh ang taas!';
    } else if (guess < secretNumber) {
        console.log('Too low!');
        document.querySelector('.message').textContent = 'Nye ambaba!';
    }
});