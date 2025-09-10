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
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
        document.querySelector('.message').textContent = 'Umaapoy! poy poy! Correct Number!';
    } else if (guess > secretNumber) {
        console.log('Too high!');
        document.querySelector('.message').textContent = 'IHh ang taas!';
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "You lost!";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
        }
    } else if (guess < secretNumber) {
        console.log('Too low!');
        document.querySelector('.message').textContent = 'Nye ambaba!';
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "You lost!";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    // block
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    // restart secret number display
    document.querySelector('.number').textContent = '?';
    // restart the score
    document.querySelector('.score').textContent = score;
    // empty the guess input value to none
    document.querySelector('.guess').textContent = ' ';
    // enable guess and check input buttons
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
});