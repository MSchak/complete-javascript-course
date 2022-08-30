'use strict';
const playerOne  = document.querySelector(".player--1");
const playerTwo = document.querySelector(".player--2");
let activePlayer = 1
let currentOne = document.getElementById("current--1");
let currentTwo = document.getElementById("current--2");
let scoreOne = document.getElementById("score--1");
let scoreTwo = document.getElementById("score--2");
const dice = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
let diceRoll = "";
let playing = true


function newGame(){
    playerOne.classList.add("player--active");
    playerTwo.classList.remove("player--active")
    currentOne.innerText = 0
    currentTwo.innerText = 0;
    scoreOne.innerText = 0
    scoreTwo.innerText = 0
    playerOne.classList.remove("player--winner");
    playerTwo.classList.remove("player--winner");
    dice.classList.add("hidden")
    playing = true
}


//Update current score of player
function updateCurrent(){
    let currentScore = document.getElementById(`current--${activePlayer}`)
        if(diceRoll > 1){
            currentScore.innerText = Number(currentScore.innerText) + diceRoll
            console.log(currentScore)
        } else {
            currentScore.innerText = 0
            switchPlayer()
        }
    }

 //Update score of player at hold
function updateScore(){
    let currentScore = document.getElementById(`current--${activePlayer}`)
    let score = document.getElementById(`score--${activePlayer}`)
    let player = document.querySelector(`.player--${activePlayer}`)
    score.innerText = Number(score.innerText) + Number(currentScore.innerText)
    currentScore.innerText = 0
    if(Number(score.innerText) >= 20){
        player.classList.add("player--winner");
        player.classList.remove("player--active")
        playing = false
        dice.classList.add("hidden");
    }
}

function switchPlayer(){
    playerOne.classList.toggle("player--active")
    playerTwo.classList.toggle("player--active")
    activePlayer = activePlayer === 1 ? 2 : 1;
    console.log(activePlayer)
}

function hold(){
    if(playing){
   updateScore()
   switchPlayer()
    }
}

newBtn.addEventListener('click', newGame);
holdBtn.addEventListener('click', hold)

// Roll the dice
rollBtn.addEventListener('click', function(){
    if(playing){
 diceRoll = Math.floor(Math.random() * 6) + 1;
 dice.src = `dice-${diceRoll}.png`;
 dice.classList.remove("hidden");
 updateCurrent()
    }
})

