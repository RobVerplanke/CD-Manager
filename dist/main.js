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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbar.js */ \"./src/modules/navbar.js\");\n/* harmony import */ var _modules_pages_overview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pages/overview.js */ \"./src/modules/pages/overview.js\");\n// import buildOverviewPage from './modules/pages/overview.js';\n\n\n\n// Set event listeners to buttons\n(0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// Load default page\n(0,_modules_pages_overview_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://CD-Manager/./src/index.js?");

/***/ }),

/***/ "./src/modules/commonElements.js":
/*!***************************************!*\
  !*** ./src/modules/commonElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addForm: () => (/* binding */ addForm),\n/* harmony export */   addFormInput: () => (/* binding */ addFormInput),\n/* harmony export */   addLegend: () => (/* binding */ addLegend),\n/* harmony export */   addSubmitButton: () => (/* binding */ addSubmitButton),\n/* harmony export */   addTitle: () => (/* binding */ addTitle),\n/* harmony export */   buttonAddAlbum: () => (/* binding */ buttonAddAlbum),\n/* harmony export */   buttonAddCD: () => (/* binding */ buttonAddCD),\n/* harmony export */   buttonAddTrack: () => (/* binding */ buttonAddTrack),\n/* harmony export */   buttonEdit: () => (/* binding */ buttonEdit),\n/* harmony export */   buttonOverview: () => (/* binding */ buttonOverview),\n/* harmony export */   buttonSearch: () => (/* binding */ buttonSearch),\n/* harmony export */   clearContent: () => (/* binding */ clearContent),\n/* harmony export */   contentHolder: () => (/* binding */ contentHolder)\n/* harmony export */ });\n// Navigation buttons\nconst buttonOverview = document.querySelector('#button-overview');\nconst buttonSearch = document.querySelector('#button-search');\nconst buttonEdit = document.querySelector('#button-edit');\nconst buttonAddAlbum = document.querySelector('#drop-add-album');\nconst buttonAddCD = document.querySelector('#drop-add-cd');\nconst buttonAddTrack = document.querySelector('#drop-add-track');\n\n// Content holder\nconst contentHolder = document.querySelector('#main');\n\nfunction clearContent() {\n  contentHolder.innerHTML = '';\n}\n\n// Create title element\nfunction addTitle(title) {\n  const titleHolder = document.createElement('div');\n  titleHolder.innerHTML = `<h2>${title}</h2><br>`;\n\n  return titleHolder;\n}\n\n// Create form element\nfunction addForm(method) {\n  const newForm = document.createElement('form');\n  // newForm.action = 'https://httpbin.org/post';\n  newForm.action = '';\n\n  newForm.method = method;\n  return newForm;\n}\n\n// Create label and input element in a form-group div\nfunction addFormInput(elementList) {\n  const form = document.createElement('div');\n\n  // Itterate through list of elements\n  elementList.forEach((field) => {\n    const formGroup = document.createElement('div');\n    const labelElelemt = document.createElement('label');\n    const inputElement = document.createElement(`${field.type}`);\n\n    // Set element values and properties\n    formGroup.classList.add('form-group');\n\n    labelElelemt.htmlFor = `${field.id}`;\n    labelElelemt.innerHTML = `<p>${field.label} :</p>`;\n\n    inputElement.id = field.id;\n    inputElement.name = field.id;\n    inputElement.required = field.required;\n    inputElement.placeholder = `${field.placeHolder}`;\n\n    // Use textfield as deafault input element\n    if (field.type === 'input') inputElement.type = 'text';\n\n    // Use number element for amounts\n    if (field.id === 'tracks') {\n      inputElement.type = 'number';\n      inputElement.maxlength = '2';\n    }\n\n    // Set options for select elements\n    if (field.type === 'select') {\n      let defaultOption = '';\n\n      switch (field.label) {\n\n      // 1900-current year\n      case 'Year': {\n        const currentYear = new Date().getFullYear();\n        for (let i = currentYear; i > 1899; i--) {\n          // console.log(i);\n          const option = document.createElement('option');\n          option.value = i;\n          option.innerText = i;\n          inputElement.append(option);\n        }\n      }\n        break;\n\n        // CDs: 1-4 or more\n      case 'CDs': {\n        for (let i = 0; i < 4; i++) {\n          const option = document.createElement('option');\n          option.value = i + 1;\n          option.innerText = i + 1;\n          inputElement.append(option);\n        }\n\n        // Add extra option\n        const option5 = document.createElement('option');\n        option5.value = '5-or-more';\n        option5.innerText = '5+';\n        inputElement.append(option5);\n      }\n        break;\n\n        // Rating: 1-5 stars\n      case 'Rating':\n\n        // Add neutral (node) option, set as default\n        defaultOption = document.createElement('option');\n\n        // defaultOption.value = 'none';\n        defaultOption.innerText = '(none)';\n        inputElement.selectedIndex = 1;\n        inputElement.append(defaultOption);\n\n        for (let i = 0; i < 5; i++) {\n          const option = document.createElement('option');\n          option.value = i + 1;\n          option.innerText = '\\u2605'.repeat(i + 1);\n          inputElement.append(option);\n        }\n        break;\n\n        // Choose from all album titels\n      case 'Album': {\n\n        // Add neutral (node) option, set as default\n        defaultOption = document.createElement('option');\n        defaultOption.value = 'none';\n        defaultOption.innerText = '(none)';\n        inputElement.selectedIndex = 1;\n        inputElement.append(defaultOption);\n\n        // Add album titles to option list\n        for (let i = 0; i < 5; i++) {\n          const option = document.createElement('option');\n          option.innerText = i + 1;\n          inputElement.append(option);\n        }\n        break;\n      }\n      default:\n        break;\n      }\n    }\n\n    // Group label and element, add group to form\n    formGroup.append(labelElelemt, inputElement);\n    form.append(formGroup);\n  });\n\n  return form;\n}\n\n// Create legend\n\nfunction addLegend(value) {\n  const formGroup = document.createElement('div');\n  formGroup.classList.add('form-group');\n  formGroup.innerHTML = `<h6>${value}</h6>`;\n\n  return formGroup;\n}\n\n// Create form submit button\nfunction addSubmitButton(value) {\n  const button = document.createElement('button');\n  button.type = 'submit';\n  button.innerHTML = value;\n\n  return button;\n}\n\n\n\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/commonElements.js?");

/***/ }),

/***/ "./src/modules/form/formElements.js":
/*!******************************************!*\
  !*** ./src/modules/form/formElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAlbumElements: () => (/* binding */ addAlbumElements),\n/* harmony export */   addCDElements: () => (/* binding */ addCDElements),\n/* harmony export */   addTrackElements: () => (/* binding */ addTrackElements),\n/* harmony export */   editItemElements: () => (/* binding */ editItemElements),\n/* harmony export */   searchItemElements: () => (/* binding */ searchItemElements)\n/* harmony export */ });\n// All labels, elements and attribute values for each form\n\n// Search form\nconst searchItemElements = [\n  {\n    label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n  },\n  {\n    label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'Album, cd or track title...',\n  },\n  {\n    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',\n  },\n  {\n    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n  },\n  {\n    label: 'Year', type: 'select', id: 'year', required: false,\n  },\n  {\n    label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Label name...',\n  },\n  {\n    label: 'Rating', type: 'select', id: 'rating', required: false,\n  },\n];\n\n// Edit form\nconst editItemElements = [\n  {\n    label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n  },\n  {\n    label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n  },\n];\n\n// Add album form\nconst addAlbumElements = [\n  {\n    label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n  },\n  {\n    label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'Album title...',\n  },\n  {\n    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',\n  },\n  {\n    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n  },\n  {\n    label: 'Year', type: 'select', id: 'year', required: false,\n  },\n  {\n    label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Label name...',\n  },\n  {\n    label: 'CDs', type: 'select', id: 'items', required: false,\n  },\n  {\n    label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',\n  },\n  {\n    label: 'Rating', type: 'select', id: 'rating', required: false,\n  },\n];\n\n// Add CD form\nconst addCDElements = [\n  {\n    label: 'Album', type: 'select', id: 'album',\n  },\n  {\n    label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n  },\n  {\n    label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n  },\n  {\n    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',\n  },\n  {\n    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n  },\n  {\n    label: 'Year', type: 'select', id: 'year', required: false,\n  },\n  {\n    label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Label name...',\n  },\n  {\n    label: 'Tracks', type: 'input', id: 'tracks', required: false, placeHolder: 'Number of tracks...',\n  },\n  {\n    label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',\n  },\n  {\n    label: 'Rating', type: 'select', id: 'rating', required: false,\n  },\n];\n\n// Add track form\nconst addTrackElements = [\n  {\n    label: 'Select CD*', type: 'select', id: 'album', required: true,\n  },\n  {\n    label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n  },\n  {\n    label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n  },\n  {\n    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',\n  },\n  {\n    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n  },\n  {\n    label: 'Length', type: 'input', id: 'length', required: false, placeHolder: 'Length of track...',\n  },\n  {\n    label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',\n  },\n  {\n    label: 'Rating', type: 'select', id: 'rating', required: false,\n  },\n];\n\n\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/form/formElements.js?");

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setNavListeners)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonElements.js */ \"./src/modules/commonElements.js\");\n/* harmony import */ var _pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/buildFormPages.js */ \"./src/modules/pages/buildFormPages.js\");\n/* harmony import */ var _pages_overview_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/overview.js */ \"./src/modules/pages/overview.js\");\n\n\n\n\nfunction setNavListeners() {\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonOverview.addEventListener('click', _pages_overview_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonSearch.addEventListener('click', (0,_pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('get', 'Search', ''));\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonEdit.addEventListener('click', (0,_pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('get', 'Edit', ''));\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonAddAlbum.addEventListener('click', (0,_pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('post', 'Add', 'album'));\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonAddCD.addEventListener('click', (0,_pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('post', 'Add', 'cd'));\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonAddTrack.addEventListener('click', (0,_pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('post', 'Add', 'track'));\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/navbar.js?");

/***/ }),

/***/ "./src/modules/pages/buildFormPages.js":
/*!*********************************************!*\
  !*** ./src/modules/pages/buildFormPages.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildFormPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n/* harmony import */ var _form_formElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/formElements.js */ \"./src/modules/form/formElements.js\");\n\n\n\nfunction buildFormPage(method, action, type) {\n\n  // Create closure\n  return () => {\n    const itemType = type;\n    const submitMethod = method;\n    const formAction = action;\n\n    // Clear content holder\n    (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n    // Create form\n    const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)(submitMethod);\n    form.classList.add('form');\n\n    // Set and add form title\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)(`${formAction} ${itemType}`));\n\n    // Build related elements and add to form\n    if (formAction === 'Search') form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(_form_formElements_js__WEBPACK_IMPORTED_MODULE_1__.searchItemElements));\n    if (formAction === 'Edit') form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(_form_formElements_js__WEBPACK_IMPORTED_MODULE_1__.editItemElements));\n\n    if (formAction === 'Add' && itemType === 'album') {\n      form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(_form_formElements_js__WEBPACK_IMPORTED_MODULE_1__.addAlbumElements));\n      form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n    }\n    if (formAction === 'Add' && itemType === 'cd') {\n      form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(_form_formElements_js__WEBPACK_IMPORTED_MODULE_1__.addCDElements));\n      form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n    }\n    if (formAction === 'Add' && itemType === 'track') {\n      form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(_form_formElements_js__WEBPACK_IMPORTED_MODULE_1__.addTrackElements));\n      form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n    }\n\n    // Add submit button to form\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)(formAction));\n\n    // Put form in content section\n    _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n  };\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/buildFormPages.js?");

/***/ }),

/***/ "./src/modules/pages/overview.js":
/*!***************************************!*\
  !*** ./src/modules/pages/overview.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildOverviewPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n\n\nfunction buildOverviewPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Set title of content\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Overview'));\n\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/overview.js?");

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