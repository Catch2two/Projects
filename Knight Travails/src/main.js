function createGameboard() {
    // Create a 8x8 gameboard.
    let gameboard = new Array(6);
    for (let i = 0; i < 6; i++) {
        gameboard[i] = new Array(8);
        for (let j = 0; j < 8; j++) {
            gameboard[i][j] = 0  // Start each cell with 0
        }
    }
    return gameboard;
}

function createKnight() {
    let knight = {
        position: {
            x: 2,
            y: 1
        },
        color: "White",
        moves: [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [-1, 2], [1, -2], [-1, -2]
        ]
    };
    return  knight;
}

function movePiece(currentPostion, targetPosition) {
    // Check if within Gameboard limits.
    if (targetPosition.x < 0 || targetPosition.x >= gameboard.length) {
      return;
    }
    if (targetPosition.y < 0 || targetPosition.x >= gameboard[0].length) {
      return;
    }
    // Check if valid move.
    for (let move of knight.moves) {
      if (move[0] === targetPosition.x && move[1] === targetPosition.y) {
        currentPostion.x = targetPosition.x;
        currentPostion.y = targetPosition.y;
        // Update Gameboard
        let lastPosition = gameboard[currentPostion.x][currentPostion.y];
        gameboard[currentPostion.x][currentPostion.y] = 0;
        gameboard[targetPosition.x][targetPosition.y] = lastPosition
        return;
      }
    }
  }

let knight = createKnight();
let gameboard = createGameboard();
console.log('\n')
console.log('Knight Moves: ')
console.log(knight.moves)

console.log('Knight position on Board:')
console.log('\n')
gameboard[knight.position.x][knight.position.y] = 'Knight';
console.log(gameboard)

// Change the target position to [2, 1]
console.log('\n')
movePiece(knight.position, [2, 2])
console.log(gameboard)