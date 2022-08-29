'use strict';
const playerOne  = document.querySelector(".player--1");
const playerTwo = document.querySelector(".player--2");
const activePlayer = document.querySelector(".player--active");
let currentOne = document.getElementById("current--1");
let currentTwo = document.getElementById("current--2");
let currentPlayer = "";
let scoreOne = document.getElementById("score--1");
let scoreTwo = document.getElementById("score--2");
const dice = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
let diceRoll = "";


function newGame(){
    playerOne.classList.add("player--active");
    playerTwo.classList.remove("player--active")
    currentOne.innerText = 0
    currentTwo.innerText = 0;
    scoreOne.innerText = 0
    scoreTwo.innerText = 0
    console.log(scoreOne)
}


function updateCurrentOne(){
        if(diceRoll > 1){
            currentOne.innerText = Number(currentOne.innerText) + diceRoll
        } else {
            currentOne.innerText = 0
            switchPlayer()
        }
    }

function updateScoreOne(){
    scoreOne.innerText = Number(scoreOne.innerText) + Number(currentOne.innerText)
    currentOne.innerText = 0
    if(Number(scoreOne.innerText) >= 20){
        console.log("Player one wins")
    }
}

function updateCurrentTwo(){
        if(diceRoll > 1){
            currentTwo.innerText = Number(currentTwo.innerText) + diceRoll
        } else {
            currentTwo.innerText = 0
            switchPlayer()
        }
    }

function updateScoreTwo(){
    scoreTwo.innerText = Number(scoreTwo.innerText) + Number(currentTwo.innerText)
    currentTwo.innerText = 0
    if(Number(scoreTwo.innerText) >= 20){
        console.log("Player two wins")
    }
}

function switchPlayer(){
    if(playerOne.classList.contains("player--active")){
        playerOne.classList.remove("player--active")
        playerTwo.classList.add("player--active")
    } else{  
        playerTwo.classList.remove("player--active")
        playerOne.classList.add("player--active")
    }
}

function hold(){
    if(playerOne.classList.contains("player--active")){
        updateScoreOne()
        switchPlayer()
        }
        else{
        updateScoreTwo()
        switchPlayer()
        }
}

newBtn.addEventListener('click', newGame);

rollBtn.addEventListener('click', function(){
 diceRoll = Math.floor(Math.random() * 6) + 1;
 dice.src = `dice-${diceRoll}.png`;
 if(playerOne.classList.contains("player--active")){
 updateCurrentOne()
 }
 else{
 updateCurrentTwo()
 }
})


holdBtn.addEventListener('click', hold)

