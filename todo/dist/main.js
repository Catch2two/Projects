/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_todolist__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n_modules_todolist__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ (() => {

eval("function todolist() {\r\n    \r\n    const div = document.createElement('div');\r\n    div.textContent = 'To Do List';\r\n  \r\n    const ul = document.createElement('ul');\r\n  \r\n    const titleInput = document.createElement('input');\r\n    titleInput.placeholder = 'Title';\r\n  \r\n    const descriptionInput = document.createElement('input');\r\n    descriptionInput.placeholder = 'Description';\r\n  \r\n    const timeSelect = document.createElement('select');\r\n    timeSelect.options.add(new Option('Today'));\r\n    timeSelect.options.add(new Option('Tomorrow'));\r\n    timeSelect.options.add(new Option('Next Week'));\r\n    timeSelect.options.add(new Option('Next Month'));\r\n  \r\n    div.appendChild(titleInput);\r\n    div.appendChild(descriptionInput);\r\n    div.appendChild(timeSelect);\r\n  \r\n    const addButton = document.createElement('button');\r\n    addButton.textContent = 'Add New List';\r\n    addButton.addEventListener('click', addNewList);\r\n  \r\n    div.appendChild(addButton);\r\n  \r\n    document.body.appendChild(div);\r\n  }\r\n  \r\n  function addNewList() {\r\n    const li = document.createElement('li');\r\n    li.textContent = titleInput.value;\r\n    li.description = descriptionInput.value;\r\n    li.date = timeSelect.value;\r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = 'checkbox';\r\n    li.appendChild(checkbox);\r\n  \r\n    const ul = document.querySelector('ul');\r\n    ul.appendChild(li);\r\n  \r\n    return li;\r\n  }\r\n  \r\n  todolist();\n\n//# sourceURL=webpack://todo/./src/modules/todolist.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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