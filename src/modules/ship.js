import { gameboard } from "./gameboard";

class ship {
  constructor() {
    this.ships = 5;
  }
  carrier = {
    length: 5,
    hit: 0,
    sunk: false,
  };
  battleship = {
    length: 4,
    hit: 0,
    sunk: false,
  };
  cruiser = {
    length: 3,
    hit: 0,
    sunk: false,
  };
  submarine = {
    length: 3,
    hit: 0,
    sunk: false,
  };
  destroyer = {
    length: 2,
    hit: 0,
    sunk: false,
  };
  hit(item) {
    if (item === "carrier") {
      this.carrier.hit++;
      if (this.carrier.hit >= this.carrier.length) {
        this.carrier.sunk = true;
        this.ships--;
      }
    } else if (item === "battleship") {
      this.battleship.hit++;
      if (this.battleship.hit >= this.battleship.length) {
        this.battleship.sunk = true;
        this.ships--;
      }
    } else if (item === "cruiser") {
      this.cruiser.hit++;
      if (this.cruiser.hit >= this.cruiser.length) {
        this.cruiser.sunk = true;
        this.ships--;
      }
    } else if (item === "submarine") {
      this.submarine.hit++;
      if (this.submarine.hit >= this.submarine.length) {
        this.submarine.sunk = true;
        this.ships--;
      }
    } else if (item === "destroyer") {
      this.destroyer.hit++;
      if (this.destroyer.hit >= this.destroyer.length) {
        this.destroyer.sunk = true;
        this.ships--;
      }
    }
  }
}

export { ship };
