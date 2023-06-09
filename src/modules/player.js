class player {
  constructor() {}

  makeRandomShot(arr) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    let lastHit = this.searchForHit(arr);
    console.log(lastHit);
    if (lastHit != null) return lastHit;

    if (arr[x][y] != "hit" && arr[x][y] != true) return x + "," + y;
    else {
      while (y < 10) {
        if (arr[x][y] != "hit" && arr[x][y] != true) return x + "," + y;
        else {
          if (y == 9) {
            y = 0;
            if (x == 9) x = 0;
            else x++;
          } else y++;
        }
      }
    }
  }
  searchForHit(arr) {
    let before = null;
    let after = null;
    let over = null;
    let under = null;
    let positions = [before, after, over, under];
    let h = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === "hit") {
          if (j > 0) before = arr[i][j - 1];
          if (j < 9) after = arr[i][j + 1];
          if (i > 0) over = arr[i - 1][j];
          if (i < 9) under = arr[i + 1][j];

          if (positions.indexOf("hit" !== -1)) {
            if (before === "hit" && j > 1) {
              h = j;
              while (arr[i][h - 2] === "hit" && h > 2) {
                h = h - 1;
              }
              if (arr[i][h - 2] !== true && arr[i][h - 2] !== "hit")
                return i + "," + (h - 2);
              //if (arr[i][j - 2] !== "hit" && arr[i][j - 2] !== true)
              //  return i + "," + (j - 2);
            }
            if (after === "hit" && j < 8) {
              h = j;
              while (arr[i][h + 2] === "hit" && h < 7) {
                h = h + 1;
              }
              if (arr[i][h + 2] !== true && arr[i][h + 2] !== "hit")
                return i + "," + (h + 2);
            }
            //if (arr[i][j + 2] !== "hit" && arr[i][j + 2] !== true)
            //  return i + "," + (j + 2);
            if (over === "hit" && i > 1) {
              h = i;
              while (arr[h - 2][j] === "hit" && h > 2) {
                h = h - 1;
              }
              if (arr[h - 2][j] !== true && arr[h - 2][j] !== "hit")
                return h - 2 + "," + j;
            }
            //if (arr[i - 2][j] !== "hit" && arr[i - 2][j] !== true)
            //  return i - 2 + "," + j;
            if (under === "hit" && i < 8) {
              h = i;
              while (arr[h + 2][j] === "hit" && h < 7) {
                h = h + 1;
              }
              if (arr[h + 2][j] !== true && arr[h + 2][j] !== "hit")
                return h + 2 + "," + j;
            }
            //if (arr[i + 2][j] !== "hit" && arr[i + 2][j] !== true)
            //  return i + 2 + "," + j;
          }
          if (after !== true && after !== null && after !== "hit")
            return i + "," + (j + 1);
          if (before !== true && before !== null && before !== "hit")
            return i + "," + (j - 1);
          if (over !== true && over !== null && over !== "hit")
            return i - 1 + "," + j;
          if (under !== true && under !== null && under !== "hit")
            return i + 1 + "," + j;
        }
        before = after = over = under = null;
      }
    }
    return null;
  }
}
export { player };
