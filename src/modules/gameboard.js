import { ship } from "./ship";

class gameboard {
  constructor() {
    this.y = [];
    this.length = 10;
    this.shipsSunk = 0;
    for (let i = 0; i < this.length; i++) {
      this.y.push([]);
      for (let j = 0; j < this.length; j++) {
        this.y[i].push(false);
      }
    }
    this.ship = new ship();
  }
  place(item, x, y) {
    this.y[x][y] = item;
  }
  receiveAttack(x, y) {
    if (this.y[x][y] === false) {
      this.y[x][y] = true;
      return false;
    } else {
      let item = this.y[x][y];
      this.y[x][y] = "hit";
      this.ship.hit(item);
      return this.controleShips();
    }
  }
  controleShips() {
    if (this.ship.ships === 0) return true;
    else return "hit";
  }
}
export { gameboard };
