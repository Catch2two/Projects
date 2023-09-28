const Gameboard = require('../components/gameboard');
const Ship = require('../components/ship');

test('Specific location test', () => {
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
