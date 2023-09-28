const Ship = require('../components/ship');

class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = new Array(this.height).fill(new Array(this.width).fill(null));
  }

  placeShip(ship, x, y, direction) {
    if (direction === 'horizontal') {
      for (let i = 0; i < ship.size; i++) {
        if (x + i >= this.width || this.board[y][x + i] !== null) {
          return false;
        }
      }

      for (let i = 0; i < ship.size; i++) {
        this.board[y][x + i] = ship;
      }
    } else if (direction === 'vertical') {
      for (let i = 0; i < ship.size; i++) {
        if (y + i >= this.height || this.board[y + i][x] !== null) {
          return false;
        }
      }

      for (let i = 0; i < ship.size; i++) {
        this.board[y + i][x] = ship;
      }
    } else {
      throw new Error('Invalid direction: Must be Vertical or Horizontal');
    }
    return true;
  }
}

const gameboard = new Gameboard(10, 10);

// Create a new ship object of size 4
const ship = new Ship('Battleship', 4);

// Place the ship at coordinates (0, 0) in a horizontal orientation
gameboard.placeShip(
  ship,
  gameboard.width / 2,
  gameboard.height / 2,
  'horizontal'
);

// Check the value of the gameboard at coordinates (0, 0)
console.log(gameboard.board[5][5]); // Outputs: Ship { name: 'Battleship', size: 4 }

module.exports = Gameboard;
