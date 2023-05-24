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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_todolist__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/banner */ \"./src/modules/banner.js\");\n/* harmony import */ var _modules_banner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_banner__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/banner.js":
/*!*******************************!*\
  !*** ./src/modules/banner.js ***!
  \*******************************/
/***/ (() => {

eval("function banner() {\r\n    const header = document.querySelector('#header')\r\n    const title = document.createElement('div');\r\n    title.textContent = 'To do Header';\r\n    header.appendChild(title);\r\n    console.log('Banner Loaded')\r\n}\r\n\r\nbanner();\n\n//# sourceURL=webpack://todo/./src/modules/banner.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ (() => {

eval("function todolist() {\r\n// Input Form\r\n  const input = document.createElement('div');\r\n  input.classList.add('input')\r\n  input.textContent = 'Tasks';\r\n\r\n  const titleInput = document.createElement('input');\r\n  titleInput.placeholder = 'Title';\r\n\r\n  const descriptionInput = document.createElement('input');\r\n  descriptionInput.classList.add('description')\r\n  descriptionInput.placeholder = 'Description';\r\n\r\n// Time options for Dropdown\r\n  const timeSelect = document.createElement('select');\r\n  timeSelect.options.add(new Option('Today'));\r\n  timeSelect.options.add(new Option('Tomorrow'));\r\n  timeSelect.options.add(new Option('Next Week'));\r\n  timeSelect.options.add(new Option('Next Month'));\r\n  timeSelect.options.add(new Option('Sunday'));\r\n  timeSelect.options.add(new Option('Monday'));\r\n  timeSelect.options.add(new Option('Tuesday'));\r\n  timeSelect.options.add(new Option('Wednesday'));\r\n  timeSelect.options.add(new Option('Thursday'));\r\n  timeSelect.options.add(new Option('Friday'));\r\n  timeSelect.options.add(new Option('Saturday'));\r\n\r\n  input.appendChild(titleInput);\r\n  input.appendChild(descriptionInput);\r\n  input.appendChild(timeSelect);\r\n\r\n// Add New Task\r\n  const addButton = document.createElement('button');\r\n  addButton.classList.add('addBtn');\r\n  addButton.textContent = 'Add New Task';\r\n  addButton.addEventListener('click', addNewTask);\r\n\r\n  input.appendChild(addButton);\r\n\r\n// Append whole Input Form\r\n  document.getElementById('content').appendChild(input);\r\n}\r\n// Add New Task\r\nfunction addNewTask() {\r\n  const titleInput = document.querySelector('input');\r\n  const descriptionInput = document.querySelector('input');\r\n  const timeSelect = document.querySelector('input');\r\n  const task = document.createElement('task');\r\n  task.textContent = titleInput.value;\r\n  task.description = descriptionInput.value;\r\n  task.date = timeSelect.value;\r\n\r\n  const checkbox = document.createElement('input');\r\n  checkbox.classList.add('checkBox');\r\n  checkbox.type = 'checkbox';\r\n  task.appendChild(checkbox);\r\n\r\n  const deleteBtn =  document.createElement('button')\r\n  deleteBtn.textContent = 'x'\r\n  deleteBtn.classList.add('deleteBtn')\r\n  task.appendChild(deleteBtn)\r\n\r\n// Append the Task to DOM as a li\r\n  const div = document.getElementById('content');\r\n  const li = document.createElement('li');\r\n  div.appendChild(li);\r\n  li.appendChild(task);\r\n\r\n  const description = document.createElement('p');\r\n  description.textContent = descriptionInput.value;\r\n  description.classList.add('description');\r\n  task.appendChild(description);\r\n\r\n  deleteBtn.addEventListener('click', function() {\r\n    li.remove();\r\n  });\r\n\r\n  return li;\r\n}\r\n\r\ntodolist();\r\n\n\n//# sourceURL=webpack://todo/./src/modules/todolist.js?");

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