import { ship } from "./modules/ship";
import { gameboard } from "./modules/gameboard";
import { player } from "./modules/player";
import {
  setMyShipsGUI,
  setComputersShipsGUI,
  computerShot,
} from "./modules/createGui";
import { setShipRandomly } from "./modules/placeShips";

let gameboardPlayer = new gameboard();
let computer = new player();
let gameboardComputer = new gameboard();
let coordinates;
let playerLoses = false;
let computerLoses = false;

setShipRandomly("cruiser", 3, gameboardPlayer);
setShipRandomly("destroyer", 2, gameboardPlayer);
setShipRandomly("submarine", 3, gameboardPlayer);
setShipRandomly("battleship", 4, gameboardPlayer);
setShipRandomly("carrier", 5, gameboardPlayer);

setShipRandomly("cruiser", 3, gameboardComputer);
setShipRandomly("destroyer", 2, gameboardComputer);
setShipRandomly("submarine", 3, gameboardComputer);
setShipRandomly("battleship", 4, gameboardComputer);
setShipRandomly("carrier", 5, gameboardComputer);

createGUI();
setMyShipsGUI(gameboardPlayer.y);
setComputersShipsGUI(gameboardComputer.y);

function createGUI() {
  const gameboardPl = document.querySelector(".gameboardPlayer");
  const gameboardCo = document.querySelector(".gameboardComputer");
  let elements = 100;
  let fieldPlayer, fieldComputer;

  for (let i = 0; i < elements; i++) {
    fieldPlayer = document.createElement("div");
    fieldPlayer.setAttribute("class", "fieldPlayer");
    gameboardPl.appendChild(fieldPlayer);

    fieldComputer = document.createElement("div");
    fieldComputer.setAttribute("class", "fieldComputer");
    fieldComputer.setAttribute("id", i);
    gameboardCo.appendChild(fieldComputer);
  }

  let fields = document.querySelectorAll(".fieldComputer");

  fields.forEach((field) => {
    field.addEventListener("click", () => {
      computerLoses = gameboardComputer.receiveAttack(
        Math.floor(Number(field.id) / 10),
        Number(field.id) % 10
      );
      if (computerLoses === true) printWinner("Player");
      if (field.textContent == "") {
        while (true) {
          field.textContent = "•";
          field.setAttribute("class", "clickedfield");
          coordinates = computer.makeRandomShot(gameboardPlayer.y);
          playerLoses = gameboardPlayer.receiveAttack(
            Number(coordinates.split(",")[0]),
            Number(coordinates.split(",")[1])
          );
          computerShot(
            Number(coordinates.split(",")[0]),
            Number(coordinates.split(",")[1])
          );
          if (playerLoses === true) printWinner("Computer");
          if (playerLoses === false) break;
        }
      } else if (field.textContent == "X")
        field.setAttribute("class", "hiddenfield");
    });
  });
}
function printWinner(winner) {
  let text = document.querySelector(".dialog");
  text.textContent = winner + " wins the game";
}
