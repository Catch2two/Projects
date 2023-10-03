const Ship = require('../components/ship');

class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = new Array(this.height).fill(new Array(this.width).fill(null));
  }

  placeShip(ship, x, y, direction) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.hight) {
      return false;
    }
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

module.exports = Gameboard;
