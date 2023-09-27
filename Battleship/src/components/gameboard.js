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
}

module.exports = gameboard;
