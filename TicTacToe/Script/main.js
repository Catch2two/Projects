/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const GameFlow = (() => {

})();

// Game Board Object
const gameModule = (() => {
  const gameBoard = ['X', 'X', 'O', 'X', 'O', 'X', 'O', 'O', 'O'];

  return { gameBoard };
})();

// Players
const Controller = (() => {
  const player1 = {
    name: 'Player One',
    marker: 'X',
  };
  const player2 = {
    name: 'Player Two',
    marker: 'O',
  };
})();

function render() {
  const ticTac = document.querySelector('gameGrid');
  ticTac.innerHTML = '';
  for (let i = 0; i < gameBoard.length; i += 1) {
    const mark = gameBoard[i];
    const markerBox = document.createElement('div');
    markerBox.innerHTML = `
    <p>${mark}</p>
    `;
  }
}
