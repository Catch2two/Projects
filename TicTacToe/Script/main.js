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
  const player = {
    name: 'Player One',
    marker: 'X',
  };
  const getName = () => player.name;
  const getMarker = () => player.marker;
  const sayName = () => console.log(`${getName()} is team ${getMarker()}!`);
})();
