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

    // Create a 2D array to store the ship objects
    this.ships = [];
    for (let i = 0; i < this.width; i++) {
      this.ships[i] = [];
      for (let j = 0; j < this.height; j++) {
        this.ships[i][j] = null;
      }
    }

    // Keep track of Missed attacks
    this.missedAttacks = [];
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

    // Create a new ship object
    const ship = new Ship(length, orientation);

    // Place the ship on the gameboard
    for (let i = 0; i < length; i++) {
      if (orientation === 'horizontal') {
        this.board[x + i][y] = 1;
        this.ships[x + i][y] = ship;
      } else {
        this.board[x][y + i] = 1;
        this.ships[x][y + i] = ship;
      }
    }
  }

  // Check if a ship is located at the given coordinates
  hasShipAt(x, y) {
    return this.board[x][y] === 1;
  }

  // Get Ship Coords
  getShip(x, y) {
    return this.ships[x][y];
  }

  // Attack Detection
  receiveAttack(x, y) {
    const ship = this.getShip(x, y);

    // If the ship is already sunk, then return false
    if (ship && ship.isSunk) {
      return false;
    }

    // If the ship is not there, then return false
    if (!ship) {
      this.missedAttacks.push({ x, y });
      return false;
    }

    // Attack hit the Ship
    ship.shipHit();

    // If sunken ship, remove from board
    if (ship.shipSunk()) {
      ship.isSunk = true;
    }

    return true;
  }

  // Missed attacks collection
  getMissedAttacks() {
    return this.missedAttacks;
  }

  allShipsSunk() {
    // Count the number of ships that are left.
    let shipsLeft = 0;
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const ship = this.ships[i][j];
        if (ship && !ship.isSunk) {
          shipsLeft++;
        }
      }
    }

    // Log the number of ships that are left to the console.
    console.log(`There are ${shipsLeft} ships left.`);

    // Check if all of the ships have been sunk.
    return shipsLeft === 0;
  }
}

module.exports = BattleshipGameboard;
