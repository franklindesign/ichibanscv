webpackHotUpdate("static/development/pages/menu.js",{

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CardItem */ "./components/CardItem.js");
var _jsxFileName = "/Users/franklinmanghi/Desktop/nextjs-ichiban/pages/menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    ayce: {
      textAlign: "center"
    }
  };
});
var freshRolls = [{
  id: 1,
  name: "Yellowtail Delight Roll",
  description: "spicy tuna, cucumber, yellowtail, jalapeno, red onion, masago, and ponzu sauce",
  price: 12.99,
  image: "",
  largeImage: ""
}, {
  id: 2,
  name: "Hawaiian Roll",
  description: "spicy tuna roll topped with tuna, masago, green onion and goma sauce",
  price: 12.99,
  image: "",
  largeImage: ""
}, {
  id: 3,
  name: "Cucumber Sashimi Roll",
  description: "four kinds of fish, avocado, cucumber wrap",
  price: 12.99,
  image: "",
  largeImage: ""
}, {
  id: 4,
  name: "Sakura Roll",
  description: "tuna, salmon, yellowtail, white fish, crab, asparagus, soy paper wrap, ponzu and house sauce.",
  price: 12.99,
  image: "../static/ph.png",
  largeImage: ""
}, {
  id: 5,
  name: "Sexy Salmon Roll",
  description: "salmon, crab, avocado, and cucumber wrap",
  price: 12.95,
  image: "../static/ph.png",
  largeImage: ""
}, {
  id: 6,
  name: "Lemon Roll",
  description: "California roll, salmon, sliced lemon on top",
  price: 11.95,
  image: "../static/ph.png",
  largeImage: ""
}, {
  id: 7,
  name: "Mexican Roll",
  description: "spicy shrimp, crab roll, avocado, spicy mayo and hot sauce",
  price: 10.95,
  image: "../static/ph.png",
  largeImage: ""
}, {
  id: 8,
  name: "Spicy Albacore Crunch Roll",
  description: "spicy tuna, cucumber, yellowtail, jalapeno, red onion, masago, and ponzu sauce",
  price: 11.95,
  image: "../static/ph.png",
  largeImage: ""
}, {
  id: 9,
  name: "Albacore Delight Roll",
  description: "albacore, crab, red onion, green onion, masago, garlic, and ponzu sauce",
  price: 11.95,
  image: " ",
  largeImage: ""
}, {
  id: 10,
  name: "Mango Tango Roll",
  description: "shrimp tempura, cucumber, mango, avocado and salmon on top",
  price: 10.95,
  image: " ",
  largeImage: ""
}, {
  id: 11,
  name: "Mango Mania Roll",
  description: "avocado, cucumber, mango, fresh salmon on top",
  price: 10.95,
  image: " ",
  largeImage: ""
}, {
  id: 12,
  name: "Alaskan Roll",
  description: "spicy tuna roll topped with salmon",
  price: 11.95,
  image: " ",
  largeImage: ""
}, {
  id: 13,
  name: "Rainbow Roll",
  description: "California roll topped with four kinds of fish and avocado",
  price: 12.95,
  image: " ",
  largeImage: ""
}, {
  id: 14,
  name: "911 Roll",
  description: "spicy tuna, avocado, chili oil, hot and sweet sauce",
  price: 10.95,
  image: " ",
  largeImage: ""
}];
function menu() {
  var classes = useStyles();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: classes.ayce,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Fresh Rolls"))), freshRolls.map(function (freshRoll) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      xs: 12,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(_components_CardItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: freshRoll.id,
      itemName: {
        text: "".concat(freshRoll.name)
      },
      itemDescription: {
        text: "".concat(freshRoll.description)
      },
      itemImage: {
        image: "".concat(freshRoll.image)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }));
  })))));
}

/***/ })

})
//# sourceMappingURL=menu.js.3ce660b2f26842e491f8.hot-update.js.map