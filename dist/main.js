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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_classes_album_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/classes/album.js */ \"./src/modules/classes/album.js\");\n/* harmony import */ var _modules_classes_cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/classes/cd.js */ \"./src/modules/classes/cd.js\");\n/* harmony import */ var _modules_classes_track_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes/track.js */ \"./src/modules/classes/track.js\");\n\n\n\n// import { mainHolder } from './modules/commonElements.js';\nconst mainHolder = document.querySelector('#main');\nconst logoHolder = document.querySelector('#logo-holder');\n\nlogoHolder.innerHTML = '<h2>CDM</h2>';\nmainHolder.innerHTML = '<p>This is main section</p><br>';\nmainHolder.innerHTML += `<p>${(0,_modules_classes_album_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()}</p><br>`;\nmainHolder.innerHTML += `<p>${(0,_modules_classes_cd_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}</p><br>`;\nmainHolder.innerHTML += `<p>${(0,_modules_classes_track_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}</p><br><br>`;\n\n\n//# sourceURL=webpack://track-my-trance/./src/index.js?");

/***/ }),

/***/ "./src/modules/classes/album.js":
/*!**************************************!*\
  !*** ./src/modules/classes/album.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Album: () => (/* binding */ Album),\n/* harmony export */   \"default\": () => (/* binding */ albumTest)\n/* harmony export */ });\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/modules/classes/entity.js\");\n\n\nfunction albumTest() {\n  return 'This is album.js';\n}\n\nclass Album {\n  constructor(genre, title, artist, date, label, items, info, rating) {\n    this.entity = new _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](genre, title, artist, info, rating);\n    this.date = date;\n    this.label = label;\n    this.items = items;\n  }\n}\n\n\n//# sourceURL=webpack://track-my-trance/./src/modules/classes/album.js?");

/***/ }),

/***/ "./src/modules/classes/cd.js":
/*!***********************************!*\
  !*** ./src/modules/classes/cd.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CD: () => (/* binding */ CD),\n/* harmony export */   \"default\": () => (/* binding */ cdTest)\n/* harmony export */ });\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/modules/classes/entity.js\");\n\n\nfunction cdTest() {\n  return 'This is cd.js';\n}\n\nclass CD {\n  constructor(genre, title, artist, date, label, items, info, rating) {\n    this.entity = new _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](genre, title, artist, info, rating);\n    this.date = date;\n    this.label = label;\n    this.items = items;\n\n  }\n}\n\n\n//# sourceURL=webpack://track-my-trance/./src/modules/classes/cd.js?");

/***/ }),

/***/ "./src/modules/classes/entity.js":
/*!***************************************!*\
  !*** ./src/modules/classes/entity.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Entity)\n/* harmony export */ });\nclass Entity {\n  constructor(genre, title, artist, info, rating) {\n    this.genre = genre;\n    this.title = title;\n    this.arist = artist;\n    this.info = info;\n    this.rating = rating;\n  }\n}\n\n\n//# sourceURL=webpack://track-my-trance/./src/modules/classes/entity.js?");

/***/ }),

/***/ "./src/modules/classes/track.js":
/*!**************************************!*\
  !*** ./src/modules/classes/track.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Track: () => (/* binding */ Track),\n/* harmony export */   \"default\": () => (/* binding */ trackTest)\n/* harmony export */ });\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/modules/classes/entity.js\");\n\n\nfunction trackTest() {\n  return 'This is track.js';\n}\n\nclass Track {\n  constructor(genre, title, artist, length, info, rating) {\n    this.entity = new _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](genre, title, artist, info, rating);\n    this.length = length;\n  }\n}\n\n\n//# sourceURL=webpack://track-my-trance/./src/modules/classes/track.js?");

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