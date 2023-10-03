const Ship = require('../components/ship');

class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = new Array(this.height).fill(new Array(this.width).fill(null));
  }

  placeShip(ship, x, y, direction) {
    if (!this.canPlaceShip(ship, x, y, direction)) {
      return false;
    }

    if (direction === 'horizontal') {
      for (let i = 0; i < ship.size; i++) {
        if (x + i < this.width) {
          this.board[y][x + i] = ship;
        }
      }
    } else if (direction === 'vertical') {
      for (let i = 0; i < ship.size; i++) {
        if (y + i < this.height) {
          this.board[y + i][x] = ship;
        }
      }
    } else {
      throw new Error('Invalid direction: Must be Vertical or Horizontal');
    }

    return true;
  }

  canPlaceShip(ship, x, y, direction) {
    if (direction === 'horizontal' && x + ship.size > this.width) {
      return false;
    } else if (direction === 'vertical' && y + ship.size > this.height) {
      return false;
    }

    for (let i = 0; i < ship.size; i++) {
      if (direction === 'horizontal' && this.board[y][x + i] !== null) {
        return false;
      } else if (direction === 'vertical' && this.board[y + i][x] !== null) {
        return false;
      }
    }

    return true;
  }
}

const gameboard = new Gameboard(100, 1);
const battleship = new Ship('battleship', 4);

gameboard.placeShip(battleship, 5, 1, 'vertical');

console.log(gameboard);
module.exports = Gameboard;
