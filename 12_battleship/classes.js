class Ship {
  constructor(length, orient, position) {
    this.length = length;
    this.orient = orient;
    this.position = position;
    this.timesHit = 0;
  }

  get orient() {
    return this._orient;
  }

  set orient(value) {
    if (value !== 0 && value !== 1) {
      throw new Error("Orient must be either 0 or 1");
    }
    this._orient = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (value < 1 || value > 5) {
      throw new Error("Length must be an int between 1 and 5.");
    }
    this._length = value;
  }

  get position() {
    return this._position;
  }

  set position(value) {
    if (value[1] < 0 || value[0] < 0 || value[1] > 9 || value[0] > 9) {
      throw new Error("Ship is out of bounds");
    }
    if (this.orient == 0 && value[1] >= 10 - this.length) {
      throw new Error("Ship is out of bounds");
    }
    if (this.orient == 1 && value[0] >= 10 - this.length) {
      throw new Error("Ship is out of bounds");
    }
    this._position = value;
  }

  hit() {
    this.timesHit++;
  }

  isSunk() {
    return this.timesHit >= this.length;
  }
}

class GameBoard {
  constructor(player, ships) {
    this.player = player;
    this.ships = ships;
  }

  placeShip(length, orient, position) {
    let ship = new Ship(length, orient, position);
    this.ships.append(ship);
  }

  receiveAttack(coordinates) {
    if (
      coordinates[1] < 0 ||
      coordinates[0] < 0 ||
      coordinates[1] > 9 ||
      coordinates[0] > 9
    ) {
      throw new Error("Attack is out of bounds");
    }
  }
}

module.exports = {
  Ship,
  GameBoard,
};
