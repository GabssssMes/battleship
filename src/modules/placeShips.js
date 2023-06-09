function setShipRandomly(name, length, gameboard) {
  let horizontal = true;
  if (Math.floor(Math.random() * 2) > 0) horizontal = false;

  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);

  if (horizontal === false) {
    if (x + length > 9) {
      for (let i = 0; i < length; i++) {
        if (gameboard.y[x - i][y] === false) gameboard.y[x - i][y] = name;
        else {
          for (let j = i - 1; j > -1; j--) {
            gameboard.y[x - j][y] = false;
          }
          setShipRandomly(name, length, gameboard);
          return;
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (gameboard.y[x + i][y] === false) gameboard.y[x + i][y] = name;
        else {
          for (let j = i - 1; j > -1; j--) {
            gameboard.y[x + j][y] = false;
          }
          setShipRandomly(name, length, gameboard);
          return;
        }
      }
    }
  } else {
    if (y + length > 9) {
      for (let i = 0; i < length; i++) {
        if (gameboard.y[x][y - i] === false) gameboard.y[x][y - i] = name;
        else {
          for (let j = i - 1; j > -1; j--) {
            gameboard.y[x][y - j] = false;
          }
          setShipRandomly(name, length, gameboard);
          return;
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (gameboard.y[x][y + i] === false) gameboard.y[x][y + i] = name;
        else {
          for (let j = i - 1; j > -1; j--) {
            gameboard.y[x][y + j] = false;
          }
          setShipRandomly(name, length, gameboard);
          return;
        }
      }
    }
  }
}

export { setShipRandomly };
