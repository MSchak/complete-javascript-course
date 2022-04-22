'use strict';

// 1. Generate random number on load between 1 -20
// 2. Generate new random number on click of Again button
// @again score = 20; color to start;
// @input

//

// 1. Generate random number on load between 1 -20
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

//Select content
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let checkButton = document.querySelector('.check');
let guess = document.querySelector('.guess');
let againButton = document.querySelector('.again');
let num = randomNumber;
console.log(num);

checkButton.addEventListener('click', checkGuess);
againButton.addEventListener('click', playAgain);

// 3. Function to Read input - @click run function
// 4. Determine if input it less than or greater than randomnumber
// 5. If less than, log <than, if greater, > if else, log you win!
// 7. at guess score -= 1
// 8. if win is true set highscore = score
// 9. if win is true set color to win color

function checkGuess() {
  if (guess.value < 0 || guess.value > 20) {
    message.innerHTML = 'Please choose a number between 1-20';
    guess.value = '';
  } else if (guess.value > num) {
    message.innerHTML = 'Too high';
    score.innerHTML -= 1;
    guess.value = '';
  } else if (guess.value < num) {
    message.innerHTML = 'Too low';
    score.innerHTML -= 1;
    guess.value = '';
  } else {
    message.innerHTML = 'You win!';
    number.innerHTML = num;
    document.body.style = 'background-color: #60b347';
    checkHighScore();
  }
}

//Set all styles back to start except high score, generate new random number
function playAgain() {
  document.body.style = 'background-color: #222';
  score.innerHTML = 20;
  num = Math.floor(Math.random() * 20) + 1;
  number.innerHTML = '?';
  message.innerHTML = 'Start guessing...';
  guess.value = '';
  console.log(num);
}

//check if current high score is higher than previous high score and update
function checkHighScore() {
  if (highScore.innerHTML < score.innerHTML)
    highScore.innerHTML = score.innerHTML;
}
