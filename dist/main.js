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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbar.js */ \"./src/modules/navbar.js\");\n/* harmony import */ var _modules_pages_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pages/add.js */ \"./src/modules/pages/add.js\");\n// import buildOverviewPage from './modules/pages/overview.js';\n\n\n\n// Set event listeners to buttons\n(0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// Load default page\n(0,_modules_pages_add_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://CD-Manager/./src/index.js?");

/***/ }),

/***/ "./src/modules/commonElements.js":
/*!***************************************!*\
  !*** ./src/modules/commonElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addForm: () => (/* binding */ addForm),\n/* harmony export */   addFormInput: () => (/* binding */ addFormInput),\n/* harmony export */   addFormInputSelect: () => (/* binding */ addFormInputSelect),\n/* harmony export */   addLegend: () => (/* binding */ addLegend),\n/* harmony export */   addSubmitButton: () => (/* binding */ addSubmitButton),\n/* harmony export */   addTitle: () => (/* binding */ addTitle),\n/* harmony export */   buttonAdd: () => (/* binding */ buttonAdd),\n/* harmony export */   buttonEdit: () => (/* binding */ buttonEdit),\n/* harmony export */   buttonOverview: () => (/* binding */ buttonOverview),\n/* harmony export */   buttonSearch: () => (/* binding */ buttonSearch),\n/* harmony export */   contentHolder: () => (/* binding */ contentHolder)\n/* harmony export */ });\n// Buttons\nconst buttonOverview = document.querySelector('#button-overview');\nconst buttonSearch = document.querySelector('#button-search');\nconst buttonEdit = document.querySelector('#button-edit');\nconst buttonAdd = document.querySelector('#button-add');\n\n// Content holder\nconst contentHolder = document.querySelector('#main');\n\n// Create title element\nfunction addTitle(title) {\n  const titleHolder = document.createElement('div');\n  titleHolder.append(title);\n\n  return titleHolder;\n}\n\n// Create form element\nfunction addForm() {\n  const titleHolder = document.createElement('form');\n\n  return titleHolder;\n}\n\n// Create label and 'text' input element\nfunction addFormInput(title, type, id, required) {\n  const formGroup = document.createElement('div');\n  const label = document.createElement('label');\n  const element = document.createElement(type);\n\n  // Set attributes\n  element.id = id;\n  element.required = required;\n  label.innerHTML = `<p>${title} :</p>`;\n  formGroup.classList.add('form-group');\n\n  // Add label and input element to form group\n  formGroup.append(label, element);\n\n  return formGroup;\n}\n\n// Create label and 'select' input element\nfunction addFormInputSelect(title, id, required) {\n  const formGroup = document.createElement('div');\n  const label = document.createElement('label');\n  const element = document.createElement('select');\n\n  // Set attributes\n  label.htmlFor = id;\n  element.id = id;\n  element.required = required;\n  label.innerHTML = `<p>${title} :</p>`;\n  formGroup.classList.add('form-group');\n\n  // Add label and input element to form group\n  formGroup.append(label, element);\n\n  return formGroup;\n}\n\n// Create legend\nfunction addLegend(value) {\n  const formGroup = document.createElement('div');\n  formGroup.classList.add('form-group');\n  formGroup.innerHTML = `<h6>${value}</h6>`;\n\n  return formGroup;\n}\n\n// Create form submit button\nfunction addSubmitButton() {\n  const button = document.createElement('button');\n  button.type = 'submit';\n  button.innerHTML = 'Add';\n\n  return button;\n}\n\n\n\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/commonElements.js?");

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setNavListeners)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonElements.js */ \"./src/modules/commonElements.js\");\n/* harmony import */ var _pages_overview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/overview.js */ \"./src/modules/pages/overview.js\");\n/* harmony import */ var _pages_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search.js */ \"./src/modules/pages/search.js\");\n/* harmony import */ var _pages_edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/edit.js */ \"./src/modules/pages/edit.js\");\n/* harmony import */ var _pages_add_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add.js */ \"./src/modules/pages/add.js\");\n\n\n\n\n\n\nfunction setNavListeners() {\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonOverview.addEventListener('click', _pages_overview_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonSearch.addEventListener('click', _pages_search_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonEdit.addEventListener('click', _pages_edit_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonAdd.addEventListener('click', _pages_add_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/navbar.js?");

/***/ }),

/***/ "./src/modules/pages/add.js":
/*!**********************************!*\
  !*** ./src/modules/pages/add.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildAddPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n\n\nfunction buildAddPage() {\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)();\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Add album, cd or track'));\n\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Genre*', type: 'select', id: 'genre', required: true,\n    },\n    {\n      label: 'Title*', type: 'input', id: 'title', required: true,\n    },\n    {\n      label: 'Artist*', type: 'input', id: 'artist', required: true,\n    },\n    {\n      label: 'Collaborators', type: 'input', id: 'collabs', required: false,\n    },\n    {\n      label: 'Year', type: 'select', id: 'year', required: false,\n    },\n    {\n      label: 'Label', type: 'input', id: 'label', required: false,\n    },\n    {\n      label: 'Items', type: 'input', id: 'items', required: false,\n    },\n    {\n      label: 'Info', type: 'input', id: 'info', required: false,\n    },\n    {\n      label: 'Rating', type: 'select', id: 'rating', required: false,\n    },\n  ];\n\n  formFields.forEach((field) => {\n    if (field.type === 'select') {\n      form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInputSelect)(field.label, field.id, field.required));\n    } else {\n      form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required));\n    }\n  });\n\n  // Add legend\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)());\n\n  // Put form to content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/add.js?");

/***/ }),

/***/ "./src/modules/pages/edit.js":
/*!***********************************!*\
  !*** ./src/modules/pages/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildEditPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n\n\nfunction buildEditPage() {\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.innerHTML = '<p>This is the edit page</p><br>';\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/edit.js?");

/***/ }),

/***/ "./src/modules/pages/overview.js":
/*!***************************************!*\
  !*** ./src/modules/pages/overview.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildOverviewPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n\n\nfunction buildOverviewPage() {\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.innerHTML = '<p>This is the overview page</p><br>';\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/overview.js?");

/***/ }),

/***/ "./src/modules/pages/search.js":
/*!*************************************!*\
  !*** ./src/modules/pages/search.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildSearchPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n\n\nfunction buildSearchPage() {\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.innerHTML = '<p>This is the search page</p><br>';\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/search.js?");

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