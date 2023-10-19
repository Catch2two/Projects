const Bot = require('../components/bot');

describe('Bot', () => {
  it('can generate a random attack node', () => {
    const bot = new Bot();
    bot.gameboard.width = 10;
    bot.gameboard.height = 10;
    // Log the values of the variables that are used to calculate the attack node.
    console.log(`Math.random() = ${Math.random()}`);
    console.log(`bot.gameboard.width = ${bot.gameboard.width}`);
    console.log(`bot.gameboard.height = ${bot.gameboard.height}`);

    const node = bot.botAttackNode(2, 0);

    expect(node.x).toBeGreaterThanOrEqual(2);
    expect(node.x).toBeLessThan(bot.gameboard.width);
    expect(node.y).toBeGreaterThanOrEqual(0);
    expect(node.y).toBeLessThan(bot.gameboard.height);
  });
});
