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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_submitConfirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/submitConfirm */ \"./src/modules/submitConfirm.js\");\n/* harmony import */ var _modules_submitConfirm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_submitConfirm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://validation/./src/main.js?");

/***/ }),

/***/ "./src/modules/submitConfirm.js":
/*!**************************************!*\
  !*** ./src/modules/submitConfirm.js ***!
  \**************************************/
/***/ (() => {

eval("const email = document.getElementById(\"email\");\r\nconst country = document.getElementById(\"country\");\r\nconst zipCode = document.getElementById(\"zipCode\");\r\nconst password = document.getElementById(\"password\");\r\nconst passwordConfirm = document.getElementById(\"passwordConfirm\");\r\nconst submitButton = document.getElementById(\"submitBtn\");\r\n\r\n// Errors\r\nconst emailError = document.querySelector(\".errorE\");\r\nconst countryError = document.querySelector(\".errorC\");\r\nconst zipCodeError = document.querySelector(\".errorZ\");\r\nconst passwordError = document.querySelector(\".errorPW\");\r\nconst passwordConfirmError = document.querySelector(\".errorPWC\");\r\n\r\n// Events\r\n\r\nfunction showError(errorElement, message) {\r\n  errorElement.textContent = message;\r\n}\r\n\r\nemail.addEventListener(\"input\", (event) => {\r\n  if (email.validity.valid) {\r\n    showError(emailError, \"\");\r\n  } else {\r\n    showError(emailError, \"Please enter an email address.\");\r\n  }\r\n});\r\n\r\ncountry.addEventListener(\"input\", (event) => {\r\n  if (country.validity.valid) {\r\n    showError(countryError, \"\");\r\n  } else {\r\n    showError(countryError, \"Please enter a country.\");\r\n  }\r\n});\r\n\r\nzipCode.addEventListener(\"input\", (event) => {\r\n  if (zipCode.validity.valid) {\r\n    showError(zipCodeError, \"\");\r\n  } else {\r\n    showError(zipCodeError, \"Please enter a valid ZIP code.\");\r\n  }\r\n});\r\n\r\npassword.addEventListener(\"input\", (event) => {\r\n  if (password.validity.valid) {\r\n    showError(passwordError, \"\");\r\n  } else {\r\n    showError(passwordError, \"Please enter a password.\");\r\n  }\r\n});\r\n\r\npasswordConfirm.addEventListener(\"input\", (event) => {\r\n  if (passwordConfirm.value === password.value) {\r\n    showError(passwordConfirmError, \"\");\r\n  } else {\r\n    showError(passwordConfirmError, \"Passwords do not match.\");\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://validation/./src/modules/submitConfirm.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;