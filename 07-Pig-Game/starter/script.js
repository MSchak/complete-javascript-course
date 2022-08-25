'use strict';
const playerOne  = document.querySelector("player--1");
const playerTwo = document.querySelector("player--2");
const activePlayer = document.querySelector("player--active");
const currentOne = document.querySelector("current--1");
const currentTwo = document.querySelector("current--2");
const scoreOne = document.querySelector("score--1");
const scoreTwo = document.querySelector("score--2");
const dice = document.querySelector("dice");
const newBtn = document.querySelector("btn--new");
const rollBtn = document.querySelector("btn--roll");
const holdBtn = document.querySelector("btn--hold");

document.addEventListener('click', function(){
playerOne.classList.add("player--active");
currentOne = 0;
currentTwo = 0;
scoreOne = 0
scoreTwo = 0
});
