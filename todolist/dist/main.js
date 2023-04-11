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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index */ \"./src/components/index.js\");\n\r\nconst content = document.querySelector('#content');\r\n\r\nlet _todoId = 4;\r\nlet selectedProject = 'tomorrow';\r\n\r\nlet proj = {\r\n  today: [\r\n    { title: 'Title1', isCompleted: false, id: 1 },\r\n    { title: 'Title2', isCompleted: true, id: 2 },\r\n    { title: 'Title3', isCompleted: false, id: 3 },\r\n  ],\r\n  tomorrow: [{ title: 'Title1', isCompleted: false, id: 4 }],\r\n  nextWeek: [\r\n    { title: 'Title1', isCompleted: false, id: 5 },\r\n    { title: 'Title1', isCompleted: false, id: 6 },\r\n  ],\r\n};\r\n\r\nconst renderSelectedBar = () => {\r\n  const seleteds = Object.keys(proj)\r\n    .map((item) => {\r\n      const checkeds = item === selectedProject ? 'selected' : '';\r\n      return `<option ${checkeds}>${item}</option>`;\r\n    })\r\n    .join('');\r\n\r\n  return `<select class='main__select'>${seleteds}</select>`;\r\n};\r\n\r\nconst renderToDoList = () => {\r\n  const selectedProjectTodos = proj[selectedProject];\r\n  if (!selectedProjectTodos) return '';\r\n\r\n  return selectedProjectTodos\r\n    .map(({ id, title, isCompleted }) => {\r\n      let checked = isCompleted ? 'checked' : '';\r\n      return `\r\n      <div class='main__todo' data-id=${id}>\r\n        <div class='main__todo-left'>\r\n          <input type=\"checkbox\" class=\"main__todo-isCompleted\" ${checked}>\r\n          <p class='main__todo-title'>${title}</p>\r\n        </div>\r\n        <button class='main__todo-btn'>X</button>\r\n      </div>`;\r\n    })\r\n    .join('');\r\n};\r\n\r\nconst main = () => {\r\n  const todoList = renderToDoList();\r\n  const selectedBar = renderSelectedBar();\r\n  return `<main class='main'>\r\n    <div class='main__selectedbar'>\r\n      ${selectedBar}\r\n      <form class='main__addproject'>\r\n        <input type='text' class='main__addproject-input' placeholder='add new project'>\r\n        <button type='submit' class='main__addproject-btn'>Add Project</button>\r\n      </form>\r\n    </div>\r\n    <div class='main__todos'>\r\n      ${todoList}\r\n    </div>\r\n    <form class='main__addtodo'>\r\n      <input type='text' class='main__addtodo-input' placeholder='add new todo'>\r\n      <button type='submit' class='main__addtodo-btn'>Add</button>\r\n    </form>\r\n  </main>`;\r\n};\r\n\r\nconst handleNewTodo = (e) => {\r\n  e.preventDefault();\r\n  const input = document.querySelector('.main__addtodo-input');\r\n  if (!input) return;\r\n  const title = input.value.trim();\r\n\r\n  const newTodo = {\r\n    title: title,\r\n    isCompleted: false,\r\n    id: _todoId,\r\n  };\r\n  _todoId += 1;\r\n\r\n  proj = { ...proj, [selectedProject]: [...proj[selectedProject], newTodo] };\r\n  input.value = '';\r\n\r\n  updatePage();\r\n};\r\n\r\nconst handleDeleteToDo = (e) => {\r\n  const targetId = e.target.parentElement.dataset.id;\r\n  const newProj = {\r\n    ...proj,\r\n    [selectedProject]: proj[selectedProject].filter((item) => item.id !== Number(targetId)),\r\n  };\r\n  proj = newProj;\r\n\r\n  updatePage();\r\n};\r\n\r\nconst handleSelect = (e) => {\r\n  selectedProject = e.target.value;\r\n  updatePage();\r\n};\r\n\r\nconst handleIsCompleted = (e) => {\r\n  const targetId = e.target.parentElement.parentElement.dataset.id;\r\n\r\n  if (!proj[selectedProject]) return;\r\n\r\n  proj[selectedProject] = proj[selectedProject].map((item) => {\r\n    if (item.id === Number(targetId)) {\r\n      return {\r\n        ...item,\r\n        isCompleted: !item.isCompleted,\r\n      };\r\n    } else {\r\n      return item;\r\n    }\r\n  });\r\n};\r\n\r\nconst handleNewProject = (e) => {\r\n  e.preventDefault();\r\n  const input = document.querySelector('.main__addproject-input');\r\n\r\n  if (!input) return;\r\n  const inputText = input.value.trim();\r\n\r\n  proj[inputText] = [];\r\n  input.value = '';\r\n\r\n  updatePage();\r\n};\r\n\r\nconst updatePage = () => {\r\n  content.textContent = '';\r\n  content.innerHTML = `\r\n    ${(0,_components_index__WEBPACK_IMPORTED_MODULE_0__.header)()}\r\n    ${main()}\r\n    ${(0,_components_index__WEBPACK_IMPORTED_MODULE_0__.footer)()}\r\n  `;\r\n\r\n  const addToDoBtn = document.querySelector('.main__addtodo');\r\n  addToDoBtn.addEventListener('submit', handleNewTodo);\r\n  const deleteToDo = document.querySelectorAll('.main__todo-btn');\r\n  deleteToDo.forEach((btn) => btn.addEventListener('click', handleDeleteToDo));\r\n  const checkedToDo = document.querySelectorAll('.main__todo-isCompleted');\r\n  checkedToDo.forEach((btn) => btn.addEventListener('click', handleIsCompleted));\r\n  const select = document.querySelector('.main__select');\r\n  select.addEventListener('change', handleSelect);\r\n  const addNewProject = document.querySelector('.main__addproject');\r\n  addNewProject.addEventListener('submit', handleNewProject);\r\n};\r\n\r\nfunction init() {\r\n  updatePage();\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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