/*
const Gameboard = require('../components/gameboard');
const Ship = require('../components/ship');

test('Placement test', () => {
  const gameboard = new Gameboard(10, 10);
  const ship = new Ship('Battleship', 4);
  gameboard.placeShip(ship, 0, 0, 'horizontal');
  expect(gameboard.board[0][3]).toEqual(ship);
});

test('horizontal boat test', () => {
  const gameboard = new Gameboard(10, 10);
  const ship = new Ship('Battleship', 4);
  gameboard.placeShip(ship, 0, 0, 'horizontal');
  expect(gameboard.board[2][0]).toEqual(ship);
  expect(gameboard.board[2][1]).toEqual(ship);
  expect(gameboard.board[2][2]).toEqual(ship);
  expect(gameboard.board[2][3]).toEqual(ship);
  expect(gameboard.board[2][4]).toBeNull;
});

test('Vertical boat test', () => {
  const gameboard = new Gameboard(10, 10);
  const ship = new Ship('Battleship', 4);
  gameboard.placeShip(ship, 0, 0, 'vertical');
  expect(gameboard.board[0][0]).toEqual(ship);
  expect(gameboard.board[1][0]).toEqual(ship);
  expect(gameboard.board[2][0]).toEqual(ship);
  expect(gameboard.board[3][0]).toEqual(ship);
  expect(gameboard.board[4][0]).toEqual(ship);
  expect(gameboard.board[4][0]).toBeNull;
});

// test place in the Middle of the board.
test('Place in middle', () => {
  const gameboard = new Gameboard(10, 10);
  gameboard.placeShip(
    new Ship('Battleship', 4),
    gameboard.width / 2,
    gameboard.height / 2,
    'vertical'
  );
  expect(gameboard.board[5][5]).toEqual({
    name: 'Battleship',
    size: 4,
    hit: false,
    hits: 0,
    isSunk: false,
  });
});
*/
