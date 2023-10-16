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

    this.updateSunkStatus();
  }

  updateSunkStatus() {
    if (this.hits === this.size) {
      this.isSunk = true;
    }
  }

  // getters
  getName() {
    return this.name;
  }

  getSize() {
    return this.size;
  }

  getHit() {
    return this.hit;
  }

  getHits() {
    return this.hits;
  }

  isSunk() {
    return this.isSunk;
  }
}

module.exports = Ship;
