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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n// Pages\r\n\r\n\r\n\r\n// Initial Load to Home Page.\r\ninit()\r\n// Banner Buttons\r\nfunction banner() {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const banner = document.createElement(\"div\")\r\n    banner.classList.add(\"banner\")\r\n    content.appendChild(banner)\r\n\r\n    const bannerTitle = document.createElement(\"p\");\r\n    bannerTitle.classList.add(\"bannerTitle\");\r\n    bannerTitle.innerHTML = \"<h1>Marvelous Mr. Food's Kitchen</h1>\"\r\n    banner.appendChild(bannerTitle);\r\n}\r\n// Buttons Added\r\nfunction buttons() {\r\n    const buttonContainer = document.createElement(\"div\");\r\n    buttonContainer.classList.add(\"buttonContainer\");\r\n    content.appendChild(buttonContainer);\r\n\r\n    const homeButton = document.createElement(\"button\");\r\n    homeButton.classList.add(\"homeButton\");\r\n    homeButton.innerText = \"Home\";\r\n    buttonContainer.appendChild(homeButton);\r\n\r\n    \r\n    const aboutButton = document.createElement(\"button\");\r\n    aboutButton.classList.add(\"aboutButton\");\r\n    aboutButton.innerText = \"About Us\";\r\n    buttonContainer.appendChild(aboutButton);\r\n\r\n    \r\n    const menuButton = document.createElement(\"button\");\r\n    menuButton.classList.add(\"menuButton\");\r\n    menuButton.innerText = \"Menu\";\r\n    buttonContainer.appendChild(menuButton);\r\n\r\n// Button Actions\r\n    homeButton.addEventListener(\"click\", () => {\r\n        content.innerHTML = \"\";\r\n        init();\r\n        (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n\r\n    aboutButton.addEventListener(\"click\", () => {\r\n        content.innerHTML = \"\";\r\n        init();\r\n        (0,_pages_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n\r\n    menuButton.addEventListener(\"click\", () => {\r\n        content.innerHTML = \"\";\r\n        init();\r\n        (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    })\r\n}\r\n\r\n// Always load Banner on every page\r\nfunction init() {\r\n    banner();\r\n    buttons();\r\n}\r\n\r\n// Footer\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = function(){\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add(\"title\");\r\n    title.textContent = 'About Us'\r\n    content.appendChild(title)\r\n\r\n    // About Div\r\n    const about = document.createElement(\"div\");\r\n    about.classList.add(\"about\");\r\n    content.appendChild(about);\r\n\r\n    // About Img\r\n    const img = document.createElement(\"img\");\r\n    img.src = \"/src/assets/about.jpg\";\r\n    about.appendChild(img);\r\n\r\n    // About Info\r\n    const aboutInfo = document.createElement(\"p\");\r\n    aboutInfo.classList.add(\"aboutInfo\");\r\n    aboutInfo.innerHTML = \r\n    \"<p>We love to cook. There is not just one kind of cooking we love, we do it all.</p>\"\r\n    about.appendChild(aboutInfo);\r\n\r\n    // \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurantpage/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = function() {\r\n    const content = document.querySelector('#content');\r\n\r\n    // Home Div\r\n    const home = document.createElement('div')\r\n    home.classList.add('home');\r\n    content.appendChild(home);\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add(\"title\");\r\n    title.textContent = 'Welcome, here are our Hours!';\r\n    home.appendChild(title);\r\n\r\n    const openTimeContainer = document.createElement('div');\r\n    openTimeContainer.classList.add('openTimeCont');\r\n\r\n    const openTime = document.createElement('ul');\r\n\r\n    openTime.innerHTML = `\r\n    <li><img src=\"/src/assets/monday.png\">Monday \r\n    <h5>3am - 9pm</h5>\r\n    </li>\r\n\r\n    <li><img src=\"/src/assets/tuesday.png\">Tuesday \r\n    <h5>3am - 9pm</h5>\r\n    </li>\r\n\r\n    <li><img src=\"/src/assets/wednesday.png\">Wednesday \r\n    <h5>3am - 9pm</h5>\r\n    </li>\r\n\r\n    <li><img src=\"/src/assets/thursday.png\">Thursday \r\n    <h5>3am - 9pm</h5>\r\n    </li>\r\n\r\n    <li><img src=\"/src/assets/friday.png\">Friday \r\n    <h5>3am - 9pm</h5>\r\n    </li>\r\n\r\n    <li><img src=\"/src/assets/saturday.png\">Saturday \r\n    <h5>3am - 9pm</h5>\r\n    </li>\r\n\r\n    <li><img src=\"/src/assets/sunday.png\">Sunday \r\n    <h5>3am - 9pm</h5>\r\n    </li>\r\n\r\n    `;\r\n    home.appendChild(openTime);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurantpage/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function() {\r\n    const content = document.querySelector('#content');\r\n\r\n    // Home Div\r\n    const menu = document.createElement('div')\r\n    menu.classList.add('menu');\r\n    content.appendChild(menu);\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add(\"title\");\r\n    title.textContent = 'Our Beautiful Meats'\r\n    menu.appendChild(title);\r\n\r\n    const menuList = () => {\r\n    const menuList = document.createElement('div')\r\n    menuList.classList.add('menuList');\r\n    menu.appendChild(menuList);\r\n\r\n    const gridItems = document.querySelectorAll('.grid-item');\r\n\r\n    for (const item of [\r\n        ['Pork'], \r\n        ['Chicken'],\r\n        [\"Steaks\"],\r\n        ['Fish'],\r\n        ['Veggies'],\r\n        ['Sides'],\r\n        ['Drinks'],\r\n        ['Desserts'],\r\n        ['Specials']]) {\r\n        const div = document.createElement('div');\r\n        div.textContent = item;\r\n        div.classList.add(item[0].toLowerCase());\r\n        menuList.appendChild(div);\r\n    }\r\n};\r\n\r\n    menuList()\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurantpage/./src/pages/menu.js?");

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