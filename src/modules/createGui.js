function createGUI() {
  const gameboardPlayer = document.querySelector(".gameboardPlayer");
  const gameboardComputer = document.querySelector(".gameboardComputer");
  let elements = 100;
  let fieldPlayer, fieldComputer;

  for (let i = 0; i < elements; i++) {
    fieldPlayer = document.createElement("div");
    fieldPlayer.setAttribute("class", "fieldPlayer");
    gameboardPlayer.appendChild(fieldPlayer);

    fieldComputer = document.createElement("div");
    fieldComputer.setAttribute("class", "fieldComputer");
    gameboardComputer.appendChild(fieldComputer);
  }

  let fields = document.querySelectorAll(".fieldComputer");

  fields.forEach((field) => {
    field.addEventListener("click", () => {
      if (field.textContent == "") {
        field.textContent = "•";
        field.setAttribute("class", "clickedfield");
      } else if (field.textContent == "X")
        field.setAttribute("class", "hiddenfield");
    });
  });
}
function setMyShipsGUI(arr) {
  let ships = document.querySelectorAll(".fieldPlayer");
  let position;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] == false) continue;
      else {
        position = x * arr.length + y;
        ships[position].textContent = "X";
      }
    }
  }
}
function setComputersShipsGUI(arr) {
  let ships = document.querySelectorAll(".fieldComputer");
  let position;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] == false) continue;
      else {
        position = x * arr.length + y;
        ships[position].textContent = "X";
      }
    }
  }
}
function computerShot(x, y) {
  let fields = document.querySelectorAll(".fieldPlayer");
  let position = x * 10 + y;
  if (fields[position].textContent === "X")
    fields[position].classList.add("hiddenfield");
  else if (fields[position].textContent === "") {
    fields[position].classList.add("clickedfield");
    fields[position].textContent = "•";
  }
}
export { createGUI, setMyShipsGUI, setComputersShipsGUI, computerShot };
