exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 8860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ icons)
/* harmony export */ });
/* harmony import */ var _images_icons_inline_telegram_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8955);
/* harmony import */ var _images_icons_inline_telegram_inline_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_icons_inline_telegram_inline_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_icons_inline_linkedin_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8995);
/* harmony import */ var _images_icons_inline_linkedin_inline_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_icons_inline_linkedin_inline_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_icons_inline_twitter_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6236);
/* harmony import */ var _images_icons_inline_twitter_inline_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_icons_inline_twitter_inline_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_icons_inline_github_inline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(429);
/* harmony import */ var _images_icons_inline_github_inline_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_icons_inline_github_inline_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_icons_inline_email_inline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(795);
/* harmony import */ var _images_icons_inline_email_inline_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_icons_inline_email_inline_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_icons_inline_phone_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);
/* harmony import */ var _images_icons_inline_phone_inline_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_icons_inline_phone_inline_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_icons_inline_error_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1389);
/* harmony import */ var _images_icons_inline_error_inline_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_icons_inline_error_inline_svg__WEBPACK_IMPORTED_MODULE_6__);
const icons={Telegram: (_images_icons_inline_telegram_inline_svg__WEBPACK_IMPORTED_MODULE_0___default()),Linkedin: (_images_icons_inline_linkedin_inline_svg__WEBPACK_IMPORTED_MODULE_1___default()),Twitter: (_images_icons_inline_twitter_inline_svg__WEBPACK_IMPORTED_MODULE_2___default()),Github: (_images_icons_inline_github_inline_svg__WEBPACK_IMPORTED_MODULE_3___default()),Email: (_images_icons_inline_email_inline_svg__WEBPACK_IMPORTED_MODULE_4___default()),Phone: (_images_icons_inline_phone_inline_svg__WEBPACK_IMPORTED_MODULE_5___default()),Error404: (_images_icons_inline_error_inline_svg__WEBPACK_IMPORTED_MODULE_6___default())};

/***/ }),

/***/ 470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_404)
});

// EXTERNAL MODULE: external "/Users/vladislav/WebstormProjects/VladislavDesu.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(3391);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/components/404/404.module.scss
// Exports
var error = "_404-module--error--xb-N0";
var errorTitle = "_404-module--error-title--hEYLd";
var errorIcon = "_404-module--error-icon--i0g8S";
var wave = "_404-module--wave--Nz5yA";
var errorText = "_404-module--error-text--PmrOc";

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
;// CONCATENATED MODULE: ./src/components/button/button.module.scss
// Exports
var button_module_button = "button-module--button--X-qXA";

;// CONCATENATED MODULE: ./src/components/button/index.js
const Button=({link,text})=>{return/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:button_module_button,to:link},text);};/* harmony default export */ const components_button = (Button);
// EXTERNAL MODULE: ./src/assets/icons.js
var icons = __webpack_require__(8860);
;// CONCATENATED MODULE: ./src/components/404/index.js
const Error=()=>{const{Error404}=icons/* icons */.c;return/*#__PURE__*/index_js_default().createElement("main",{className:error},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("h1",{className:errorTitle},"Page not found"),/*#__PURE__*/index_js_default().createElement("p",{className:errorText},"Sorry we couldn\u2019t find what you were looking for."),/*#__PURE__*/index_js_default().createElement(components_button,{text:"Go home",link:"/"})),/*#__PURE__*/index_js_default().createElement("div",{className:errorIcon},/*#__PURE__*/index_js_default().createElement(Error404,null)));};/* harmony default export */ const _404 = (Error);
;// CONCATENATED MODULE: ./src/pages/404.js
const NotFoundPage=()=>/*#__PURE__*/index_js_.createElement(_404,null);/* harmony default export */ const pages_404 = (NotFoundPage);

/***/ }),

/***/ 795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(3391);

function EmailInline (props) {
    return React.createElement("svg",props,[React.createElement("path",{"fill":"none","d":"M0 0h24v24H0V0z","key":0}),React.createElement("path",{"d":"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z","key":1})]);
}

EmailInline.defaultProps = {"width":"24","height":"24","viewBox":"2 2 20 20"};

module.exports = EmailInline;

EmailInline.default = EmailInline;


/***/ }),

/***/ 1389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(3391);

function ErrorInline (props) {
    return React.createElement("svg",props,[React.createElement("polygon",{"fill":"#a766ff","points":"341.33 206.73 341.33 108.2 426.67 157.47 426.67 256 341.33 206.73","key":0}),React.createElement("polyline",{"fill":"#9c1de7","points":"341.33 108.2 426.67 58.94 512 108.2 426.67 157.47","key":1}),React.createElement("polyline",{"fill":"#7255f3","points":"426.67 157.47 512 108.2 512 206.73 426.67 256","key":2}),React.createElement("line",{"x1":"298.67","x2":"384","y1":"231.37","y2":"182.1","fill":"none","stroke":"#581b98","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"3","key":3}),React.createElement("polyline",{"fill":"#7255f3","points":"256 256 341.33 206.73 341.33 305.27 256 354.53","key":4}),React.createElement("polygon",{"fill":"#a766ff","points":"0 206.73 0 108.2 85.33 157.47 85.33 256 0 206.73","key":5}),React.createElement("polyline",{"fill":"#9c1de7","points":"0 108.2 85.33 58.94 170.66 108.2 85.33 157.47","key":6}),React.createElement("polyline",{"fill":"#7255f3","points":"85.33 157.47 170.66 108.2 170.66 206.73 85.33 256","key":7}),React.createElement("polyline",{"fill":"#7255f3","points":"426.67 354.53 512 305.27 512 403.8 426.67 453.06","key":8}),React.createElement("line",{"x1":"128","x2":"212.88","y1":"182.1","y2":"231.11","fill":"none","stroke":"#581b98","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"3","key":9}),React.createElement("polygon",{"fill":"#a766ff","points":"170.67 305.26 170.67 206.73 256 256 256 354.53 170.67 305.26","key":10}),React.createElement("line",{"x1":"298.67","x2":"384","y1":"280.63","y2":"329.9","fill":"none","stroke":"#581b98","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"3","key":11}),React.createElement("polyline",{"fill":"#9c1de7","points":"341.33 305.27 426.67 256 512 305.27 426.67 354.53","key":12}),React.createElement("polygon",{"fill":"#a766ff","points":"341.33 403.8 341.33 305.27 426.67 354.53 426.67 453.06 341.33 403.8","key":13}),React.createElement("polyline",{"fill":"#9c1de7","points":"170.67 206.73 256 157.47 341.33 206.73 256 256","key":14}),React.createElement("line",{"x1":"128","x2":"212.88","y1":"329.9","y2":"280.63","fill":"none","stroke":"#581b98","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"3","key":15}),React.createElement("polygon",{"fill":"#a766ff","points":"0 403.8 0 305.27 85.33 354.53 85.33 453.06 0 403.8","key":16}),React.createElement("polyline",{"fill":"#9c1de7","points":"0 305.27 85.33 256 170.66 305.27 85.33 354.53","key":17}),React.createElement("polyline",{"fill":"#7255f3","points":"85.33 354.53 170.67 305.27 170.67 403.8 85.33 453.06","key":18})]);
}

ErrorInline.defaultProps = {"viewBox":"0 0 512 512","width":"400","height":"400"};

module.exports = ErrorInline;

ErrorInline.default = ErrorInline;


/***/ }),

/***/ 429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(3391);

function GithubInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M20.11554,5.90131a3.88274,3.88274,0,0,0-.26-.31,4.41253,4.41253,0,0,0,.21-.76,5.28351,5.28351,0,0,0-.35-2.8s-1.12-.35-3.69,1.38a12.47675,12.47675,0,0,0-3.35-.45,12.60429,12.60429,0,0,0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.26343,5.26343,0,0,0-.35,2.77,4.21027,4.21027,0,0,0,.22.79c-.09.1-.18.21-.26.31a5.13973,5.13973,0,0,0-1.12,3.3,7.68624,7.68624,0,0,0,.04.85c.31994,4.43,3.27,5.46,6.08,5.78a2.55759,2.55759,0,0,0-.77,1.39,4.02183,4.02183,0,0,0-.13,1.09v1.30957c-1.11822.09937-2.26648-.06335-2.62219-1.06134a5.69461,5.69461,0,0,0-1.83447-2.41211,1.1789,1.1789,0,0,1-.169-.1123,1.00141,1.00141,0,0,0-.93066-.64551H3.77441a.99965.99965,0,0,0-1,.99512c-.0039.8125.80909,1.33691,1.14258,1.51562a4.4665,4.4665,0,0,1,.92285,1.3584c.36426,1.02344,1.4292,2.57812,4.46582,2.376.001.03515.002.06835.00245.09863l.00439.26758a.99974.99974,0,0,0,1,1l.00311-.00061V23.001h4.71112a.99974.99974,0,0,0,1-1s.00733-3.15967.00733-3.68964a4.02421,4.02421,0,0,0-.13-1.09l-.00183-.0061.00336.0061c-.00861-.035-.02173-.06353-.03113-.09747A2.53213,2.53213,0,0,0,15.134,15.8313l.0116.02087c-.00684-.00616-.01324-.01489-.02008-.02087,2.81-.32,5.74-1.37,6.06-5.78a7.68675,7.68675,0,0,0,.04-.85A5.2306,5.2306,0,0,0,20.11554,5.90131Z"}));
}

GithubInline.defaultProps = {"fill":"inherit","viewBox":"0 0 24 24","width":"288","height":"288"};

module.exports = GithubInline;

GithubInline.default = GithubInline;


/***/ }),

/***/ 8995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(3391);

function LinkedinInline (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 00-.145-.028A3.207 3.207 0 0012.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 00-2.676-3.448z","key":0}),React.createElement("circle",{"cx":"1.75","cy":"1.75","r":"1.75","key":1})]);
}

LinkedinInline.defaultProps = {"fill":"inherit","viewBox":"0 0 16 16","width":"288","height":"288"};

module.exports = LinkedinInline;

LinkedinInline.default = LinkedinInline;


/***/ }),

/***/ 7283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(3391);

function PhoneInline (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.14 26.14 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z","key":0}),React.createElement("path",{"d":"M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z","key":1})]);
}

PhoneInline.defaultProps = {"viewBox":"1 1 30 30"};

module.exports = PhoneInline;

PhoneInline.default = PhoneInline;


/***/ }),

/***/ 8955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(3391);

function TelegramInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"}));
}

TelegramInline.defaultProps = {"fill":"inherit","enableBackground":"new 0 0 24 24","viewBox":"0 0 24 24","width":"288","height":"288"};

module.exports = TelegramInline;

TelegramInline.default = TelegramInline;


/***/ }),

/***/ 6236:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(3391);

function TwitterInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"}));
}

TwitterInline.defaultProps = {"fill":"inherit","viewBox":"0 0 16 16","width":"288","height":"288"};

module.exports = TwitterInline;

TwitterInline.default = TwitterInline;


/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map