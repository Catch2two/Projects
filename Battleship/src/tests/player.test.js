const Player = require('../components/player');
const BattleshipGameboard = require('../components/gameboard');

describe('Player Attack Test', () => {
  // Create a new gameboard object.
  const gameboard = new BattleshipGameboard();

  const player = new Player('Josh', gameboard);

  // Check if the Player class has an attack() method.
  if (!player.attack) {
    console.log('The Player class does not have an attack() method.');
    return;
  }

  // Check the value of the gameboard property of the Player object.
  if (!player.gameboard) {
    console.log('The gameboard property of the Player object is undefined.');
    return;
  }

  // Check the value of the receiveAttack() method of the gameboard object.
  if (!player.gameboard.receiveAttack) {
    console.log(
      'The receiveAttack() method of the gameboard object is undefined.'
    );
    return;
  }

  // Try to call the attack() method.
  try {
    const hit = player.attack(1, 2);

    if (hit) {
      console.log('Battleship Hit!');
    } else {
      console.log('Miss!');
    }
  } catch (error) {
    console.log('The attack() method threw an error:', error);
  }
});
