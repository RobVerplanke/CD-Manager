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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/components/navbar.js */ \"./src/modules/components/navbar.js\");\n/* harmony import */ var _modules_pages_overview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pages/overview.js */ \"./src/modules/pages/overview.js\");\n// import buildOverviewPage from './modules/pages/overview.js';\n\n\n\n// Set event listeners to buttons\n(0,_modules_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// Load default page\n(0,_modules_pages_overview_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://CD-Manager/./src/index.js?");

/***/ }),

/***/ "./src/modules/commonContentElements.js":
/*!**********************************************!*\
  !*** ./src/modules/commonContentElements.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addContent: () => (/* binding */ addContent),\n/* harmony export */   addContentTitle: () => (/* binding */ addContentTitle),\n/* harmony export */   contentHolder: () => (/* binding */ contentHolder)\n/* harmony export */ });\n// Content holder\nconst contentHolder = document.querySelector('#main');\n\n// Create title element\nfunction addContentTitle(title) {\n  const titleHolder = document.createElement('div');\n\n  titleHolder.classList.add('content-title');\n  titleHolder.innerHTML = `${title}<br>`;\n\n  return titleHolder;\n}\n\n// Create content section\nfunction addContent(title, data) {\n  contentHolder.innerHTML = `<h3>${title} :</h3>${data}`;\n}\n\n\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/commonContentElements.js?");

/***/ }),

/***/ "./src/modules/commonFormElements.js":
/*!*******************************************!*\
  !*** ./src/modules/commonFormElements.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addForm: () => (/* binding */ addForm),\n/* harmony export */   addFormInput: () => (/* binding */ addFormInput),\n/* harmony export */   addFormTitle: () => (/* binding */ addFormTitle),\n/* harmony export */   addLegend: () => (/* binding */ addLegend),\n/* harmony export */   addSubmitButton: () => (/* binding */ addSubmitButton),\n/* harmony export */   buttonAddAlbum: () => (/* binding */ buttonAddAlbum),\n/* harmony export */   buttonAddCD: () => (/* binding */ buttonAddCD),\n/* harmony export */   buttonAddTrack: () => (/* binding */ buttonAddTrack),\n/* harmony export */   buttonOverview: () => (/* binding */ buttonOverview),\n/* harmony export */   buttonSearch: () => (/* binding */ buttonSearch),\n/* harmony export */   formHolder: () => (/* binding */ formHolder)\n/* harmony export */ });\n// Navigation buttons\nconst buttonOverview = document.querySelector('#button-overview');\nconst buttonSearch = document.querySelector('#button-search');\nconst buttonAddAlbum = document.querySelector('#drop-add-album');\nconst buttonAddCD = document.querySelector('#drop-add-cd');\nconst buttonAddTrack = document.querySelector('#drop-add-track');\nconst formHolder = document.querySelector('#main');\n\n// Create title element\nfunction addFormTitle(title) {\n  const titleHolder = document.createElement('div');\n\n  titleHolder.classList.add('content-title');\n  titleHolder.innerHTML = `${title}<br>`;\n\n  return titleHolder;\n}\n\n// Create form element\nfunction addForm(method) {\n  const newForm = document.createElement('form');\n\n  // newForm.action = 'https://httpbin.org/post';\n  newForm.action = '';\n\n  newForm.method = method;\n  return newForm;\n}\n\n// Set label element attributes\nfunction setLabelElement(element, htmlFor, innerText) {\n  const label = element;\n\n  label.htmlFor = htmlFor;\n  label.innerHTML = innerText;\n}\n\n// Set input element attributes\nfunction setInputElement(element, id, req, placeholder) {\n  const input = element;\n\n  input.id = id;\n  input.name = id;\n  input.required = req;\n  input.placeholder = placeholder;\n}\n\n// Create label and input element in a form-group div\nfunction addFormInput(elementList) {\n  const form = document.createElement('div');\n\n  // Itterate through list of elements\n  elementList.forEach((field) => {\n    const formGroup = document.createElement('div');\n    const labelElelemt = document.createElement('label');\n    const inputElement = document.createElement(`${field.type}`);\n\n    // Set element values and properties\n    formGroup.classList.add('form-group');\n    setLabelElement(labelElelemt, `${field.id}`, `<p>${field.label} :</p>`);\n    setInputElement(inputElement, field.id, field.required, field.placeHolder);\n\n    // Use textfield as default input element\n    if (field.type === 'input') inputElement.type = 'text';\n\n    // Use number element for amounts\n    if (field.id === 'tracks' || field.id === 'discs') {\n      inputElement.type = 'number';\n      inputElement.maxlength = '2';\n    }\n\n    // Set options for select elements\n    if (field.type === 'select') {\n      let defaultOption = '';\n\n      switch (field.label) {\n\n      // 1900-current year\n      case 'Year': {\n        const currentYear = new Date().getFullYear();\n\n        for (let i = currentYear; i > 1899; i--) {\n          // console.log(i);\n          const option = document.createElement('option');\n          option.value = i;\n          option.innerText = i;\n          inputElement.append(option);\n        }\n      }\n        break;\n\n        // CDs: 1-4 or more\n      case 'CDs': {\n        for (let i = 0; i < 4; i++) {\n          const option = document.createElement('option');\n\n          option.value = i + 1;\n          option.innerText = i + 1;\n          inputElement.append(option);\n        }\n\n        // Add extra option\n        const option5 = document.createElement('option');\n\n        option5.value = '5-or-more';\n        option5.innerText = '5+';\n        inputElement.append(option5);\n      }\n        break;\n\n        // Rating: 1-5 stars\n      case 'Rating':\n\n        // Add neutral (node) option, set as default\n        defaultOption = document.createElement('option');\n\n        // defaultOption.value = 'none';\n        defaultOption.innerText = '(none)';\n        inputElement.selectedIndex = 1;\n        inputElement.append(defaultOption);\n\n        for (let i = 0; i < 5; i++) {\n          const option = document.createElement('option');\n\n          option.value = i + 1;\n          option.innerText = '\\u2605'.repeat(i + 1);\n          inputElement.append(option);\n        }\n        break;\n\n        // Choose from all album titels\n      case 'Album': {\n\n        // Add neutral (node) option, set as default\n        defaultOption = document.createElement('option');\n        defaultOption.value = 'none';\n        defaultOption.innerText = '(none)';\n        inputElement.selectedIndex = 1;\n        inputElement.append(defaultOption);\n\n        // Add album titles to option list\n        for (let i = 0; i < 5; i++) {\n          const option = document.createElement('option');\n\n          option.innerText = i + 1;\n          inputElement.append(option);\n        }\n        break;\n      }\n      default:\n        break;\n      }\n    }\n\n    // Group label and element, add group to form\n    formGroup.append(labelElelemt, inputElement);\n    form.append(formGroup);\n  });\n\n  return form;\n}\n\n// Create legend\n\nfunction addLegend(value) {\n  const formGroup = document.createElement('div');\n\n  formGroup.classList.add('form-group');\n  formGroup.innerHTML = `<h6>${value}</h6>`;\n\n  return formGroup;\n}\n\n// Create form submit button\nfunction addSubmitButton(value) {\n  const button = document.createElement('button');\n\n  button.type = 'submit';\n  button.innerHTML = value;\n\n  return button;\n}\n\n\n\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/commonFormElements.js?");

/***/ }),

/***/ "./src/modules/components/navbar.js":
/*!******************************************!*\
  !*** ./src/modules/components/navbar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setNavListeners)\n/* harmony export */ });\n/* harmony import */ var _commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonFormElements.js */ \"./src/modules/commonFormElements.js\");\n/* harmony import */ var _pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/buildFormPages.js */ \"./src/modules/pages/buildFormPages.js\");\n/* harmony import */ var _pages_overview_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/overview.js */ \"./src/modules/pages/overview.js\");\n\n\n\n\nfunction setNavListeners() {\n  _commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonOverview.addEventListener('click', _pages_overview_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  _commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonSearch.addEventListener('click', (0,_pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('get', 'Search', ''));\n  _commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonAddAlbum.addEventListener('click', (0,_pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('post', 'Add', 'album'));\n  _commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonAddCD.addEventListener('click', (0,_pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('post', 'Add', 'cd'));\n  _commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.buttonAddTrack.addEventListener('click', (0,_pages_buildFormPages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('post', 'Add', 'track'));\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/components/navbar.js?");

/***/ }),

/***/ "./src/modules/form/formElements.js":
/*!******************************************!*\
  !*** ./src/modules/form/formElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAlbumElements: () => (/* binding */ addAlbumElements),\n/* harmony export */   addCDElements: () => (/* binding */ addCDElements),\n/* harmony export */   addTrackElements: () => (/* binding */ addTrackElements),\n/* harmony export */   searchItemElements: () => (/* binding */ searchItemElements)\n/* harmony export */ });\n// All labels, elements and attribute values for each form\n\n// Search form\nconst searchItemElements = [\n  {\n    label: 'Artist', type: 'input', id: 'artist', required: false, placeHolder: 'Artist name...',\n  },\n  {\n    label: 'Title', type: 'input', id: 'title', required: false, placeHolder: 'Album, cd or track title...',\n  },\n  {\n    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of music...',\n  },\n  {\n    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n  },\n  {\n    label: 'Year', type: 'select', id: 'year', required: false,\n  },\n  {\n    label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Label name...',\n  },\n  {\n    label: 'Rating', type: 'select', id: 'rating', required: false,\n  },\n];\n\n// Add album form\nconst addAlbumElements = [\n  {\n    label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n  },\n  {\n    label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'Album title...',\n  },\n  {\n    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of music...',\n  },\n  {\n    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n  },\n  {\n    label: 'Year', type: 'select', id: 'year', required: false,\n  },\n  {\n    label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Label name...',\n  },\n  {\n    label: 'CDs', type: 'select', id: 'items', required: false,\n  },\n  {\n    label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',\n  },\n  {\n    label: 'Rating', type: 'select', id: 'rating', required: false,\n  },\n];\n\n// Add CD form\nconst addCDElements = [\n  {\n    label: 'Album', type: 'select', id: 'album',\n  },\n  {\n    label: 'Disc nr.', type: 'input', id: 'discs',\n  },\n  {\n    label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n  },\n  {\n    label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n  },\n  {\n    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of music...',\n  },\n  {\n    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n  },\n  {\n    label: 'Year', type: 'select', id: 'year', required: false,\n  },\n  {\n    label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Label name...',\n  },\n  {\n    label: 'Tracks', type: 'input', id: 'tracks', required: false, placeHolder: 'Number of tracks...',\n  },\n  {\n    label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',\n  },\n  {\n    label: 'Rating', type: 'select', id: 'rating', required: false,\n  },\n];\n\n// Add track form\nconst addTrackElements = [\n  {\n    label: 'Select CD*', type: 'select', id: 'album', required: true,\n  },\n  {\n    label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',\n  },\n  {\n    label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',\n  },\n  {\n    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of music...',\n  },\n  {\n    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',\n  },\n  {\n    label: 'Length', type: 'input', id: 'length', required: false, placeHolder: 'Length of track...',\n  },\n  {\n    label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',\n  },\n  {\n    label: 'Rating', type: 'select', id: 'rating', required: false,\n  },\n];\n\n\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/form/formElements.js?");

/***/ }),

/***/ "./src/modules/pages/buildFormPages.js":
/*!*********************************************!*\
  !*** ./src/modules/pages/buildFormPages.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildFormPage)\n/* harmony export */ });\n/* harmony import */ var _commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonFormElements.js */ \"./src/modules/commonFormElements.js\");\n/* harmony import */ var _form_formElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/formElements.js */ \"./src/modules/form/formElements.js\");\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ \"./src/modules/utils/utils.js\");\n\n\n\n\nfunction buildFormPage(method, action, type) {\n\n  // Create closure\n  return () => {\n    const itemType = type;\n    const submitMethod = method;\n    const formAction = action;\n\n    // Clear content holder\n    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.clearContent)();\n\n    // Create form\n    const form = (0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addForm)(submitMethod);\n    form.classList.add('form');\n\n    // Set and add form title\n    form.append((0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormTitle)(`${formAction} ${itemType}`));\n\n    // Build related elements and add to form\n    if (formAction === 'Search') form.append((0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(_form_formElements_js__WEBPACK_IMPORTED_MODULE_1__.searchItemElements));\n\n    if (formAction === 'Add' && itemType === 'album') {\n      form.append((0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(_form_formElements_js__WEBPACK_IMPORTED_MODULE_1__.addAlbumElements));\n      form.append((0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n    }\n    if (formAction === 'Add' && itemType === 'cd') {\n      form.append((0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(_form_formElements_js__WEBPACK_IMPORTED_MODULE_1__.addCDElements));\n      form.append((0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n    }\n    if (formAction === 'Add' && itemType === 'track') {\n      form.append((0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addFormInput)(_form_formElements_js__WEBPACK_IMPORTED_MODULE_1__.addTrackElements));\n      form.append((0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addLegend)('* Required'));\n    }\n\n    // Add submit button to form\n    form.append((0,_commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.addSubmitButton)(formAction));\n\n    // Put form in content section\n    _commonFormElements_js__WEBPACK_IMPORTED_MODULE_0__.formHolder.append(form);\n  };\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/buildFormPages.js?");

/***/ }),

/***/ "./src/modules/pages/overview.js":
/*!***************************************!*\
  !*** ./src/modules/pages/overview.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildOverviewPage)\n/* harmony export */ });\n/* harmony import */ var _commonContentElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonContentElements.js */ \"./src/modules/commonContentElements.js\");\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ \"./src/modules/utils/utils.js\");\n\n\n\nfunction buildOverviewPage() {\n\n  // Reset content holder\n  (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.clearContent)();\n\n  // Set title of content\n  _commonContentElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.append((0,_commonContentElements_js__WEBPACK_IMPORTED_MODULE_0__.addContentTitle)('Overview'));\n\n  _commonContentElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.innerHTML += `Total albums: ${(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.getTotalAlbums)()}<br>`;\n  _commonContentElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.innerHTML += `Total cd's: ${(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.getTotalCds)()}<br>`;\n  _commonContentElements_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.innerHTML += `Total tracks: ${(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.getTotalTracks)()}`;\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/pages/overview.js?");

/***/ }),

/***/ "./src/modules/utils/api.js":
/*!**********************************!*\
  !*** ./src/modules/utils/api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dist_data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dist/data/data.json */ \"./dist/data/data.json\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ data: _dist_data_data_json__WEBPACK_IMPORTED_MODULE_0__ });\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/utils/api.js?");

/***/ }),

/***/ "./src/modules/utils/utils.js":
/*!************************************!*\
  !*** ./src/modules/utils/utils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearContent: () => (/* binding */ clearContent),\n/* harmony export */   getTotalAlbums: () => (/* binding */ getTotalAlbums),\n/* harmony export */   getTotalCds: () => (/* binding */ getTotalCds),\n/* harmony export */   getTotalTracks: () => (/* binding */ getTotalTracks)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/utils/api.js\");\n\n\nfunction getTotalAlbums() {\n  return _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].data.albums.length;\n}\n\nfunction getTotalCds() {\n  return _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].data.cds.length;\n}\n\nfunction getTotalTracks() {\n  return _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].data.tracks.length;\n}\n\nfunction clearContent() {\n  const formHolder = document.querySelector('#main');\n  formHolder.innerHTML = '';\n}\n\n\n//# sourceURL=webpack://CD-Manager/./src/modules/utils/utils.js?");

/***/ }),

/***/ "./dist/data/data.json":
/*!*****************************!*\
  !*** ./dist/data/data.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"albums\":[{\"id\":\"album-1\",\"title\":\"Nyana\",\"artist\":\"Tiësto\",\"year\":2003,\"collaborators\":\"\",\"info\":\"Track 1.01: Incorrectly listed as \\\\\"M. Mayer - Love Is Stronger Than Pride\\\\\"\\\\nTrack 1.12: Incorrectly listed as the \\\\\"Original Mix\\\\\"\",\"label\":\"Black Hole Recordings\",\"country\":\"Netherlands\",\"releaseDate\":\"May 5, 2003\",\"genre\":\"Electronic\",\"style\":[\"Trance\",\"Techno\",\"Progressive Trance\"],\"cds\":[\"cd-1\",\"cd-2\"],\"added\":\"16-02-24\",\"img\":\"https://i.discogs.com/fzY1IxFHTL18aAFlXr-ql3Flmv_wdzIU_lShZ2NUa_k/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDgx/NC0xMjM5ODk3NTY0/LmpwZWc.jpeg\",\"views\":0}],\"cds\":[{\"id\":\"cd-1\",\"album\":\"album-1\",\"title\":\"OUTDOOR\",\"artist\":\"Tiësto\",\"collaborators\":\"\",\"disc\":\"1/2\",\"tracks\":[\"track-1\",\"track-2\",\"track-3\",\"track-4\",\"track-5\",\"track-6\",\"track-7\",\"track-8\",\"track-9\",\"track-10\",\"track-11\",\"track-12\",\"track-13\",\"track-14\"],\"added\":\"16-02-24\",\"img\":\"https://i.discogs.com/fzY1IxFHTL18aAFlXr-ql3Flmv_wdzIU_lShZ2NUa_k/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDgx/NC0xMjM5ODk3NTY0/LmpwZWc.jpeg\",\"views\":0},{\"id\":\"cd-2\",\"album\":\"album-1\",\"title\":\"INDOOR\",\"artist\":\"Tiësto\",\"collaborators\":\"\",\"disc\":\"2/2\",\"tracks\":[\"track-15\",\"track-16\",\"track-17\",\"track-18\",\"track-19\",\"track-20\",\"track-21\",\"track-22\",\"track-23\",\"track-24\",\"track-25\",\"track-26\",\"track-27\"],\"added\":\"16-02-24\",\"img\":\"https://i.discogs.com/fzY1IxFHTL18aAFlXr-ql3Flmv_wdzIU_lShZ2NUa_k/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDgx/NC0xMjM5ODk3NTY0/LmpwZWc.jpeg\",\"views\":0}],\"tracks\":[{\"id\":\"track-1\",\"title\":\"Supertiel\",\"artist\":\"Reinhard Voigt\",\"collaborators\":\"\",\"remix\":\"\",\"length\":\"7:05\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-2\",\"title\":\"Chutney (Size 9 Reinterpretation)\",\"artist\":\"Tom Mangan\",\"collaborators\":\"\",\"remix\":[\"Size 9\"],\"length\":\"4:48\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-3\",\"title\":\"Acapulco\",\"artist\":\"The Ambush\",\"collaborators\":[\"Oliver Lieb\"],\"remix\":\"\",\"length\":\"3:38\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-4\",\"title\":\"Obsession (Frank Biazzi Remix)\",\"artist\":\"Tiësto Vs. Junkie XL\",\"collaborators\":[\"Tom Holkenborg\"],\"remix\":[\"Frank Biazzi\"],\"length\":\"3:52\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-5\",\"title\":\"Totem\",\"artist\":\"Planisphere\",\"collaborators\":[\"Georges Petkidis\",\"L-Vee\"],\"remix\":\"\",\"length\":\"8:00\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-6\",\"title\":\"Let The Light Shine In\",\"artist\":\"Darren Tate Vs. Jono Grant\",\"collaborators\":\"\",\"remix\":\"\",\"length\":\"6:16\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-7\",\"title\":\"Inca\",\"artist\":\"Midway\",\"collaborators\":[\"Ralph Barendse\"],\"remix\":\"\",\"length\":\"3:55\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-8\",\"title\":\"Nyana\",\"artist\":\"Tiësto\",\"collaborators\":\"\",\"remix\":\"\",\"length\":\"7:34\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-9\",\"title\":\"Venus (Meant To Be Your Lover) (Tiësto Remix)\",\"artist\":\"DJ Cor Fijneman Featuring Jan Johnston\",\"collaborators\":[\"Roberto Scilatti (Tiësto)\"],\"remix\":[\"Tiësto\"],\"length\":\"4:49\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-10\",\"title\":\"Tears From The Moon (Tiësto In Search Of Sunrise Remix)\",\"artist\":\"Conjure One Feat. Sinéad O\\'Connor\",\"collaborators\":[\"Billy Steinberg\",\"Kyoko Baertsoen\",\"Rick Nowels\",\"Sinéad O\\'Connor\"],\"remix\":[\"Tiësto\"],\"length\":\"6:31\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-11\",\"title\":\"Electronic Malfunction\",\"artist\":\"DJ Ton T.B.\",\"collaborators\":[\"Erik De Koning\"],\"remix\":\"\",\"length\":\"5:40\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-12\",\"title\":\"Love Angel (M.I.K.E. Remix)\",\"artist\":\"The Gift (2)\",\"collaborators\":[\"M.I.K.E.\",\"Mark Dedross\"],\"remix\":[\"M.I.K.E.\"],\"length\":\"5:22\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-13\",\"title\":\"Urban Shakedown (Original Mix)\",\"artist\":\"Solar Factor\",\"collaborators\":[\"M.I.K.E.\"],\"remix\":\"\",\"length\":\"3:31\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-14\",\"title\":\"Mistral\",\"artist\":\"GTR\",\"collaborators\":\"\",\"remix\":\"\",\"length\":\"6:11\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-15\",\"title\":\"Destiny Sunrise\",\"artist\":\"Catcher\",\"collaborators\":[\"Brendan Webster\",\"Dave Webster\"],\"remix\":\"\",\"length\":\"5:50\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-16\",\"title\":\"In Your Eyes (Blue Mix)\",\"artist\":\"Filterheadz Present Orange 3\",\"collaborators\":[\"Bert Wilmaers\",\"Maarten Wilmaers\"],\"remix\":[\"Blue\"],\"length\":\"3:56\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-17\",\"title\":\"Beautiful Things (Gabriel & Dresden Remix)\",\"artist\":\"Andain\",\"collaborators\":[\"David Penner\",\"Josh Gabriel\",\"Mavie Marcos\"],\"remix\":[\"Gabriel & Dresden\"],\"length\":\"7:15\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-18\",\"title\":\"Destination\",\"artist\":\"Solarstone Vs. Sirocco\",\"collaborators\":[\"A. Bury\",\"Michelle Maddock\",\"R. Mowatt\"],\"remix\":\"\",\"length\":\"5:13\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-19\",\"title\":\"U Write The Rules (Solarstone Remix)\",\"artist\":\"Young Parisians\",\"collaborators\":[\"A. Bury\",\"R. Mowatt\"],\"remix\":[\"Solarstone\"],\"length\":\"5:13\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-20\",\"title\":\"Nothing (93 Returning Mix)\",\"artist\":\"Holden & Thompson\",\"collaborators\":[\"James Holden\",\"Julie Thompson\"],\"remix\":[\"93 Returning\"],\"length\":\"5:40\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-21\",\"title\":\"Forever Waiting\",\"artist\":\"Mr. Sam Vs. Fred Baker Present As One (2)\",\"collaborators\":[\"Frederic De Backer\",\"DJ Mr. Sam\"],\"remix\":\"\",\"length\":\"5:39\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-22\",\"title\":\"As The Rush Comes (Exclusive Demo Mix)\",\"artist\":\"Motorcycle\",\"collaborators\":[\"D. Dresden\",\"J. Brieden\",\"J. Gabriel\"],\"remix\":\"\",\"length\":\"6:43\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-23\",\"title\":\"Never (DJ Tiësto Remix Vs. Filterheadz Remix)\",\"artist\":\"The Roc Project Feat. Tina Arena\",\"collaborators\":[\"A. Lorenzo\",\"R. Checo\",\"Tina Arena\"],\"remix\":[\"DJ Tiësto, Filterheadz\"],\"length\":\"9:29\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-24\",\"title\":\"Morgentau (Spring Mix)\",\"artist\":\"Smart System\",\"collaborators\":[\"Chopstick\",\"Martin Broszeit\"],\"remix\":\"\",\"length\":\"4:42\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-25\",\"title\":\"Requiem For A Dream (Leama\\'s Dream Mix)\",\"artist\":\"Leama\",\"collaborators\":[\"Andy Moor\"],\"remix\":[\"Leama\"],\"length\":\"7:18\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-26\",\"title\":\"Remember (Summer Sun)\",\"artist\":\"P.O.S.\",\"collaborators\":[\"P. Siljamäki\"],\"remix\":\"\",\"length\":\"5:32\",\"added\":\"16-02-24\",\"views\":0},{\"id\":\"track-27\",\"title\":\"North Pole\",\"artist\":\"Solid Globe\",\"collaborators\":[\"Maurice Night\",\"Yves La Verne\"],\"remix\":\"\",\"length\":\"6:24\",\"added\":\"16-02-24\",\"views\":0}]}');\n\n//# sourceURL=webpack://CD-Manager/./dist/data/data.json?");

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