webpackHotUpdate("static/development/pages/ayce.js",{

/***/ "./components/AyceMenu.js":
/*!********************************!*\
  !*** ./components/AyceMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollableTabsButtonAuto; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");



var _jsxFileName = "/Users/franklinmanghi/Desktop/nextjs-ichiban/components/AyceMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "value", "index"]);

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-auto-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-auto-tab-".concat(index)
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children));
}

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: "scrollable-auto-tab-".concat(index),
    "aria-controls": "scrollable-auto-tabpanel-".concat(index)
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper
    }
  };
});
function ScrollableTabsButtonAuto() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var sushis = [{
    id: 1,
    item: "Tuna"
  }, {
    id: 2,
    item: "Salmon"
  }, {
    id: 3,
    item: "Escolar (Ono)"
  }, {
    id: 4,
    item: "Albacore"
  }, {
    id: 5,
    item: "Halibut"
  }, {
    id: 6,
    item: "Yellowtail"
  }, {
    id: 7,
    item: "Shrimp"
  }, {
    id: 8,
    item: "White Fish"
  }, {
    id: 9,
    item: "Crab"
  }, {
    id: 10,
    item: "Red Clam"
  }, {
    id: 11,
    item: "Octopus"
  }, {
    id: 12,
    item: "Egg"
  }, {
    id: 13,
    item: "Smelt Egg"
  }, {
    id: 14,
    item: "Squid"
  }, {
    id: 15,
    item: "Fresh Water Eel"
  }, {
    id: 16,
    item: "Salmon Egg"
  }, {
    id: 17,
    item: "Ocean Striped Bass"
  }, {
    id: 18,
    item: "Scallop"
  }, {
    id: 19,
    item: "Mackerel"
  }];
  var listSushis = sushis.map(function (sushi) {
    return __jsx("li", {
      key: sushi.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, sushi.item);
  });
  var regularRolls = [{
    id: 1,
    item: "Tuna Roll"
  }, {
    id: 2,
    item: "Crab Roll"
  }, {
    id: 3,
    item: "Eel Roll"
  }, {
    id: 4,
    item: "Scallop Roll"
  }, {
    id: 5,
    item: "Avocado Roll"
  }, {
    id: 6,
    item: "Shrimp Roll"
  }, {
    id: 7,
    item: "Cucumber Roll"
  }, {
    id: 8,
    item: "Yellowtail Roll"
  }, {
    id: 9,
    item: "California Roll"
  }, {
    id: 10,
    item: "Salmon Roll"
  }, {
    id: 11,
    item: "Vegetable Roll"
  }, {
    id: 12,
    item: "Spicy Tuna Roll"
  }, {
    id: 13,
    item: "Salmon Skin Roll"
  }, {
    id: 14,
    item: "Shrimp Crab Roll"
  }, {
    id: 15,
    item: "Asparagus Roll"
  }, {
    id: 16,
    item: "Albacore Roll"
  }, {
    id: 17,
    item: "Philly Roll"
  }];
  var listRegularRolls = sushis.map(function (regularRoll) {
    return __jsx("li", {
      key: regularRolls.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, regularRolls.item);
  });
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "static",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "scrollable auto tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Sushi"
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Regular Rolls"
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Fresh Rolls"
  }, a11yProps(2), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Tempura Rolls"
  }, a11yProps(3), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Baked Rolls"
  }, a11yProps(4), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Specialty Item"
  }, a11yProps(5), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Appetizers"
  }, a11yProps(6), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Kitchen"
  }, a11yProps(7), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Sushi:"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, listSushis)), __jsx(TabPanel, {
    value: value,
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, listRegularRolls)), __jsx(TabPanel, {
    value: value,
    index: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Item Three"), __jsx(TabPanel, {
    value: value,
    index: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Item Four"), __jsx(TabPanel, {
    value: value,
    index: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Item Five"), __jsx(TabPanel, {
    value: value,
    index: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Item Six"), __jsx(TabPanel, {
    value: value,
    index: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Item Seven"));
}

/***/ })

})
//# sourceMappingURL=ayce.js.230e08266c5fc632cbae.hot-update.js.map