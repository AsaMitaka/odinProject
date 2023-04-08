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

/***/ "./src/component/footer.js":
/*!*********************************!*\
  !*** ./src/component/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => {\r\n  return `<footer class='footer'></footer>`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\r\n\n\n//# sourceURL=webpack://restourant/./src/component/footer.js?");

/***/ }),

/***/ "./src/component/header.js":
/*!*********************************!*\
  !*** ./src/component/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\r\n  return `<header class=\"header\">\r\n    <div class=\"header__item\" data-key='main'>Main</div>\r\n    <div class=\"header__item\" data-key='menu'>Menu</div>\r\n    <div class=\"header__item\" data-key='address'>Address</div>\r\n  </header>`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://restourant/./src/component/header.js?");

/***/ }),

/***/ "./src/component/index.js":
/*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"header\": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/component/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/component/footer.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://restourant/./src/component/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main */ \"./src/pages/main.js\");\n/* harmony import */ var _pages_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/address */ \"./src/pages/address.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector('.content');\r\n\r\nfunction clearContent() {\r\n  content.textContent = '';\r\n}\r\n\r\nfunction getPage(pageType) {\r\n  let page;\r\n  switch (pageType) {\r\n    case 'main':\r\n      page = (0,_pages_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      break;\r\n    case 'address':\r\n      page = (0,_pages_address__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n      break;\r\n    case 'menu':\r\n      page = (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n      break;\r\n    default:\r\n      throw new Error(`Unknown page type: ${pageType}`);\r\n  }\r\n\r\n  return page;\r\n}\r\n\r\nfunction handlePages({ target }) {\r\n  const key = target.getAttribute('data-key');\r\n  if (key) {\r\n    const page = getPage(key);\r\n    renderPage(page);\r\n  }\r\n}\r\n\r\nfunction renderPage(page) {\r\n  content.innerHTML = page;\r\n}\r\n\r\nfunction init() {\r\n  clearContent();\r\n  renderPage((0,_pages_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\n  content.addEventListener('click', handlePages);\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://restourant/./src/index.js?");

/***/ }),

/***/ "./src/pages/address.js":
/*!******************************!*\
  !*** ./src/pages/address.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/index */ \"./src/component/index.js\");\n\r\n\r\nconst address = () => {\r\n  return `<section class='address'>\r\n        <h2>Address</h2>\r\n    </section>`;\r\n};\r\n\r\nconst addressPage = () => {\r\n  return `${(0,_component_index__WEBPACK_IMPORTED_MODULE_0__.header)()} ${address()} ${(0,_component_index__WEBPACK_IMPORTED_MODULE_0__.footer)()}`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addressPage);\r\n\n\n//# sourceURL=webpack://restourant/./src/pages/address.js?");

/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/index.js */ \"./src/component/index.js\");\n\r\n\r\nconst main = () => {\r\n  return `<main class=\"main\">\r\n    <div class=\"main__item\">\r\n      <h2>Order from us</h2>\r\n      <div class=\"main__item-about\">\r\n        <div class=\"main__about-left\">1</div>\r\n        <div class=\"main__about-right\">2</div>\r\n      </div>\r\n      <button class=\"main__item-btn\">Order</button>\r\n    </div>\r\n  </main>`;\r\n};\r\n\r\nconst mainPage = () => {\r\n  return `\r\n  ${(0,_component_index_js__WEBPACK_IMPORTED_MODULE_0__.header)()}\r\n  ${main()}\r\n  ${(0,_component_index_js__WEBPACK_IMPORTED_MODULE_0__.footer)()}\r\n  `;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);\r\n\n\n//# sourceURL=webpack://restourant/./src/pages/main.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/index */ \"./src/component/index.js\");\n\r\n\r\nconst menu = () => {\r\n  return `<section class='menu'>\r\n        <h2>Menu</h2>\r\n    </section>`;\r\n};\r\n\r\nconst menuPage = () => {\r\n  return `${(0,_component_index__WEBPACK_IMPORTED_MODULE_0__.header)()} ${menu()} ${(0,_component_index__WEBPACK_IMPORTED_MODULE_0__.footer)()}`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\r\n\n\n//# sourceURL=webpack://restourant/./src/pages/menu.js?");

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