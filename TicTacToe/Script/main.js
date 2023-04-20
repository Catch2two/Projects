// Tic Tac Toe Gameboard Module
const Gameboard = (() => {
  const gameBoard = ['', '', '', '', '', '', '', '', '']; // Board Array
  const turnCount = 0;

  const reset = () => {
    gameBoard.board = ['', '', '', '', '', '', '', '', '']; // Reset Board Array
}
})(); // IIFE - Immediately Invoked Function Expression

// Game Display and Logic Module
const newGame = (() => {
  const startGameButton = document.querySelector('.startGame')
        gameContainer = document.querySelector('.gameContainer')
        resetGameButton = document.querySelector('.restartButton')
        gameBoardElements = document.querySelector('.gameBoard')
        scoreBoard = document.querySelector('.scoreBoard')
        newRound = document.querySelector('.roundInfo')
        winConditions = [
          [0, 1, 2],

          [3, 4, 5],
      
          [6, 7, 8],
      
          [0, 3, 6],
      
          [1, 4, 7],
      
          [2, 5, 8],
      
          [0, 4, 8],
      
          [2, 4, 6]
      
        ];

})();

// Player Factory
const Player = (player, marker) => { 
  const welcome = () => console.log('Welcome', player + '!', 'You are', marker);
  return { player, marker, welcome }
  };

const playerOne = Player('Josh', 'X');  // Create Player
const playerTwo = Player('Meaghan', 'O');

playerOne.welcome();
playerTwo.welcome();

