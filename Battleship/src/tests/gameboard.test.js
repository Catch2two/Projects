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
