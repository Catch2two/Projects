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

test('Ship Getters', () => {
  const newShip = new Ship('Battleship', 5);
  const getShipName = newShip.getName();
  expect(getShipName).toBe('Battleship');
});

test('Multiple Ship Creations', () => {
  const boats = [
    { name: 'Battleship', size: 5 },
    { name: 'Carrier', size: 4 },
    { name: 'Cruiser', size: 3 },
    { name: 'Destroyer', size: 2 },
    { name: 'Submarine', size: 1 },
  ];

  const fleet = [];
  for (const boat of boats) {
    const battleship = new Ship(boat.name, boat.size);
    fleet.push(battleship);
  }

  for (const battleship of fleet) {
    const getShipName = battleship.getName();
    expect(getShipName).toBe(battleship.name);

    const getShipSize = battleship.getSize();
    expect(getShipSize).toBe(battleship.size);

    expect(battleship.getSunk()).toBe(false);
  }
});
