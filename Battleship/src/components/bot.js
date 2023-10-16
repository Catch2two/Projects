const BattleshipGameboard = require('../components/gameboard');
class Bot {
  constructor(gameboard) {
    this.gameboard = new BattleshipGameboard();
  }

  botAttackCoords() {}

  attack() {
    const x = this.botAttackCoords();
    const y = this.botAttackCoords();

    return this.gameboard.receiveAttack(x, y);
  }

  hasWon() {
    return this.gameboard.allShipsSunk();
  }
}
module.exports = Bot;
