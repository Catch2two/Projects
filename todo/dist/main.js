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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _modules_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/banner */ \"./src/modules/banner.js\");\n/* harmony import */ var _modules_banner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_banner__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/banner.js":
/*!*******************************!*\
  !*** ./src/modules/banner.js ***!
  \*******************************/
/***/ (() => {

eval("function banner() {\r\n    const header = document.querySelector('#header')\r\n    const title = document.createElement('div');\r\n    title.textContent = 'To do Header';\r\n    header.appendChild(title);\r\n    console.log('Banner Loaded')\r\n}\r\n\r\nbanner();\n\n//# sourceURL=webpack://todo/./src/modules/banner.js?");

/***/ }),

/***/ "./src/modules/timeLeft.js":
/*!*********************************!*\
  !*** ./src/modules/timeLeft.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calculateTimeLeft() {\r\n    // Get the current date\r\n    const today = new Date();\r\n  \r\n    // Get the date the project was submitted\r\n    const submittedDate = document.getElementById('submittedDate').value;\r\n  \r\n    // Calculate the difference between the two dates\r\n    const difference = today.getTime() - submittedDate.getTime();\r\n  \r\n    // Convert the difference to days\r\n    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));\r\n  \r\n    // Display the number of days left\r\n    document.getElementById('daysLeft').textContent = daysLeft;\r\n  }\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateTimeLeft);\n\n//# sourceURL=webpack://todo/./src/modules/timeLeft.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timeLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeLeft */ \"./src/modules/timeLeft.js\");\n\r\nfunction todolist() {\r\n// Input Form\r\n  const input = document.createElement('div');\r\n  input.id = \"input\";\r\n  input.textContent = 'Tasks';\r\n\r\n  const titleInput = document.createElement('input');\r\n  titleInput.id = \"titleInput\";\r\n  titleInput.required = true;\r\n  titleInput.maxlength = 30;\r\n  titleInput.placeholder = 'Task Name';\r\n\r\n  const descriptionInput = document.createElement('input');\r\n  descriptionInput.id = \"descriptionInput\";\r\n  descriptionInput.required = true;\r\n  descriptionInput.placeholder = 'Task Description';\r\n\r\n// Time options for Dropdown\r\n  const timeSelect = document.createElement('select');\r\n  timeSelect.id = \"timeSelect\";\r\n  timeSelect.required = true;\r\n  timeSelect.options.add(new Option('Today'));\r\n  timeSelect.options.add(new Option('Sunday'));\r\n  timeSelect.options.add(new Option('Monday'));\r\n  timeSelect.options.add(new Option('Tuesday'));\r\n  timeSelect.options.add(new Option('Wednesday'));\r\n  timeSelect.options.add(new Option('Thursday'));\r\n  timeSelect.options.add(new Option('Friday'));\r\n  timeSelect.options.add(new Option('Saturday'));\r\n\r\n  \r\n// Append Form Inputs\r\n  input.appendChild(titleInput);\r\n  input.appendChild(descriptionInput);\r\n  input.appendChild(timeSelect);\r\n\r\n// Add New Task Button\r\n  const addButton = document.createElement('button');\r\n  addButton.classList.add('addBtn');\r\n  addButton.textContent = 'New Task';\r\n  addButton.addEventListener('click', addNewTask);\r\n\r\n  input.appendChild(addButton);\r\n\r\n// Append whole Input Form\r\n  document.getElementById('content').appendChild(input);\r\n}\r\n\r\n\r\n// Add New Task Cards\r\n\r\nfunction addNewTask() {\r\n  const titleInput = document.getElementById('titleInput');\r\n  const descriptionInput = document.getElementById('descriptionInput');\r\n  const timeSelect = document.getElementById('timeSelect');\r\n\r\n  const taskAdded = document.createElement('div');\r\n  taskAdded.classList.add('taskAdded');\r\n  taskAdded.textContent = titleInput.value;\r\n  taskAdded.date = timeSelect.value;\r\n\r\n// Checkboxes\r\nconst priority = ['Important', 'Urgent', 'Trivial', 'Completed'];\r\n\r\npriority.forEach((priority) => {\r\n  const checkbox = document.createElement('input');\r\n  checkbox.classList.add('checkBox');\r\n  checkbox.type = 'checkbox';\r\n  checkbox.textContent = priority;\r\n  taskAdded.appendChild(checkbox);\r\n\r\n  const prio = document.createElement('label');\r\n  prio.htmlFor = checkbox.id;\r\n  prio.textContent = priority;\r\n  taskAdded.appendChild(prio);\r\n});\r\n\r\n\r\n\r\n// Append the Task to DOM\r\n  const cardDiv = document.getElementById('content');\r\n  const cardInfo = document.createElement('div');\r\n  cardDiv.appendChild(cardInfo);\r\n  cardInfo.appendChild(taskAdded);\r\n\r\n  // Append the description input to the task card\r\n  const description = document.createElement('p');\r\n  description.textContent = descriptionInput.value;\r\n  description.classList.add('description');\r\n  taskAdded.appendChild(description);\r\n\r\n  // Append Due Date\r\n  const dueDate = document.createElement('div');\r\n  dueDate.textContent = timeSelect.value;\r\n  dueDate.classList.add('dueDate');\r\n  taskAdded.appendChild(dueDate);\r\n\r\n  // X button (Delete)\r\n  const deleteBtn = document.createElement('button');\r\n  deleteBtn.textContent = 'x';\r\n  deleteBtn.classList.add('deleteBtn');\r\n  taskAdded.appendChild(deleteBtn);\r\n\r\n  deleteBtn.addEventListener('click', function() {\r\n    cardInfo.remove();\r\n  });\r\n\r\n  //Clear Inputs\r\n  titleInput.value = '';\r\n  descriptionInput.value = '';\r\n\r\n}\r\ntodolist();\r\n\n\n//# sourceURL=webpack://todo/./src/modules/todolist.js?");

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