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

eval("const email = document.getElementById(\"email\");\r\nconst country = document.getElementById(\"country\");\r\nconst zipCode = document.getElementById(\"zipCode\");\r\nconst password = document.getElementById(\"password\");\r\nconst passwordC = document.getElementById(\"passwordConfirm\");\r\nconst submitButton = document.getElementById(\"submitBtn\");\r\n// Errors\r\nconst errorE = document.querySelector(\".errorE\");\r\nconst errorC = document.querySelector(\".errorC\");\r\nconst errorZ = document.querySelector(\".errorZ\");\r\nconst errorPW = document.querySelector(\".errorPW\");\r\nconst errorPWC = document.querySelector(\".errorPWC\");\r\n\r\n// Events\r\n\r\nemail.addEventListener(\"input\", (event) => {\r\n    if (email.validity.valid) {\r\n        errorE.textContent = \"\"\r\n    } else {\r\n        showErrorE();\r\n        event.preventDefault();\r\n    }\r\n});\r\n\r\ncountry.addEventListener(\"input\", (event) => {\r\n    if (country.validity.valid) {\r\n        errorC.textContent = \"\";\r\n    } else {\r\n        showErrorC();\r\n        event.preventDefault();\r\n    }\r\n});\r\n\r\nzipCode.addEventListener(\"input\", (event) => {\r\n    if (zipCode.validity.valid) {\r\n        errorZ.textContent = \"\";\r\n    } else {\r\n        showErrorZ();\r\n        event.preventDefault();\r\n    }\r\n});\r\n\r\npassword.addEventListener(\"input\", (event) => {\r\n    if (password.validity.valid) {\r\n        errorPW.textContent = \"\";\r\n    } else {\r\n        showErrorPW();\r\n        event.preventDefault();\r\n    }\r\n});\r\n\r\npasswordC.addEventListener(\"input\", (event) => {\r\n    if (passwordC.validity.valid) {\r\n        errorPWC.textContent = \"\";\r\n    } else {\r\n        showErrorPWC();\r\n        event.preventDefault();\r\n    }\r\n});\r\n\r\npasswordC.addEventListener(\"input\", (event) => {\r\n    showErrorPWC();\r\n});\r\n// ERROR MESSAGES\r\nfunction showErrorE() {\r\n    if (email.validity.valueMissing) {\r\n        errorE.textContent = \"Please enter an Email Address.\"\r\n    } else if (email.validity.typeMismatch) {\r\n        errorE.textContent = \"Entered value needs to be an email address.\"\r\n    } else if (email.validity.tooShort) {\r\n        errorE.textContent = `Email should be atleast ${email.minLength} characters; you entered ${email.value.length}.`;\r\n    } else if (!email.value.indexOf('@') > -1) {\r\n        errorE.textContent = \"Please enter an Email Address\"\r\n    } else if (email.value.indexOf('@') > -1) {\r\n        errorE.textContent = \"\"\r\n    } \r\n};\r\n\r\nfunction showErrorC() {\r\n    if (country.validity.valueMissing) {\r\n        errorC.textContent = \"Please enter a country.\";\r\n    } else if (country.validity.tooShort) {\r\n        errorC.textContent = \"Country must be atleast 3 characters.\"\r\n    }\r\n};\r\nfunction showErrorZ() {\r\n    if (zipCode.value.length < 5) {\r\n        errorZ.textContent = \"Please enter a valid ZIP Code.\";\r\n    }\r\n\r\n};\r\nfunction showErrorPW() {\r\n    if (password.validity.valueMissing) {\r\n        errorPW.textContent = \"Please enter a new password.\";\r\n    } else if (password.validity.tooShort) {\r\n        errorPW.textContent = `Invalid password. Password must be at least 8 characters long.`;\r\n    } \r\n\r\n};\r\nfunction showErrorPWC() {\r\n    if (passwordC.value !== password.value) {\r\n        errorPWC.textContent = \"Passwords do not match.\";\r\n        submitButton.disabled = true;\r\n    } else {\r\n        submitButton.disabled = false;\r\n    }\r\n    \r\n    submitButton.addEventListener(\"click\", (event) => {\r\n        if (submitButton.disabled) {\r\n            event.preventDefault();\r\n        }\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://validation/./src/modules/submitConfirm.js?");

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