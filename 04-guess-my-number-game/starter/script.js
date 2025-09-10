// Game Development Hour 1 - Game Foundation & DOM Basics
'use strict';

// Constants
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// Cached selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI helpers
function setMessage(text) {
    messageEl.textContent = text;
}

function setHighscore(value) {
    highscoreEl.textContent = value;
}

function setBackground(color) {
    bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
    guessInputEl.disabled = disabled;
    checkBtnEl.disabled = disabled;
}

function clearInput() {
    guessInputEl.value = '';
}

function setNumber(value) {
    numberEl.textContent = value;
}

function setScore(value) {
    scoreEl.textContent = value;
}

// Game state variables
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log('Your secret number is:', secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
    score = START_SCORE;
    secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI(){
    setMessage('Start guessing...');
    setNumber('?');
    setScore(score);
    clearInput();
    disablePlay(false);
    setBackground('');
}

renderInitialUI;

////////////
// Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
    console.log('Check button clicked!');
    const guess = Number (document.querySelector('.guess').value);
    console.log('Players guessed:', guess);

    // input validation
    if (!guess) return setMessage ('Please input a number!');

    if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
        return setMessage (`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`

        );
    }

    if (guess === secretNumber) {
        setMessage('You have won!!!');
        setNumber(secretNumber);
        setBackground('#FF69B4');
        if (score > highscore) {
            highscore = score;
            setHighscore(highscore);
        }
        disablePlay(true);
        clearInput('');
        return;
    }
    
    // wrong guess
    setMessage(guess > secretNumber ? "Too high!" : "Too low!")
    score--;
    setScore(score);

    if (score < 1) {
        setMessage('Game over. Please press again!');
        setNumber(secretNumber);
        setBackground("#830b4fff");
        disablePlay(true);
        clearInput();
    }
});

againBtnEl.addEventListener('click', function () {
    resetGameState();
    renderInitialUI();
});

window.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !checkBtnE1.disabled) {
        checkBtnE1.click();
    }
})


