class Gameboard {
  constructor() {
    this.boardArray = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => 0)
    );
  }
  printGameBoard() {
    console.table(this.boardArray);
  }
}
module.exports = Gameboard;
