"use strict";
exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./src/components/404/404.module.scss":
/*!********************************************!*\
  !*** ./src/components/404/404.module.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "errorText": () => (/* binding */ errorText)
/* harmony export */ });
// Exports
var error = "_404-module--error--xb-N0";
var errorText = "_404-module--error-text--PmrOc";


/***/ }),

/***/ "./src/components/button/button.module.scss":
/*!**************************************************!*\
  !*** ./src/components/button/button.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "button": () => (/* binding */ button)
/* harmony export */ });
// Exports
var button = "button-module--button--X-qXA";


/***/ }),

/***/ "./src/components/404/index.js":
/*!*************************************!*\
  !*** ./src/components/404/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _404_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.module.scss */ "./src/components/404/404.module.scss");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./src/components/button/index.js");




const Error = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: _404_module_scss__WEBPACK_IMPORTED_MODULE_1__.error
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _404_module_scss__WEBPACK_IMPORTED_MODULE_1__.errorText
  }, "Sorry we couldn\u2019t find what you were looking for."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Go home",
    link: "/"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.module.scss */ "./src/components/button/button.module.scss");




const Button = ({
  link,
  text
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: _button_module_scss__WEBPACK_IMPORTED_MODULE_2__.button,
    to: link
  }, text);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/404 */ "./src/components/404/index.js");



const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_404__WEBPACK_IMPORTED_MODULE_1__["default"], null);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map