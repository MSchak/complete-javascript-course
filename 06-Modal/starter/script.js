'use strict';

const showModalBtns = document.querySelectorAll(".show-modal")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".close-modal")


function openModal(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function closeModal(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

for(let i = 0; i < showModalBtns.length; i++)
  showModalBtns[i].addEventListener('click', openModal)

closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
  })