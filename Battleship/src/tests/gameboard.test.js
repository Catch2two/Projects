const BattleshipGameboard = require('../components/gameboard');

test('Horizontal boat test', () => {
  const gameboard = new BattleshipGameboard(10, 10);
  gameboard.placeShip(0, 0, 4, 'horizontal');
  expect(gameboard.board[1][0]).toEqual(1);
  expect(gameboard.board[2][0]).toEqual(1);
  expect(gameboard.board[3][0]).toEqual(1);
  expect(gameboard.board[4][0]).toEqual(0);
});

test('Vertical boat test', () => {
  const gameboard = new BattleshipGameboard(10, 10);
  gameboard.placeShip(0, 0, 4, 'vertical');
  expect(gameboard.board[0][1]).toEqual(1);
  expect(gameboard.board[0][2]).toEqual(1);
  expect(gameboard.board[0][3]).toEqual(1);
  expect(gameboard.board[0][4]).toEqual(0);
});

// test place in the Middle of the board.
test('Place in middle', () => {
  const gameboard = new BattleshipGameboard(10, 10);
  gameboard.placeShip(gameboard.width / 2, gameboard.height / 2, 4, 'vertical');
  expect(gameboard.board[5][5]).toEqual(1);
});

// test receiveHit
test('ReceiveAttack() should hit the ship', () => {
  // Create a new BattleshipGameboard instance.
  const gameboard = new BattleshipGameboard(10, 10);

  // Place a ship on the gameboard at the coordinates (0, 0).
  gameboard.placeShip(0, 0, 5, 'horizontal');

  // Call the receiveAttack() method on the gameboard, passing in the coordinates of the ship.
  gameboard.receiveAttack(0, 0);
  console.log(gameboard.getShip(0, 0));
  // Check the ship's isSunk property.
  expect(gameboard.getShip(0, 0).isSunk).toBe(false);
});
