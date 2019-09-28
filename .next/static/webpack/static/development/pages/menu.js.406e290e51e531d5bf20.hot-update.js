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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
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
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, freshRolls.map(function (freshRoll) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      xs: 12,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
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
        lineNumber: 40
      },
      __self: this
    }));
  }));
}

/***/ })

})
//# sourceMappingURL=menu.js.406e290e51e531d5bf20.hot-update.js.map