const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const gameBoard = document.getElementById('gameBoard')
let circleTurn

// Start Game
initializeGame()

restartButton.addEventListener('click', initializeGame)

function initializeGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
}

cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true }) // Records click ONCE
})

// Check if winner/draw/swap turns if game isnt over
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

function placeMark(cell, currentClass) {  // Places a Marker in Box
  cell.classList.add(currentClass)
}
function swapTurns() {    // Rotates X to O
  circleTurn = !circleTurn
}
function setBoardHoverClass() {     // Hover Marker before Placing
  gameBoard.classList.remove(X_CLASS)
  gameBoard.classList.remove(CIRCLE_CLASS)
  if (circleTurn){
    gameBoard.classList.add(CIRCLE_CLASS)
  } else {
    gameBoard.classList.add(X_CLASS)
  }
}




// IIFE - Immediately Invoked Function Expression

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

