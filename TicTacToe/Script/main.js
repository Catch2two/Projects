const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
const gameBoard = document.getElementById('gameBoard')
let circleTurn

cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true }) // Records click ONCE
})

function handleClick(e) {
  console.log('clicked')
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  // Check if Win
  // Check if Draw
  // switch turns
  swapTurns()
  setBoardHoverClass()
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}
function swapTurns() {    // Rotates X to O
  circleTurn = !circleTurn
}
function setBoardHoverClass() {

}




// IIFE - Immediately Invoked Function Expression

// Game Display and Logic Module

const initializeGame = (() => {

})();

// Player Factory
const Player = (player, marker) => { 
  const welcome = () => console.log('Welcome', player + '!', 'You are', marker);
  return { player, marker, welcome }
  };

const playerOne = Player('Josh', 'X');  // Create Player
const playerTwo = Player('Meaghan', 'O');
const ai = Player('Ai', 'O');

playerOne.welcome()
playerTwo.welcome()

