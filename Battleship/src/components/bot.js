const BattleshipGameboard = require('../components/gameboard');
class Bot {
  constructor(gameboard) {
    this.gameboard = new BattleshipGameboard();
  }

  botAttackNode() {
    // RNG Attacks
    const x = Math.floor(Math.random() * this.gameboard.width);
    const y = Math.floor(Math.random() * this.gameboard.height);

    return { x, y };
  }

  attack() {
    // Get the attack coordinates
    const node = this.botAttackNode();

    // Attack that location
    const hit = this.gameboard.receiveAttack(node.x, node.y);

    // If the Bot hits a ship...
    if (hit) {
      // Get the ship at the hit coordinate
      const ship = this.gameboard.getShip(node.x, node.y);

      // Set the ship's `hit` property to `true`
      ship.hit = true;

      // Check if the ship has been sunk
      if (ship.isSunk()) {
        // The ship has been sunk, so remove it from the gameboard
        this.gameboard.ships[node.x][node.y] = null;
      }

      // Keep attacking until the ship is sunk
      while (!ship.isSunk()) {
        // Attack the ship again
        hit = this.gameboard.receiveAttack(node.x, node.y);

        // Set the ship's `hit` property to `true`
        ship.hit = true;
      }
    }

    return hit;
  }

  hasWon() {
    return this.gameboard.allShipsSunk();
  }
}
module.exports = Bot;
