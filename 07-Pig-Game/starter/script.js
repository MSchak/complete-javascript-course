'use strict';
const playerOne  = document.querySelector(".player--1");
const playerTwo = document.querySelector(".player--2");
const activePlayer = document.querySelector(".player--active");
let currentOne = document.getElementById("current--1");
let currentTwo = document.getElementById("current--2");
let currentPlayer = ""
let scoreOne = document.getElementById("score--1");
let scoreTwo = document.getElementById("score--2");
const dice = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
let diceRoll = ""

function newGame(){
    playerOne.classList.add("player--active");
    playerTwo.classList.remove("player--active")
    currentOne.innerText = 0
    currentTwo.innerText = 0;
    scoreOne.innerText = 0
    scoreTwo.innerText = 0
    console.log(scoreOne)
}

function updateCurrent(){
if (currentPlayer = 1 && diceRoll > 1){
    currentOne.innerText = diceRoll + Number(currentOne.innerText)
} else if(currentPlayer = 1 && diceRoll == 1){
    currentOne.innerText = 0
}
else if (currentPlayer = 2 && diceRoll > 1){
    currentTwo.innerText = diceRoll + Number(currentTwo.innerText)
} else if(currentPlayer = 2 && diceRoll == 1)
    currentTwo.innerText = 0
}

newBtn.addEventListener('click', newGame);

rollBtn.addEventListener('click', function(){
    console.log(currentPlayer)
 diceRoll = Math.floor(Math.random() * 6) + 1;
 dice.src = `dice-${diceRoll}.png`;
 updateCurrent()

})


holdBtn.addEventListener('click', function(){
    if(playerOne.classList.contains("player--active")){
        playerOne.classList.remove("player--active")
        playerTwo.classList.add("player--active")
        currentPlayer = 2
    } else{  
        playerTwo.classList.remove("player--active")
        playerOne.classList.add("player--active")}
        currentPlayer = 1
})
