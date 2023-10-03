const Gameboard = require('../components/gameboard');
const Ship = require('../components/ship');

test('Placement test', () => {
  const gameboard = new Gameboard(10, 10);
  gameboard.placeShip(new Ship('Battleship', 4), 0, 0, 'horizontal');
  expect(gameboard.board[1][2]).toEqual({
    name: 'Battleship',
    size: 4,
    hit: false,
    hits: 0,
    isSunk: false,
  });
});
test('horizontal boat test', () => {
  const gameboard = new Gameboard(10, 10);
  gameboard.placeShip(new Ship('Battleship', 4), 0, 0, 'horizontal');
  expect(gameboard.board[2][0]).toEqual({
    name: 'Battleship',
    size: 4,
    hit: false,
    hits: 0,
    isSunk: false,
  });
});
test('vertical boat test', () => {
  const gameboard = new Gameboard(10, 10);
  gameboard.placeShip(new Ship('Battleship', 4), 0, 0, 'vertical');
  expect(gameboard.board[2][0]).toEqual({
    name: 'Battleship',
    size: 4,
    hit: false,
    hits: 0,
    isSunk: false,
  });
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

// test Horizontal Placement.
test('placeShip() Horizontally', () => {
  const gameboard = new Gameboard(10, 10);
  const ship = new Ship(3);
  const result = gameboard.placeShip(ship, 5, 7, 'horizontal');

  expect(result).toBe(true);
  expect(gameboard.board[7][5]).toBeNull();
});

// test Vertical Placement.
test('placeShip() Vertically', () => {
  const gameboard = new Gameboard(10, 10);
  const ship = new Ship(3);
  const result = gameboard.placeShip(ship, 5, 7, 'vertical');

  expect(result).toBe(true);
  expect(gameboard.board[5][7]).toBeNull();
});
