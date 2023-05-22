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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/buttons */ \"./src/modules/buttons.js\");\n/* harmony import */ var _modules_buttons_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/buttons.controller */ \"./src/modules/buttons.controller.js\");\n/* harmony import */ var _modules_todo1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo1 */ \"./src/modules/todo1.js\");\n/* harmony import */ var _modules_todo2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todo2 */ \"./src/modules/todo2.js\");\n/* harmony import */ var _modules_todo3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/todo3 */ \"./src/modules/todo3.js\");\n\r\n\r\n\r\n\r\n\r\n// Styles\r\n\r\n// Calls\r\n(0,_modules_buttons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/buttons.controller.js":
/*!*******************************************!*\
  !*** ./src/modules/buttons.controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/modules/buttons.js\");\n\r\n\r\nconst buttonsController = {\r\n  todo1: function() {\r\n    // Do something when the To Do 1 button is clicked.\r\n  },\r\n  todo2: function() {\r\n    // Do something when the To Do 2 button is clicked.\r\n  },\r\n  todo3: function() {\r\n    // Do something when the To Do 3 button is clicked.\r\n  }\r\n};\r\n\r\n_buttons__WEBPACK_IMPORTED_MODULE_0__[\"default\"].controller = buttonsController;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonsController);\n\n//# sourceURL=webpack://todo/./src/modules/buttons.controller.js?");

/***/ }),

/***/ "./src/modules/buttons.js":
/*!********************************!*\
  !*** ./src/modules/buttons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo1 */ \"./src/modules/todo1.js\");\n/* harmony import */ var _todo2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo2 */ \"./src/modules/todo2.js\");\n/* harmony import */ var _todo3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo3 */ \"./src/modules/todo3.js\");\n\r\n\r\n\r\nconst buttons = function() {\r\n\r\n    const div = document.createElement('div');\r\n    div.classList.add('buttons');\r\n  \r\n    const button1 = document.createElement('button');\r\n    button1.textContent = 'To Do 1';\r\n    button1.addEventListener('click', function() {\r\n      (0,_todo1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      console.log('Button One Clicked');\r\n    });\r\n    div.appendChild(button1);\r\n  \r\n    const button2 = document.createElement('button');\r\n    button2.textContent = 'To Do 2';\r\n    button2.addEventListener('click', function() {\r\n      (0,_todo2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n      console.log('Button Two Clicked')\r\n    });\r\n    div.appendChild(button2);\r\n  \r\n    const button3 = document.createElement('button');\r\n    button3.textContent = 'To Do 3';\r\n    button3.addEventListener('click', function() {\r\n      (0,_todo3__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n      console.log('Button Three Clicked')\r\n    });\r\n    div.appendChild(button3);\r\n  \r\n    document.querySelector('#content').appendChild(div);\r\n  }\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttons);\n\n//# sourceURL=webpack://todo/./src/modules/buttons.js?");

/***/ }),

/***/ "./src/modules/todo1.js":
/*!******************************!*\
  !*** ./src/modules/todo1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet todo1 = function() {\r\n    const content = document.querySelector('#content');\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo1);\n\n//# sourceURL=webpack://todo/./src/modules/todo1.js?");

/***/ }),

/***/ "./src/modules/todo2.js":
/*!******************************!*\
  !*** ./src/modules/todo2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todo2 = function() {\r\n    const content = document.querySelector('#content');\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo2);\n\n//# sourceURL=webpack://todo/./src/modules/todo2.js?");

/***/ }),

/***/ "./src/modules/todo3.js":
/*!******************************!*\
  !*** ./src/modules/todo3.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todo3 = function() {\r\n    const content = document.querySelector('#content');\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo3);\n\n//# sourceURL=webpack://todo/./src/modules/todo3.js?");

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