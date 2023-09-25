class ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.location = [];
    this.hit = false;
  }

  shipLocation(location) {
    this.location.push(location);
  }

  shipHit() {
    this.hit = true;
  }

  shipSunk() {
    return this.hit && this.location.length === 0;
  }
}
const battleship = new ship('battleship', 5);
console.log(battleship);
module.exports = ship;
