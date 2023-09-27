const ship = require('../components/ship');

test('Ship Test', () => {
  const expectedShip = {
    name: 'battleship',
    size: 5,
    location: [],
    hit: false,
    hits: 0,
    isSunk: false,
  };

  const actualShip = new ship('battleship', 5);

  expect(actualShip).toEqual(expectedShip);
});
