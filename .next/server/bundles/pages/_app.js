module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CssBaseline__ = __webpack_require__("@material-ui/core/CssBaseline");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_jss_lib_JssProvider__ = __webpack_require__("react-jss/lib/JssProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_jss_lib_JssProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_jss_lib_JssProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_getPageContext__ = __webpack_require__("./src/getPageContext.js");
var _jsxFileName = "/Users/dizhenlyu/honora-fa/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this));
    _this.pageContext = Object(__WEBPACK_IMPORTED_MODULE_7__src_getPageContext__["a" /* default */])();
    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1663936132"
      }, "Honora")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1663936132",
        css: "body{background:#EEF4F9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkIyQixBQUdnQyxtQkFDckIiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGl6aGVubHl1L2hvbm9yYS1mYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgSnNzUHJvdmlkZXIgZnJvbSAncmVhY3QtanNzL2xpYi9Kc3NQcm92aWRlcic7XG5pbXBvcnQgZ2V0UGFnZUNvbnRleHQgZnJvbSAnLi4vc3JjL2dldFBhZ2VDb250ZXh0JztcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZUNvbnRleHQgPSBnZXRQYWdlQ29udGV4dCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMgJiYganNzU3R5bGVzLnBhcmVudE5vZGUpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Ib25vcmE8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7IFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VFRjRGOTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgey8qIFdyYXAgZXZlcnkgcGFnZSBpbiBKc3MgYW5kIFRoZW1lIHByb3ZpZGVycyAqL31cbiAgICAgICAgPEpzc1Byb3ZpZGVyXG4gICAgICAgICAgcmVnaXN0cnk9e3RoaXMucGFnZUNvbnRleHQuc2hlZXRzUmVnaXN0cnl9XG4gICAgICAgICAgZ2VuZXJhdGVDbGFzc05hbWU9e3RoaXMucGFnZUNvbnRleHQuZ2VuZXJhdGVDbGFzc05hbWV9XG4gICAgICAgID5cbiAgICAgICAgICB7LyogTXVpVGhlbWVQcm92aWRlciBtYWtlcyB0aGUgdGhlbWUgYXZhaWxhYmxlIGRvd24gdGhlIFJlYWN0XG4gICAgICAgICAgICAgIHRyZWUgdGhhbmtzIHRvIFJlYWN0IGNvbnRleHQuICovfVxuICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyXG4gICAgICAgICAgICB0aGVtZT17dGhpcy5wYWdlQ29udGV4dC50aGVtZX1cbiAgICAgICAgICAgIHNoZWV0c01hbmFnZXI9e3RoaXMucGFnZUNvbnRleHQuc2hlZXRzTWFuYWdlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgIHsvKiBQYXNzIHBhZ2VDb250ZXh0IHRvIHRoZSBfZG9jdW1lbnQgdGhvdWdoIHRoZSByZW5kZXJQYWdlIGVuaGFuY2VyXG4gICAgICAgICAgICAgICAgdG8gcmVuZGVyIGNvbGxlY3RlZCBzdHlsZXMgb24gc2VydmVyLXNpZGUuICovfVxuICAgICAgICAgICAgPENvbXBvbmVudCBwYWdlQ29udGV4dD17dGhpcy5wYWdlQ29udGV4dH0gey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvSnNzUHJvdmlkZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl19 */\n/*@ sourceURL=pages/_app.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_jss_lib_JssProvider___default.a, {
        registry: this.pageContext.sheetsRegistry,
        generateClassName: this.pageContext.generateClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["MuiThemeProvider"], {
        theme: this.pageContext.theme,
        sheetsManager: this.pageContext.sheetsManager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CssBaseline___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({
        pageContext: this.pageContext
      }, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })))));
    }
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__("jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__ = __webpack_require__("@material-ui/core/colors/purple");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green__ = __webpack_require__("@material-ui/core/colors/green");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green__);



 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  env: {
    drawerWidth: '240px'
  },
  overrides: {
    MuiListItemText: {
      // Name of the component ⚛️ / style sheet
      primary: {
        // Name of the rule
        color: 'white' // Some CSS

      }
    },
    MuiListItemIcon: {
      root: {
        color: 'white'
      }
    },
    MuiButton: {
      label: {
        color: 'white'
      }
    }
  },
  palette: {
    primary: {
      main: '#4E546C'
    },
    secondary: {
      main: '#03A9F4'
    },
    logoBar: {
      main: '#555C78'
    },
    background: {
      default: '#EEF4F9'
    }
  },
  shadows: ["none"],
  typography: {
    useNextVariants: true
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createGenerateClassName"])()
  };
}

var pageContext;
function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/colors/green":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/colors/purple":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/purple");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "jss":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map