class gameboard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  createGameboard() {
    const gameboard = [];

    for (let i = 0; i < this.height; i++) {
      const row = [];
      for (let j = 0; j < this.width; j++) {
        row.push({
          isOccupied: false,
          ship: null,
        });
      }
      gameboard.push(row);
    }
    return gameboard;
  }
  placeShip(ship, pos1, pos2, dir) {
    if (pos1 < 0 || pos1 >= this.width || pos2 < 0 || pos2 >= this.height) {
      return false;
    }
    for (let i = pos1; i <= pos2; i++) {
      if (this.gameboard[pos2][i].isOccupied) {
        return false;
      }
    }
    for (let i = pos1; i <= pos2; i++) {
      this.gameboard[pos1][i].isOccupied = true;
      this.gameboard[pos2][i].ship = ship;
    }
    return true;
  }
}
module.exports = gameboard;
