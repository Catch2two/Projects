const gameboard = require('../components/gameboard');

test('Create the Game Grid', () => {
  const gameGrid = new gameboard(10, 10);

  expect(gameGrid.x).toBe(10);
  expect(gameGrid.y).toBe(10);
});
