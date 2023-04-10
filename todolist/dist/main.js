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

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => `<footer class='footer'>Footer</footer>`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\r\n\n\n//# sourceURL=webpack://todolist/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () =>\r\n  `<header class='header'>\r\n    <div>To Do List</div>\r\n    <div class='header__list'>\r\n        <p class='list__priority-red'>High</p>\r\n        <p class='list__priority-orange'>Middle</p>\r\n        <p class='list__priority-green'>Low</p>\r\n    </div>\r\n</header>`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://todolist/./src/components/header.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"header\": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/components/footer.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/components/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index */ \"./src/components/index.js\");\n\r\nconst content = document.querySelector('#content');\r\n\r\nlet projects = {\r\n  today: [\r\n    {\r\n      title: 'New',\r\n      isCompleted: false,\r\n    },\r\n    {\r\n      title: 'New',\r\n      isCompleted: false,\r\n    },\r\n    {\r\n      title: 'New',\r\n      isCompleted: true,\r\n    },\r\n  ],\r\n  tomorrow: [\r\n    {\r\n      title: 'New',\r\n      isCompleted: true,\r\n    },\r\n  ],\r\n  nextWeek: [\r\n    {\r\n      title: 'New',\r\n      isCompleted: true,\r\n    },\r\n  ],\r\n};\r\n\r\nconst projectsBlocks = () =>\r\n  Object.keys(projects)\r\n    .map((key) => {\r\n      const title = key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase();\r\n      return `<div class='projects' data-key='${key}'>\r\n        ${title}\r\n        <button class='projects-btn' data-key='${key}'>X</button>\r\n    </div>`;\r\n    })\r\n    .join('');\r\n\r\nconst renderItems = (filter = 'today') => {\r\n  const filterItems = projects[filter];\r\n  if (!filterItems) {\r\n    return `<div class='todos' data-key='${filter}'></div>`;\r\n  }\r\n\r\n  const items = filterItems\r\n    .map(\r\n      (item) => `<div class='todos__task ${item.isCompleted ? 'done' : ''}'>\r\n    <p>${item.title}</p>\r\n    <p>${item.isCompleted ? 'True' : 'False'}</p>\r\n    <button class='todos__task-btn'>X</button>\r\n  </div>`,\r\n    )\r\n    .join('');\r\n\r\n  return `\r\n    <div class='todos' data-key='${filter}'>\r\n      ${items}\r\n      <form class='todos__item'>\r\n        <input type='text' class='todos__item-input'>\r\n        <button type='submit' class='todos__item-btn'>add todo</button>\r\n      </form>\r\n    </div>\r\n  `;\r\n};\r\n\r\nfunction updatePage() {\r\n  const itemsHTML = projectsBlocks();\r\n  const mainLeft = document.querySelector('.main__left-projectsBlock');\r\n  mainLeft.innerHTML = itemsHTML;\r\n\r\n  const addProject = document.querySelector('.addproject__form');\r\n  const allProjects = document.querySelectorAll('.projects');\r\n  const addTodo = document.querySelector('.todos__item');\r\n  const deleteProjectButtons = document.querySelectorAll('.projects-btn');\r\n\r\n  addProject.addEventListener('submit', handleAddProject);\r\n  allProjects.forEach((proj) => proj.addEventListener('click', handleProject));\r\n  addTodo.addEventListener('submit', handleAddToDo);\r\n  deleteProjectButtons.forEach((button) => {\r\n    button.addEventListener('click', handleDeleteProject);\r\n  });\r\n}\r\n\r\nfunction main() {\r\n  return `<main class='main'>\r\n    <div class='main__left'>\r\n        <div class='main__left-projects'>\r\n            <h2 class='main__left-projects-title'>Projects:</h2>\r\n            <div class='main__left-projectsBlock'>\r\n            ${projectsBlocks()}\r\n            </div>\r\n        </div>\r\n        <div class='main__left-addproject'>\r\n          <form class='addproject__form'>\r\n            <input type='text' class='addproject__form-input'>\r\n            <button type='submit' class='addproject__form-btn'>Add Project</button>\r\n          </form>\r\n        </div>\r\n    </div>\r\n    <div class='main__right'>\r\n      ${renderItems()}\r\n    </div>\r\n</main>`;\r\n}\r\n\r\nfunction createPage() {\r\n  content.innerHTML = `${(0,_components_index__WEBPACK_IMPORTED_MODULE_0__.header)()}${main()}${(0,_components_index__WEBPACK_IMPORTED_MODULE_0__.footer)()}`;\r\n}\r\n\r\nfunction updateItems(filter = 'today') {\r\n  const itemsHTML = renderItems(filter);\r\n  const mainRight = document.querySelector('.main__right');\r\n  const addTodo = document.querySelector('.todos__item');\r\n\r\n  mainRight.innerHTML = itemsHTML;\r\n  addTodo.addEventListener('submit', handleAddToDo);\r\n}\r\n\r\nfunction handleProject({ target }) {\r\n  const dataKey = target.getAttribute('data-key');\r\n\r\n  if (dataKey) {\r\n    updateItems(dataKey);\r\n  }\r\n}\r\n\r\nfunction handleDeleteProject(event) {\r\n  const dataKey = event.target.getAttribute('data-key');\r\n  delete projects[dataKey];\r\n\r\n  updatePage();\r\n}\r\n\r\nfunction handleAddProject(e) {\r\n  e.preventDefault();\r\n\r\n  const inputValue = document.querySelector('.addproject__form-input');\r\n\r\n  if (inputValue.value) {\r\n    projects[inputValue.value] = [];\r\n    inputValue.value = '';\r\n\r\n    updatePage();\r\n  }\r\n}\r\n\r\nfunction handleAddToDo(event) {\r\n  event.preventDefault();\r\n  const input = document.querySelector('.todos__item-input');\r\n  const dataKey = document.querySelector('.todos').dataset.key;\r\n\r\n  if (input.value) {\r\n    const newTodo = {\r\n      title: input.value,\r\n      isCompleted: false,\r\n    };\r\n\r\n    projects[dataKey].push(newTodo);\r\n    input.value = '';\r\n\r\n    updateItems(dataKey);\r\n  }\r\n}\r\n\r\nfunction init() {\r\n  createPage();\r\n\r\n  const allProjects = document.querySelectorAll('.projects');\r\n  const addProject = document.querySelector('.addproject__form');\r\n  const addTodo = document.querySelector('.todos__item');\r\n  const deleteProjectButtons = document.querySelectorAll('.projects-btn');\r\n\r\n  addProject.addEventListener('submit', handleAddProject);\r\n  addTodo.addEventListener('submit', handleAddToDo);\r\n  allProjects.forEach((proj) => proj.addEventListener('click', handleProject));\r\n  deleteProjectButtons.forEach((button) => {\r\n    button.addEventListener('click', handleDeleteProject);\r\n  });\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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