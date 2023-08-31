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