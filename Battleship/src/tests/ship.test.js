const Ship = require('../components/ship');

test('Ship Test', () => {
  const expectedShip = {
    name: 'battleship',
    size: 5,
    hit: false,
    hits: 0,
    isSunk: false,
  };

  const actualShip = new Ship('battleship', 5);

  expect(actualShip).toEqual(expectedShip);
});

test('isSunk test', () => {
  const testShip = new Ship('battleship', 5);

  testShip.shipHit();
  testShip.shipHit();
  testShip.shipHit();
  testShip.shipHit();
  testShip.shipHit();

  expect(testShip.isSunk).toEqual(true);
});
