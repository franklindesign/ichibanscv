webpackHotUpdate("static/development/pages/menu.js",{

/***/ "./menu/FreshRolls.js":
/*!****************************!*\
  !*** ./menu/FreshRolls.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FreshRolls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CardItem */ "./components/CardItem.js");
var _jsxFileName = "/Users/franklinmanghi/Desktop/nextjs-ichiban/menu/FreshRolls.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var freshRolls = [{
  id: 1,
  name: "Yellowtail Delight Roll",
  description: "spicy tuna, cucumber, yellowtail, jalapeno, red onion, masago, and ponzu sauce",
  price: 12.99
}, {
  id: 2,
  name: "Hawaiian Roll",
  description: "spicy tuna, cucumber, yellowtail, jalapeno, red onion, masago, and ponzu sauce",
  price: 12.99
}, {
  id: 3,
  name: "Cucumber Sashimi Roll",
  description: "spicy tuna, cucumber, yellowtail, jalapeno, red onion, masago, and ponzu sauce",
  price: 12.99
}, {
  id: 4,
  name: "Sakura Roll",
  description: "spicy tuna, cucumber, yellowtail, jalapeno, red onion, masago, and ponzu sauce",
  price: 12.99
}];
function FreshRolls() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, freshRolls.map(function (freshRoll) {
    return __jsx(Grid, {
      item: true,
      xs: 12,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(_components_CardItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: freshRoll.id,
      itemName: {
        text: "".concat(freshRoll.name)
      },
      itemDescription: {
        text: "".concat(freshRoll.description)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  }));
}

/***/ })

})
//# sourceMappingURL=menu.js.46f6668c06652c8b4c13.hot-update.js.map