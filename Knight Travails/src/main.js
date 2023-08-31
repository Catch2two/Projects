function createGameboard() {
    // Create a 8x8 gameboard.
    let gameboard = new Array(8);
    for (let i = 0; i < 8; i++) {
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
            x: 0,
            y: 0
        },
        color: "White",
        moves: [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [-1, 2], [1, -2], [-1, -2]
        ]
    };
    return  knight;
}
// Set knight position to (2, 3)
let gameboard = createGameboard();
let knight = createKnight();

knight.position.x = 2;
knight.position.y = 3;

// Mark the Location on the board(a string just for visual testing):
gameboard[knight.position.x][knight.position.y] = "KNIGHT"; // or use 1 for actual code...

console.log(gameboard);

console.log(knight.moves);