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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => {\r\n  return `<footer class='footer'>Footer</footer>`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\r\n\n\n//# sourceURL=webpack://restourant/./src/component/footer.js?");

/***/ }),

/***/ "./src/component/header.js":
/*!*********************************!*\
  !*** ./src/component/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = (active = 'main') => {\r\n  const arr = ['main', 'menu', 'address'];\r\n  const headerItems = arr\r\n    .map((item) => {\r\n      return `<div class=\"header__item ${\r\n        active === item ? 'active' : ''\r\n      }\" data-key=\"${item}\">${item}</div>`;\r\n    })\r\n    .join('');\r\n\r\n  return `<header class=\"header\">${headerItems}</header>`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://restourant/./src/component/header.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/index */ \"./src/component/index.js\");\n\r\n\r\nconst address = () => {\r\n  return `\r\n    <section class='address'>\r\n      <h1 class=\"address__title\">Address</h1>\r\n      <address class=\"address__block\">\r\n        You can contact author at <br />\r\n        <a href=\"tel:+38012345678\" class=\"address__block-a\">+38 012 345 678</a><br />\r\n        If you see any bugs, please <br />\r\n        <a href=\"mailto:random@gmail.com\" class=\"address__block-a\"> contact us</a>.<br />\r\n        You may also want to visit us:<br />\r\n        <span class=\"address__block-title\">Frutties</span><br />\r\n        Kyiv<br />\r\n        Volodymirska, 45a<br />\r\n        Ukraine\r\n      </address>\r\n    </section>`;\r\n};\r\n\r\nconst addressPage = () => `${(0,_component_index__WEBPACK_IMPORTED_MODULE_0__.header)('address')} ${address()} ${(0,_component_index__WEBPACK_IMPORTED_MODULE_0__.footer)()}`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addressPage);\r\n\n\n//# sourceURL=webpack://restourant/./src/pages/address.js?");

/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/index.js */ \"./src/component/index.js\");\n\r\n\r\nconst main = () => {\r\n  return `<main class=\"main\">\r\n    <div class=\"main__item\">\r\n      <p class=\"main__item-text\">FRUIT RESTAURANT</p>\r\n    </div>\r\n    <div class=\"main__title\">\r\n      <p class=\"main__title-text\">Frutties</p>\r\n    </div>\r\n    <div class=\"main__about\">\r\n      <div class=\"main__about-block\">\r\n        <table class=\"main__about-table\">\r\n          <tr>\r\n            <td class=\"main__about-table-td\">Banana</td>\r\n            <td class=\"main__about-table-td\">1$</td>\r\n          </tr>\r\n          <tr>\r\n           <td class=\"main__about-table-td\">Passion Fruit</td>\r\n            <td class=\"main__about-table-td\">2$</td>\r\n          </tr>\r\n          <tr class=\"main__about-table-tr\">\r\n            <td class=\"main__about-table-td\">Lychee</td>\r\n            <td class=\"main__about-table-td\">3$</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div class=\"main__about-logo\">frutties</div>\r\n    </div>\r\n    <div class=\"main__special\">\r\n      <div class=\"main__special-text\">\r\n        <p>Lorem ipsum <b class=\"main__special-text-bold\">dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \r\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \r\n        Duis aute irure dolor in reprehenderit in <b class=\"main__special-text-bold\">voluptate velit esse cillum</b> dolore eu fugiat nulla pariatur. \r\n        Excepteur sint occaecat <b class=\"main__special-text-bold\">cupidatat</b> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n      </div>\r\n      <div class=\"main__special-rows\">\r\n        <div class=\"main__special-title\">Special</div>\r\n        <div class=\"main__special-logo\">frutties</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"main__discounts\">\r\n      <div class=\"main__discounts-text\">\r\n        <p><b class=\"main__discounts-text-bold\">Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \r\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \r\n        Duis aute irure dolor in reprehenderit in <b class=\"main__discounts-text-bold\">voluptate velit esse</b> cillum dolore eu fugiat nulla pariatur. \r\n        Excepteur sint occaecat cupidatat non proident, sunt <b class=\"main__discounts-text-bold\">in culpa</b> qui officia deserunt mollit anim id est laborum.</p>\r\n      </div>\r\n      <div class=\"main__discounts-rows\">\r\n        <div class=\"main__discounts-title\">Discounts</div>\r\n        <div class=\"main__discounts-logo\">frutties</div>\r\n      </div\r\n    </div>\r\n  </main>`;\r\n};\r\n\r\nconst mainPage = () => ` ${(0,_component_index_js__WEBPACK_IMPORTED_MODULE_0__.header)()} ${main()} ${(0,_component_index_js__WEBPACK_IMPORTED_MODULE_0__.footer)()}`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);\r\n\n\n//# sourceURL=webpack://restourant/./src/pages/main.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/index */ \"./src/component/index.js\");\n\r\n\r\nconst menu = () => {\r\n  const menuItems = [\r\n    {\r\n      title: 'Apple Pie',\r\n      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',\r\n      price: 2.1,\r\n    },\r\n    {\r\n      title: 'Five-Fruit Pie',\r\n      descr:\r\n        'condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis',\r\n      price: 1,\r\n    },\r\n    {\r\n      title: 'Blackberry Pie',\r\n      descr: 'Lorem ipsum',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Key Lime Pie',\r\n      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Pineapple Cream Pie',\r\n      descr:\r\n        'diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Raspberry Pie',\r\n      descr: 'Lorem ipsum',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Peach Pie',\r\n      descr: 'Lorem ipsum',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'French Coconut Pie',\r\n      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Cranberry Pie',\r\n      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Creamsicle Pie',\r\n      descr:\r\n        'diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing',\r\n      price: 3,\r\n    },\r\n    {\r\n      title: 'Banana Cream Pie',\r\n      descr: 'Lorem ipsum',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Mixed Berry Pie',\r\n      descr: 'Lorem ipsum',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Strawberry Rhubarb Pie',\r\n      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Saskatoon Berry Pie',\r\n      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Cherry Pie',\r\n      descr: 'Lorem ipsum',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Blueberry Pie',\r\n      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Strawberry Pie',\r\n      descr:\r\n        'diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Mango Pie',\r\n      descr: 'Lorem ipsum',\r\n      price: 2,\r\n    },\r\n    {\r\n      title: 'Blueberry Cream Cheese Pie',\r\n      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',\r\n      price: 2,\r\n    },\r\n  ];\r\n\r\n  const menuItemsBlocks = menuItems\r\n    .map((item) => {\r\n      return `\r\n      <div class=\"menu__block\">\r\n        <p class=\"menu__block-title\">${item.title}</p>\r\n        <p>Description: ${item.descr}</p>\r\n        <p class=\"menu__block-price\">Price: ${item.price} $</p>\r\n      </div>\r\n    `;\r\n    })\r\n    .join('');\r\n\r\n  return `\r\n    <section class='menu'>\r\n      <h1 class=\"menu__title\">Menu: </h1>\r\n      <div class=\"menu__blocks\">${menuItemsBlocks}</div>\r\n    </section>`;\r\n};\r\n\r\nconst menuPage = () => `${(0,_component_index__WEBPACK_IMPORTED_MODULE_0__.header)('menu')} ${menu()} ${(0,_component_index__WEBPACK_IMPORTED_MODULE_0__.footer)()}`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\r\n\n\n//# sourceURL=webpack://restourant/./src/pages/menu.js?");

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