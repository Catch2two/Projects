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

eval("const email = document.getElementById(\"email\");\nconst country = document.getElementById(\"country\");\nconst zipCode = document.getElementById(\"zipCode\");\nconst password = document.getElementById(\"password\");\nconst passwordC = document.getElementById(\"passwordConfirm\");\nconst submitButton = document.getElementById(\"submitBtn\");\n// Errors\nconst errorE = document.querySelector(\".errorE\");\nconst errorC = document.querySelector(\".errorC\");\nconst errorZ = document.querySelector(\".errorZ\");\nconst errorPW = document.querySelector(\".errorPW\");\nconst errorPWC = document.querySelector(\".errorPWC\");\n\n// Events\n\nemail.addEventListener(\"input\", (event) => {\n    if (email.validity.valid) {\n        errorE.textContent = \"\"\n    } else {\n        showErrorE();\n        event.preventDefault();\n    }\n});\n\ncountry.addEventListener(\"input\", (event) => {\n    if (country.validity.valid) {\n        errorC.textContent = \"\";\n    } else {\n        showErrorC();\n        event.preventDefault();\n    }\n});\n\nzipCode.addEventListener(\"input\", (event) => {\n    if (zipCode.validity.valid) {\n        errorZ.textContent = \"\";\n    } else {\n        showErrorZ();\n        event.preventDefault();\n    }\n});\n\npassword.addEventListener(\"input\", (event) => {\n    if (password.validity.valid) {\n        errorPW.textContent = \"\";\n    } else {\n        showErrorPW();\n        event.preventDefault();\n    }\n});\n\n// ERROR MESSAGES\nfunction showErrorE() {\n    if (email.validity.valueMissing) {\n        errorE.textContent = \"Please enter an Email Address.\"\n    } else if (email.validity.typeMismatch) {\n        errorE.textContent = \"Entered value needs to be an email address.\"\n    } else if (email.validity.tooShort) {\n        errorE.textContent = `Email should be atleast ${email.minLength} characters; you entered ${email.value.length}.`;\n    } else if (email.value.indexOf('@') > -1) {\n        errorE.textContent = \"Please enter an Email Address\"\n    } else if (email.value.indexOf('@') > -1) {\n        errorE.textContent = \"\"\n    }\n};\n\nfunction showErrorC() {\n    if (country.validity.valueMissing) {\n        errorC.textContent = \"Please enter a country.\";\n    } \n};\nfunction showErrorZ() {\n    if (zipCode.value.length < 5) {\n        errorZ.textContent = \"Please enter a valid ZIP Code.\";\n    } else {\n        errorZ.textContent = \"\";\n    }\n};\nfunction showErrorPW() {\n    if (password.validity.valueMissing) {\n        errorPW.textContent = \"Please enter a new password.\";\n    } else if (password.validity.tooShort) {\n        errorPW.textContent = `Invalid password. Password must be at least 8 characters long.`;\n    } else {\n        errorPW.textContent = \"\";\n    }\n};\nfunction showErrorPWC() {\n    if (passwordC.value !== password.value) {\n        errorPWC.textContent = \"Passwords do not match.\";\n    } \n};\n\n\n//# sourceURL=webpack://validation/./src/modules/submitConfirm.js?");

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