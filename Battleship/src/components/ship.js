class ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.location = [];
    this.hit = false;
    this.hits = 0;
    this.isSunk = false;
  }

  shipLocation(location) {
    this.location.push(location);
  }

  shipHit() {
    this.hit = true;
    this.hits++;
  }

  shipSunk() {
    return this.hit && this.location.length === 0;
  }
}

module.exports = ship;
