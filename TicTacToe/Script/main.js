const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
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
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}



const startGameButton = document.querySelector('.startGame')
const gameContainer = document.querySelector('.gameContainer')
const resetGameButton = document.querySelector('.restartButton')
const scoreBoard = document.querySelector('.scoreBoard')
const roundNumber = document.querySelector('.roundInfo')
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],      
  [0, 3, 6],      
  [1, 4, 7],      
  [2, 5, 8],      
  [0, 4, 8],
  [2, 4, 6]
];



// Tic Tac Toe Gameboard Module
const Gameboard = (() => {
  const gameboardArray = ['', '', '', '', '', '', '', '', '']; // Board Array
  const getGameboard = () => {
    console.log(gameboardArray);
    return gameboardArray;

  }

  const reset = () => {
    gameBoard.board = ['', '', '', '', '', '', '', '', '']; // Reset Board Array
}

  return { getGameboard, reset }
})(); // IIFE - Immediately Invoked Function Expression

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

