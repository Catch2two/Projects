const Bot = require('../components/bot');
const Gameboard = require('../components/gameboard');

jest.mock('../components/gameboard');

const mockGameboard = new Gameboard();
mockGameboard.placeShip(0, 0, 2, 'horizontal');

const bot = new Bot(mockGameboard);

test('Bot Attack Test', () => {
  // Attack the ship
  const hit = bot.attack();

  // Assert that the attack hit the ship
  expect(hit).toBe(true);

  // Attack the same coordinates again
  const hitAgain = bot.attack(0, 0);

  // Assert that the attack missed because the ship has already been sunk
  expect(hitAgain).toBe(false);
});
