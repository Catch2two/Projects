const Ship = require('../components/ship');
class BattleshipGameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    // Create a 2D array to represent the gameboard
    this.board = [];
    for (let i = 0; i < this.width; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.height; j++) {
        this.board[i][j] = 0; // 0 represents an empty space, 1 represents a ship
      }
    }
  }

  // Place a ship on the gameboard at the given coordinates
  placeShip(x, y, length, orientation) {
    // Validate the coordinates and orientation
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      throw new Error('Invalid coordinates');
    }
    if (orientation !== 'horizontal' && orientation !== 'vertical') {
      throw new Error('Invalid orientation');
    }

    // Place the ship on the gameboard
    for (let i = 0; i < length; i++) {
      if (orientation === 'horizontal') {
        this.board[x + i][y] = 1;
      } else {
        this.board[x][y + i] = 1;
      }
    }
  }

  // Check if a ship is located at the given coordinates
  hasShipAt(x, y) {
    return this.board[x][y] === 1;
  }

  // Get Ship Coords
  getShip(x, y) {
    if (this.hasShipAt(x, y)) {
      // Return the ship at the given coordinates
      return new Ship(this.board[x][y].name, this.board[x][y].size);
    } else {
      // Return null if there is no ship at the given coordinates
      return null;
    }
  }
  // Attack Detection
  receiveAttack(x, y) {
    if (this.hasShipAt(x, y)) {
      // Attack hit the Ship
      const ship = this.getShip(x, y);

      // Mark the Ship Hit
      ship.hit = true;
      ship.hits++;

      // If sunken ship, remove from board
      if (ship.shipSunk()) {
        ship.isSunk = true;
      }
      return true;
    } else {
      // Attack Missed
      return false;
    }
  }
}

module.exports = BattleshipGameboard;
