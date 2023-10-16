class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard;
  }

  attack(x, y) {
    return this.gameboard.receiveAttack(x, y);
  }

  hasWon() {
    return this.gameboard.allShipsSunk();
  }
}

module.exports = Player;
