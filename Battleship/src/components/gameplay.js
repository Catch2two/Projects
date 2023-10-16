// Start the game loop.
while (!player.hasWon() && !bot.hasWon()) {
  // Player's turn.
  player.attack();

  // Check if all of the player's ships have been sunk.
  if (player.hasWon()) {
    console.log('Bot wins!');
    break;
  }

  // Bot's turn.
  bot.attack();

  // Check if all of the bot's ships have been sunk.
  if (bot.hasWon()) {
    console.log('Player wins!');
    break;
  }
}
