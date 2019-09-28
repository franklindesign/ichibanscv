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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CardItem */ "./components/CardItem.js");
var _jsxFileName = "/Users/franklinmanghi/Desktop/nextjs-ichiban/pages/menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
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
function menu() {
  var classes = useStyles();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: classes.ayce,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Fresh Rolls"))), freshRolls.map(function (freshRoll) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 12,
      md: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(_components_CardItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: freshRoll.id,
      itemName: {
        text: "".concat(freshRoll.name)
      },
      itemDescription: {
        text: "".concat(freshRoll.description)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })));
  })))));
}

/***/ })

})
//# sourceMappingURL=menu.js.be6cae2148a5077f9872.hot-update.js.map