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
            x: 4,
            y: 4
        },
        moves: [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [-1, 2], [1, -2], [-1, -2]
        ]
    };
    return  knight;
}
function moveKnight(knight, x, y) {
    knight.position.x = x;
    knight.position.y = y;
}
function printKnightLocation(knight) {
    console.log(`The knight is at position (${knight.position.x}, ${knight.position.y})`);
}
function minKnightMoves(x, y) {
  let knight = createKnight();
  let moves = knight.moves;

  let seen = new Set();
  let queue = [[0,0]];
  let steps = 0;

  while(queue.length){
      let next = [];
      while(queue.length){
          let current = queue.shift();
          let currentX = current[0];
          let currentY = current[1];

          if (currentX === x && currentY === y) {
               return steps
          }

          for (let i of moves){
              let nextX = currentX + i[0];
              let nextY = currentY + i[1];

              if (!seen.has(nextX + "," + nextY)){
                  seen.add(nextX + "," + nextY);
                  next.push([nextX, nextY])
              }
          }
      }
      steps++;
      queue = next;
  }
}

let knight = createKnight();
let gameboard = createGameboard();


const steps = minKnightMoves(7, 7)
moveKnight(knight, 0, 0);
printKnightLocation(knight)
console.log("Shortest number of steps to reach (7, 7)")
console.log(steps)
console.log(gameboard)