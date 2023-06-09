/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_createGui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createGui */ \"./src/modules/createGui.js\");\n/* harmony import */ var _modules_placeShips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/placeShips */ \"./src/modules/placeShips.js\");\n\n\n\n\n\n\nlet gameboardPlayer = new _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard();\nlet computer = new _modules_player__WEBPACK_IMPORTED_MODULE_2__.player();\nlet gameboardComputer = new _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard();\nlet coordinates;\nlet playerLoses = false;\nlet computerLoses = false;\n\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"cruiser\", 3, gameboardPlayer);\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"destroyer\", 2, gameboardPlayer);\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"submarine\", 3, gameboardPlayer);\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"battleship\", 4, gameboardPlayer);\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"carrier\", 5, gameboardPlayer);\n\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"cruiser\", 3, gameboardComputer);\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"destroyer\", 2, gameboardComputer);\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"submarine\", 3, gameboardComputer);\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"battleship\", 4, gameboardComputer);\n(0,_modules_placeShips__WEBPACK_IMPORTED_MODULE_4__.setShipRandomly)(\"carrier\", 5, gameboardComputer);\n\ncreateGUI();\n(0,_modules_createGui__WEBPACK_IMPORTED_MODULE_3__.setMyShipsGUI)(gameboardPlayer.y);\n(0,_modules_createGui__WEBPACK_IMPORTED_MODULE_3__.setComputersShipsGUI)(gameboardComputer.y);\n\nfunction createGUI() {\n  const gameboardPl = document.querySelector(\".gameboardPlayer\");\n  const gameboardCo = document.querySelector(\".gameboardComputer\");\n  let elements = 100;\n  let fieldPlayer, fieldComputer;\n\n  for (let i = 0; i < elements; i++) {\n    fieldPlayer = document.createElement(\"div\");\n    fieldPlayer.setAttribute(\"class\", \"fieldPlayer\");\n    gameboardPl.appendChild(fieldPlayer);\n\n    fieldComputer = document.createElement(\"div\");\n    fieldComputer.setAttribute(\"class\", \"fieldComputer\");\n    fieldComputer.setAttribute(\"id\", i);\n    gameboardCo.appendChild(fieldComputer);\n  }\n\n  let fields = document.querySelectorAll(\".fieldComputer\");\n\n  fields.forEach((field) => {\n    field.addEventListener(\"click\", () => {\n      computerLoses = gameboardComputer.receiveAttack(\n        Math.floor(Number(field.id) / 10),\n        Number(field.id) % 10\n      );\n      if (computerLoses === true) printWinner(\"Player\");\n      if (field.textContent == \"\") {\n        while (true) {\n          field.textContent = \"•\";\n          field.setAttribute(\"class\", \"clickedfield\");\n          coordinates = computer.makeRandomShot(gameboardPlayer.y);\n          playerLoses = gameboardPlayer.receiveAttack(\n            Number(coordinates.split(\",\")[0]),\n            Number(coordinates.split(\",\")[1])\n          );\n          (0,_modules_createGui__WEBPACK_IMPORTED_MODULE_3__.computerShot)(\n            Number(coordinates.split(\",\")[0]),\n            Number(coordinates.split(\",\")[1])\n          );\n          if (playerLoses === true) printWinner(\"Computer\");\n          if (playerLoses === false) break;\n        }\n      } else if (field.textContent == \"X\")\n        field.setAttribute(\"class\", \"hiddenfield\");\n    });\n  });\n}\nfunction printWinner(winner) {\n  let text = document.querySelector(\".dialog\");\n  text.textContent = winner + \" wins the game\";\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/createGui.js":
/*!**********************************!*\
  !*** ./src/modules/createGui.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerShot: () => (/* binding */ computerShot),\n/* harmony export */   createGUI: () => (/* binding */ createGUI),\n/* harmony export */   setComputersShipsGUI: () => (/* binding */ setComputersShipsGUI),\n/* harmony export */   setMyShipsGUI: () => (/* binding */ setMyShipsGUI)\n/* harmony export */ });\nfunction createGUI() {\n  const gameboardPlayer = document.querySelector(\".gameboardPlayer\");\n  const gameboardComputer = document.querySelector(\".gameboardComputer\");\n  let elements = 100;\n  let fieldPlayer, fieldComputer;\n\n  for (let i = 0; i < elements; i++) {\n    fieldPlayer = document.createElement(\"div\");\n    fieldPlayer.setAttribute(\"class\", \"fieldPlayer\");\n    gameboardPlayer.appendChild(fieldPlayer);\n\n    fieldComputer = document.createElement(\"div\");\n    fieldComputer.setAttribute(\"class\", \"fieldComputer\");\n    gameboardComputer.appendChild(fieldComputer);\n  }\n\n  let fields = document.querySelectorAll(\".fieldComputer\");\n\n  fields.forEach((field) => {\n    field.addEventListener(\"click\", () => {\n      if (field.textContent == \"\") {\n        field.textContent = \"•\";\n        field.setAttribute(\"class\", \"clickedfield\");\n      } else if (field.textContent == \"X\")\n        field.setAttribute(\"class\", \"hiddenfield\");\n    });\n  });\n}\nfunction setMyShipsGUI(arr) {\n  let ships = document.querySelectorAll(\".fieldPlayer\");\n  let position;\n  for (let x = 0; x < arr.length; x++) {\n    for (let y = 0; y < arr[x].length; y++) {\n      if (arr[x][y] == false) continue;\n      else {\n        position = x * arr.length + y;\n        ships[position].textContent = \"X\";\n      }\n    }\n  }\n}\nfunction setComputersShipsGUI(arr) {\n  let ships = document.querySelectorAll(\".fieldComputer\");\n  let position;\n  for (let x = 0; x < arr.length; x++) {\n    for (let y = 0; y < arr[x].length; y++) {\n      if (arr[x][y] == false) continue;\n      else {\n        position = x * arr.length + y;\n        ships[position].textContent = \"X\";\n      }\n    }\n  }\n}\nfunction computerShot(x, y) {\n  let fields = document.querySelectorAll(\".fieldPlayer\");\n  let position = x * 10 + y;\n  if (fields[position].textContent === \"X\")\n    fields[position].classList.add(\"hiddenfield\");\n  else if (fields[position].textContent === \"\") {\n    fields[position].classList.add(\"clickedfield\");\n    fields[position].textContent = \"•\";\n  }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/createGui.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameboard: () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\nclass gameboard {\n  constructor() {\n    this.y = [];\n    this.length = 10;\n    this.shipsSunk = 0;\n    for (let i = 0; i < this.length; i++) {\n      this.y.push([]);\n      for (let j = 0; j < this.length; j++) {\n        this.y[i].push(false);\n      }\n    }\n    this.ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.ship();\n  }\n  place(item, x, y) {\n    this.y[x][y] = item;\n  }\n  receiveAttack(x, y) {\n    if (this.y[x][y] === false) {\n      this.y[x][y] = true;\n      return false;\n    } else {\n      let item = this.y[x][y];\n      this.y[x][y] = \"hit\";\n      this.ship.hit(item);\n      return this.controleShips();\n    }\n  }\n  controleShips() {\n    if (this.ship.ships === 0) return true;\n    else return \"hit\";\n  }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/placeShips.js":
/*!***********************************!*\
  !*** ./src/modules/placeShips.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setShipRandomly: () => (/* binding */ setShipRandomly)\n/* harmony export */ });\nfunction setShipRandomly(name, length, gameboard) {\n  let horizontal = true;\n  if (Math.floor(Math.random() * 2) > 0) horizontal = false;\n\n  let x = Math.floor(Math.random() * 10);\n  let y = Math.floor(Math.random() * 10);\n\n  if (horizontal === false) {\n    if (x + length > 9) {\n      for (let i = 0; i < length; i++) {\n        if (gameboard.y[x - i][y] === false) gameboard.y[x - i][y] = name;\n        else {\n          for (let j = i - 1; j > -1; j--) {\n            gameboard.y[x - j][y] = false;\n          }\n          setShipRandomly(name, length, gameboard);\n          return;\n        }\n      }\n    } else {\n      for (let i = 0; i < length; i++) {\n        if (gameboard.y[x + i][y] === false) gameboard.y[x + i][y] = name;\n        else {\n          for (let j = i - 1; j > -1; j--) {\n            gameboard.y[x + j][y] = false;\n          }\n          setShipRandomly(name, length, gameboard);\n          return;\n        }\n      }\n    }\n  } else {\n    if (y + length > 9) {\n      for (let i = 0; i < length; i++) {\n        if (gameboard.y[x][y - i] === false) gameboard.y[x][y - i] = name;\n        else {\n          for (let j = i - 1; j > -1; j--) {\n            gameboard.y[x][y - j] = false;\n          }\n          setShipRandomly(name, length, gameboard);\n          return;\n        }\n      }\n    } else {\n      for (let i = 0; i < length; i++) {\n        if (gameboard.y[x][y + i] === false) gameboard.y[x][y + i] = name;\n        else {\n          for (let j = i - 1; j > -1; j--) {\n            gameboard.y[x][y + j] = false;\n          }\n          setShipRandomly(name, length, gameboard);\n          return;\n        }\n      }\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/placeShips.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\nclass player {\n  constructor() {}\n\n  makeRandomShot(arr) {\n    let x = Math.floor(Math.random() * 10);\n    let y = Math.floor(Math.random() * 10);\n\n    let lastHit = this.searchForHit(arr);\n    console.log(lastHit);\n    if (lastHit != null) return lastHit;\n\n    if (arr[x][y] != \"hit\" && arr[x][y] != true) return x + \",\" + y;\n    else {\n      while (y < 10) {\n        if (arr[x][y] != \"hit\" && arr[x][y] != true) return x + \",\" + y;\n        else {\n          if (y == 9) {\n            y = 0;\n            if (x == 9) x = 0;\n            else x++;\n          } else y++;\n        }\n      }\n    }\n  }\n  searchForHit(arr) {\n    let before = null;\n    let after = null;\n    let over = null;\n    let under = null;\n    let positions = [before, after, over, under];\n    let h = 0;\n\n    for (let i = 0; i < arr.length; i++) {\n      for (let j = 0; j < arr[i].length; j++) {\n        if (arr[i][j] === \"hit\") {\n          if (j > 0) before = arr[i][j - 1];\n          if (j < 9) after = arr[i][j + 1];\n          if (i > 0) over = arr[i - 1][j];\n          if (i < 9) under = arr[i + 1][j];\n\n          if (positions.indexOf(\"hit\" !== -1)) {\n            if (before === \"hit\" && j > 1) {\n              h = j;\n              while (arr[i][h - 2] === \"hit\" && h > 2) {\n                h = h - 1;\n              }\n              if (arr[i][h - 2] !== true && arr[i][h - 2] !== \"hit\")\n                return i + \",\" + (h - 2);\n              //if (arr[i][j - 2] !== \"hit\" && arr[i][j - 2] !== true)\n              //  return i + \",\" + (j - 2);\n            }\n            if (after === \"hit\" && j < 8) {\n              h = j;\n              while (arr[i][h + 2] === \"hit\" && h < 7) {\n                h = h + 1;\n              }\n              if (arr[i][h + 2] !== true && arr[i][h + 2] !== \"hit\")\n                return i + \",\" + (h + 2);\n            }\n            //if (arr[i][j + 2] !== \"hit\" && arr[i][j + 2] !== true)\n            //  return i + \",\" + (j + 2);\n            if (over === \"hit\" && i > 1) {\n              h = i;\n              while (arr[h - 2][j] === \"hit\" && h > 2) {\n                h = h - 1;\n              }\n              if (arr[h - 2][j] !== true && arr[h - 2][j] !== \"hit\")\n                return h - 2 + \",\" + j;\n            }\n            //if (arr[i - 2][j] !== \"hit\" && arr[i - 2][j] !== true)\n            //  return i - 2 + \",\" + j;\n            if (under === \"hit\" && i < 8) {\n              h = i;\n              while (arr[h + 2][j] === \"hit\" && h < 7) {\n                h = h + 1;\n              }\n              if (arr[h + 2][j] !== true && arr[h + 2][j] !== \"hit\")\n                return h + 2 + \",\" + j;\n            }\n            //if (arr[i + 2][j] !== \"hit\" && arr[i + 2][j] !== true)\n            //  return i + 2 + \",\" + j;\n          }\n          if (after !== true && after !== null && after !== \"hit\")\n            return i + \",\" + (j + 1);\n          if (before !== true && before !== null && before !== \"hit\")\n            return i + \",\" + (j - 1);\n          if (over !== true && over !== null && over !== \"hit\")\n            return i - 1 + \",\" + j;\n          if (under !== true && under !== null && under !== \"hit\")\n            return i + 1 + \",\" + j;\n        }\n        before = after = over = under = null;\n      }\n    }\n    return null;\n  }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\n\nclass ship {\n  constructor() {\n    this.ships = 5;\n  }\n  carrier = {\n    length: 5,\n    hit: 0,\n    sunk: false,\n  };\n  battleship = {\n    length: 4,\n    hit: 0,\n    sunk: false,\n  };\n  cruiser = {\n    length: 3,\n    hit: 0,\n    sunk: false,\n  };\n  submarine = {\n    length: 3,\n    hit: 0,\n    sunk: false,\n  };\n  destroyer = {\n    length: 2,\n    hit: 0,\n    sunk: false,\n  };\n  hit(item) {\n    if (item === \"carrier\") {\n      this.carrier.hit++;\n      if (this.carrier.hit >= this.carrier.length) {\n        this.carrier.sunk = true;\n        this.ships--;\n      }\n    } else if (item === \"battleship\") {\n      this.battleship.hit++;\n      if (this.battleship.hit >= this.battleship.length) {\n        this.battleship.sunk = true;\n        this.ships--;\n      }\n    } else if (item === \"cruiser\") {\n      this.cruiser.hit++;\n      if (this.cruiser.hit >= this.cruiser.length) {\n        this.cruiser.sunk = true;\n        this.ships--;\n      }\n    } else if (item === \"submarine\") {\n      this.submarine.hit++;\n      if (this.submarine.hit >= this.submarine.length) {\n        this.submarine.sunk = true;\n        this.ships--;\n      }\n    } else if (item === \"destroyer\") {\n      this.destroyer.hit++;\n      if (this.destroyer.hit >= this.destroyer.length) {\n        this.destroyer.sunk = true;\n        this.ships--;\n      }\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;