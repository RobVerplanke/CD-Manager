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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addForm: () => (/* binding */ addForm),\n/* harmony export */   addFormInput: () => (/* binding */ addFormInput),\n/* harmony export */   addLegend: () => (/* binding */ addLegend),\n/* harmony export */   addSubmitButton: () => (/* binding */ addSubmitButton),\n/* harmony export */   addTitle: () => (/* binding */ addTitle),\n/* harmony export */   buttonAdd: () => (/* binding */ buttonAdd),\n/* harmony export */   buttonEdit: () => (/* binding */ buttonEdit),\n/* harmony export */   buttonOverview: () => (/* binding */ buttonOverview),\n/* harmony export */   buttonSearch: () => (/* binding */ buttonSearch),\n/* harmony export */   clearContent: () => (/* binding */ clearContent),\n/* harmony export */   contentHolder: () => (/* binding */ contentHolder)\n/* harmony export */ });\n// Navigation buttons\nconst buttonOverview = document.querySelector('#button-overview');\nconst buttonSearch = document.querySelector('#button-search');\nconst buttonEdit = document.querySelector('#button-edit');\nconst buttonAdd = document.querySelector('#button-add');\n\n// Content holder\nconst contentHolder = document.querySelector('#main');\n\nfunction clearContent() {\n  contentHolder.innerHTML = '';\n}\n\n// Create title element\nfunction addTitle(title) {\n  const titleHolder = document.createElement('div');\n  titleHolder.innerHTML = `<h2>${title}</h2><br>`;\n\n  return titleHolder;\n}\n\n// Create form element\nfunction addForm(method) {\n  const newForm = document.createElement('form');\n  // newForm.action = 'https://httpbin.org/post';\n  newForm.action = '';\n\n  newForm.method = method;\n  return newForm;\n}\n\n// Create label and input element in a form-group div\nfunction addFormInput(labelTitle, type, id, required, placeHolder = '') {\n  const formGroup = document.createElement('div');\n  const label = document.createElement('label');\n  const element = document.createElement(type);\n\n  if (type === 'input') element.type = 'text';\n\n  // Create options for selection elements\n  if (type === 'select') {\n    switch (labelTitle) {\n\n    // 1900-current year\n    case 'Year': {\n      const currentYear = new Date().getFullYear();\n      for (let i = currentYear; i > 1899; i--) {\n        // console.log(i);\n        const option = document.createElement('option');\n        option.value = i;\n        option.innerText = i;\n        element.append(option);\n      }\n    }\n      break;\n\n    // CDs: 1-4 or more\n    case 'CDs': {\n      for (let i = 0; i < 4; i++) {\n        const option = document.createElement('option');\n        option.value = i + 1;\n        option.innerText = i + 1;\n        element.append(option);\n      }\n\n      // Add extra option\n      const option5 = document.createElement('option');\n      option5.value = '5-or-more';\n      option5.innerText = '5+';\n      element.append(option5);\n    }\n      break;\n\n    // Rating: 1-5\n    case 'Rating':\n      for (let i = 0; i < 5; i++) {\n        const option = document.createElement('option');\n        option.innerText = '\\u2605'.repeat(i + 1);\n        element.append(option);\n      }\n\n      break;\n\n    // Album names\n    case 'Album': {\n\n      // Add extra option, set as default\n      const defaultOption = document.createElement('option');\n      defaultOption.value = 'none';\n      defaultOption.innerText = '(none)';\n      element.selectedIndex = 1;\n      element.append(defaultOption);\n\n      // Add album titles to option list\n      for (let i = 0; i < 5; i++) {\n        const option = document.createElement('option');\n        option.innerText = i + 1;\n        element.append(option);\n      }\n\n\n      break;\n    }\n\n\n    default:\n\n      break;\n    }\n  }\n\n  // Set attributes\n  element.id = id;\n  element.name = id;\n  element.required = required;\n  element.placeholder = placeHolder;\n  label.htmlFor = id;\n  label.innerHTML = `<p>${labelTitle} :</p>`;\n  formGroup.classList.add('form-group');\n\n  // Add label and input element to form-group\n  formGroup.append(label, element);\n\n  return formGroup;\n}\n\n// Create legend\nfunction addLegend(value) {\n  const formGroup = document.createElement('div');\n  formGroup.classList.add('form-group');\n  formGroup.innerHTML = `<h6>${value}</h6>`;\n\n  return formGroup;\n}\n\n// Create form submit button\nfunction addSubmitButton(value) {\n  const button = document.createElement('button');\n  button.type = 'submit';\n  button.innerHTML = value;\n\n  return button;\n}\n\n\n\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/commonElements.js?");

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setNavListeners)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonElements.js */ \"./src/modules/commonElements.js\");\n/* harmony import */ var _pages_overview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/overview.js */ \"./src/modules/pages/overview.js\");\n/* harmony import */ var _pages_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search.js */ \"./src/modules/pages/search.js\");\n/* harmony import */ var _pages_edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/edit.js */ \"./src/modules/pages/edit.js\");\n/* harmony import */ var _pages_add_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add.js */ \"./src/modules/pages/add.js\");\n\n\n\n\n\n\nfunction setNavListeners() {\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonOverview.addEventListener('click', _pages_overview_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonSearch.addEventListener('click', _pages_search_js__WEBPACK_IMPORTED_MODULE_2__.buildSearchTrackPage);\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonEdit.addEventListener('click', _pages_edit_js__WEBPACK_IMPORTED_MODULE_3__.buildEditTrackPage);\n  // buttonAdd.addEventListener('click', buildAddAlbumPage);\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonAdd.addEventListener('click', _pages_add_js__WEBPACK_IMPORTED_MODULE_4__.buildAddCDPage);\n  // buttonAdd.addEventListener('click', buildAddTrackPage);\n\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/navbar.js?");

/***/ }),

/***/ "./src/modules/pages/add.js":
/*!**********************************!*\
  !*** ./src/modules/pages/add.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildAddAlbumPage: () => (/* binding */ buildAddAlbumPage),\n/* harmony export */   buildAddCDPage: () => (/* binding */ buildAddCDPage),\n/* harmony export */   buildAddTrackPage: () => (/* binding */ buildAddTrackPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n\n\nfunction buildAddAlbumPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)('post');\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Add album'));\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n    },\n    {\n      label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'Album title...',\n    },\n    {\n      label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',\n    },\n    {\n      label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n    },\n    {\n      label: 'Year', type: 'select', id: 'year', required: false,\n    },\n    {\n      label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Label name...',\n    },\n    {\n      label: 'CDs', type: 'select', id: 'items', required: false,\n    },\n    {\n      label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',\n    },\n    {\n      label: 'Rating', type: 'select', id: 'rating', required: false,\n    },\n  ];\n\n  formFields.forEach((field) => {\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required, field.placeHolder));\n  });\n\n  // Add legend\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)('Add'));\n\n  // Put form in content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\nfunction buildAddCDPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)('post');\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Add CD'));\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Album', type: 'select', id: 'album',\n    },\n    {\n      label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n    },\n    {\n      label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n    },\n    {\n      label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',\n    },\n    {\n      label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n    },\n    {\n      label: 'Year', type: 'select', id: 'year', required: false,\n    },\n    {\n      label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'If present...',\n    },\n    {\n      label: 'Tracks', type: 'input', id: 'items', required: false, placeHolder: 'Number of tracks...',\n    },\n    {\n      label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',\n    },\n    {\n      label: 'Rating', type: 'select', id: 'rating', required: false,\n    },\n  ];\n\n  formFields.forEach((field) => {\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required, field.placeHolder));\n  });\n\n  // Add legend\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)('Add'));\n\n  // Put form in content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\nfunction buildAddTrackPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)('post');\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Add Track'));\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Select CD*', type: 'select', id: 'album', required: true,\n    },\n    {\n      label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n    },\n    {\n      label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n    },\n    {\n      label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',\n    },\n    {\n      label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n    },\n    {\n      label: 'Length', type: 'input', id: 'length', required: false, placeHolder: 'Length of track...',\n    },\n    {\n      label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',\n    },\n    {\n      label: 'Rating', type: 'select', id: 'rating', required: false,\n    },\n  ];\n\n  formFields.forEach((field) => {\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required, field.placeHolder));\n  });\n\n  // Add legend\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)('Add'));\n\n  // Put form in content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/add.js?");

/***/ }),

/***/ "./src/modules/pages/edit.js":
/*!***********************************!*\
  !*** ./src/modules/pages/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildEditAlbumPage: () => (/* binding */ buildEditAlbumPage),\n/* harmony export */   buildEditCDPage: () => (/* binding */ buildEditCDPage),\n/* harmony export */   buildEditTrackPage: () => (/* binding */ buildEditTrackPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n\n\nfunction buildEditAlbumPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)('get');\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Edit album'));\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n    },\n    {\n      label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n    },\n  ];\n\n  formFields.forEach((field) => {\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required, field.placeHolder));\n  });\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)('Search'));\n\n  // Put form in content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\nfunction buildEditCDPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)('get');\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Edit CD'));\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n    },\n    {\n      label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n    },\n  ];\n\n  formFields.forEach((field) => {\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required, field.placeHolder));\n  });\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)('Search'));\n\n  // Put form in content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\nfunction buildEditTrackPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)('get');\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Edit track'));\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n    },\n    {\n      label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n    },\n  ];\n\n  formFields.forEach((field) => {\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required, field.placeHolder));\n  });\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)('Search'));\n\n  // Put form in content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/edit.js?");

/***/ }),

/***/ "./src/modules/pages/overview.js":
/*!***************************************!*\
  !*** ./src/modules/pages/overview.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildOverviewPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n\n\nfunction buildOverviewPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n\n  // Set title of content\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Overview'));\n\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/overview.js?");

/***/ }),

/***/ "./src/modules/pages/search.js":
/*!*************************************!*\
  !*** ./src/modules/pages/search.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildSearchAlbumPage: () => (/* binding */ buildSearchAlbumPage),\n/* harmony export */   buildSearchCDPage: () => (/* binding */ buildSearchCDPage),\n/* harmony export */   buildSearchTrackPage: () => (/* binding */ buildSearchTrackPage)\n/* harmony export */ });\n/* harmony import */ var _commonElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonElements.js */ \"./src/modules/commonElements.js\");\n\n\nfunction buildSearchAlbumPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)('get');\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Search album'));\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n    },\n    {\n      label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'Album title...',\n    },\n  ];\n\n  formFields.forEach((field) => {\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required, field.placeHolder));\n  });\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)('Search'));\n\n  // Put form in content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\nfunction buildSearchCDPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)('get');\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Search CD'));\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n    },\n    {\n      label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n    },\n  ];\n\n  formFields.forEach((field) => {\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required, field.placeHolder));\n  });\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)('Search'));\n\n  // Put form in content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\nfunction buildSearchTrackPage() {\n\n  // Reset content holder\n  (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n  // Create form\n  const form = (0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)('get');\n\n  // Set title of content\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addTitle)('Search track'));\n\n  // Add labels and input fields\n  const formFields = [\n    {\n      label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n    },\n    {\n      label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'Track title...',\n    },\n  ];\n\n  formFields.forEach((field) => {\n    form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(field.label, field.type, field.id, field.required, field.placeHolder));\n  });\n\n  // Add submit button\n  form.append((0,_commonElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)('Search'));\n\n  // Put form in content section\n  _commonElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append(form);\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/search.js?");

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