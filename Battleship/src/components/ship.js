class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.hit = false;
    this.hits = 0;
    this.isSunk = false;
  }

  shipHit() {
    this.hit = true;
    this.hits++;

    if (this.shipSunk()) {
      this.isSunk = true;
    }
  }

  shipSunk() {
    return this.hit && this.hits === this.size;
  }
}

module.exports = Ship;
