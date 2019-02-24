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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/EnhancedTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Table__ = __webpack_require__("@material-ui/core/Table");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableBody__ = __webpack_require__("@material-ui/core/TableBody");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableCell__ = __webpack_require__("@material-ui/core/TableCell");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableCell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableCell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableHead__ = __webpack_require__("@material-ui/core/TableHead");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_TablePagination__ = __webpack_require__("@material-ui/core/TablePagination");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_TablePagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_TablePagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow__ = __webpack_require__("@material-ui/core/TableRow");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_TableSortLabel__ = __webpack_require__("@material-ui/core/TableSortLabel");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_TableSortLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_TableSortLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Tooltip__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Paper__);
var _jsxFileName = "/Users/dizhenlyu/honora-fa/components/EnhancedTable.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var counter = 0;

function createData(name, amount, dateCompleted, dateAdded) {
  counter += 1;
  return {
    id: counter,
    name: name,
    amount: amount,
    dateCompleted: dateCompleted,
    dateAdded: dateAdded
  };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function getSorting(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return desc(a, b, orderBy);
  } : function (a, b) {
    return -desc(a, b, orderBy);
  };
}

var rows = [{
  id: 'name',
  numeric: false,
  disablePadding: false,
  label: 'Project Name'
}, {
  id: 'amount',
  numeric: true,
  disablePadding: false,
  label: 'Amount (USD)'
}, {
  id: 'dateCompleted',
  numeric: true,
  disablePadding: false,
  label: 'Date Completed'
}, {
  id: 'dateAdded',
  numeric: true,
  disablePadding: false,
  label: 'Date Added'
}];

var EnhancedTableHead =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EnhancedTableHead, _React$Component);

  function EnhancedTableHead() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, EnhancedTableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = EnhancedTableHead.__proto__ || Object.getPrototypeOf(EnhancedTableHead)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "createSortHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(property) {
        return function (event) {
          _this.props.onRequestSort(event, property);
        };
      }
    }), _temp));
  }

  _createClass(EnhancedTableHead, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          order = _props.order,
          orderBy = _props.orderBy,
          rowCount = _props.rowCount;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableHead___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, rows.map(function (row) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableCell___default.a, {
          key: row.id,
          align: row.numeric ? 'right' : 'left',
          padding: row.disablePadding ? 'none' : 'default',
          sortDirection: orderBy === row.id ? order : false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Tooltip___default.a, {
          title: "Sort",
          placement: row.numeric ? 'bottom-end' : 'bottom-start',
          enterDelay: 300,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_TableSortLabel___default.a, {
          active: orderBy === row.id,
          direction: order,
          onClick: _this2.createSortHandler(row.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, row.label)));
      }, this)));
    }
  }]);

  return EnhancedTableHead;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

EnhancedTableHead.propTypes = {
  onRequestSort: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  order: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  orderBy: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  rowCount: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
};

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      float: 'left'
    },
    table: {
      minWidth: 624
    },
    tableWrapper: {
      overflowX: 'auto'
    }
  };
};

var EnhancedTable =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(EnhancedTable, _React$Component2);

  function EnhancedTable() {
    var _ref2;

    var _temp2, _this3;

    _classCallCheck(this, EnhancedTable);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this3, (_temp2 = _this3 = _possibleConstructorReturn(this, (_ref2 = EnhancedTable.__proto__ || Object.getPrototypeOf(EnhancedTable)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this3), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        order: 'asc',
        orderBy: 'name',
        data: [createData('Cupcake', '305,000', '12/22/2018', '12/23/2018'), createData('Donut', '452,000', '11/26/2018', '11/29/2018'), createData('Eclair', '262,000', '12/30/2018', '12/31/2018'), createData('Frozen yoghurt', '159,000', '09/18/2018', '09/23/2018'), createData('Gingerbread', '356,000', '10/26/2018', '11/03/2018'), createData('Honeycomb', '408,000', '10/29/2018', '11/03/2018'), createData('Ice cream sandwich', '237,000', '12/27/2018', '12/29/2018'), createData('Jelly Bean', '375,000', '12/12/2018', '12/20/2018'), createData('KitKat', '518,000', '09/11/2018', '09/21/2018'), createData('Lollipop', '392,000', '08/23/2018', '09/01/2018'), createData('Marshmallow', '318,000', '11/27/2018', '11/30/2018'), createData('Nougat', '360,000', '12/28/2018', '12/30/2018'), createData('Oreo', '437,000', '03/27/2018', '06/02/2018')],
        page: 0,
        rowsPerPage: 5
      }
    }), Object.defineProperty(_assertThisInitialized(_this3), "handleRequestSort", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, property) {
        var orderBy = property;
        var order = 'desc';

        if (_this3.state.orderBy === property && _this3.state.order === 'desc') {
          order = 'asc';
        }

        _this3.setState({
          order: order,
          orderBy: orderBy
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this3), "handleChangePage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, page) {
        _this3.setState({
          page: page
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this3), "handleChangeRowsPerPage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this3.setState({
          rowsPerPage: event.target.value
        });
      }
    }), _temp2));
  }

  _createClass(EnhancedTable, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          data = _state.data,
          order = _state.order,
          orderBy = _state.orderBy,
          rowsPerPage = _state.rowsPerPage,
          page = _state.page;
      var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Paper___default.a, {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.tableWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Table___default.a, {
        className: classes.table,
        "aria-labelledby": "tableTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EnhancedTableHead, {
        order: order,
        orderBy: orderBy,
        onRequestSort: this.handleRequestSort,
        rowCount: data.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableBody___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, stableSort(data, getSorting(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (n) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default.a, {
          hover: true,
          tabIndex: -1,
          key: n.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableCell___default.a, {
          component: "th",
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        }, n.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableCell___default.a, {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, n.amount), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableCell___default.a, {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }, n.dateCompleted), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableCell___default.a, {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }, n.dateAdded));
      }), emptyRows > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default.a, {
        style: {
          height: 49 * emptyRows
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableCell___default.a, {
        colSpan: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_TablePagination___default.a, {
        rowsPerPageOptions: [5, 10, 25],
        component: "div",
        count: data.length,
        rowsPerPage: rowsPerPage,
        page: page,
        backIconButtonProps: {
          'aria-label': 'Previous Page'
        },
        nextIconButtonProps: {
          'aria-label': 'Next Page'
        },
        onChangePage: this.handleChangePage,
        onChangeRowsPerPage: this.handleChangeRowsPerPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }));
    }
  }]);

  return EnhancedTable;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

EnhancedTable.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(EnhancedTable));

/***/ }),

/***/ "./components/MenuAppBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_AppBar__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Toolbar__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_IconButton__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Menu__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_AccountCircle__ = __webpack_require__("@material-ui/icons/AccountCircle");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_AccountCircle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_AccountCircle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Sidenav__ = __webpack_require__("./components/Sidenav.js");
var _jsxFileName = "/Users/dizhenlyu/honora-fa/components/MenuAppBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    appBar: _defineProperty({
      backgroundColor: 'white',
      marginLeft: theme.env.drawerWidth
    }, theme.breakpoints.up('md'), {
      width: "calc(100% - ".concat(theme.env.drawerWidth, ")")
    }),
    menuButton: _defineProperty({
      marginRight: 20
    }, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    pageTitle: _defineProperty({
      flexGrow: 1,
      marginLeft: 0
    }, theme.breakpoints.up('md'), {
      marginLeft: 24
    })
  };
};

var MenuAppBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuAppBar, _React$Component);

  function MenuAppBar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MenuAppBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MenuAppBar.__proto__ || Object.getPrototypeOf(MenuAppBar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        mobileOpen: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleDrawerToggle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (state) {
          return {
            mobileOpen: !state.mobileOpen
          };
        });
      }
    }), _temp));
  }

  _createClass(MenuAppBar, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_AppBar___default.a, {
        position: "fixed",
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Toolbar___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_IconButton___default.a, {
        "aria-label": "Open drawer",
        className: classes.menuButton,
        onClick: this.handleDrawerToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Menu___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
        variant: "h6",
        className: classes.pageTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Investment Project Overview"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_IconButton___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_AccountCircle___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Sidenav__["a" /* default */], {
        mobileOpen: this.state.mobileOpen,
        handleDrawerToggle: this.handleDrawerToggle.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }));
    }
  }]);

  return MenuAppBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["withStyles"])(styles)(MenuAppBar));

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MenuAppBar__ = __webpack_require__("./components/MenuAppBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
var _jsxFileName = "/Users/dizhenlyu/honora-fa/components/MyLayout.js";




var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    }
  };
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: props.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MenuAppBar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles, {
  withTheme: true
})(Layout));

/***/ }),

/***/ "./components/Sidenav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Drawer__ = __webpack_require__("@material-ui/core/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Hidden__ = __webpack_require__("@material-ui/core/Hidden");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Hidden___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Hidden__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Group__ = __webpack_require__("@material-ui/icons/Group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_List__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemIcon__ = __webpack_require__("@material-ui/core/ListItemIcon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_BarChart__ = __webpack_require__("@material-ui/icons/BarChart");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_BarChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_BarChart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_icons_TableChart__ = __webpack_require__("@material-ui/icons/TableChart");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_icons_TableChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_icons_TableChart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_styles__);
var _jsxFileName = "/Users/dizhenlyu/honora-fa/components/Sidenav.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    },
    drawer: _defineProperty({}, theme.breakpoints.up('md'), {
      width: theme.env.drawerWidth,
      flexShrink: 0
    }),
    list: {
      paddingTop: 56
    },
    appBar: _defineProperty({
      marginLeft: theme.env.drawerWidth
    }, theme.breakpoints.up('md'), {
      width: "calc(100% - ".concat(theme.env.drawerWidth, ")")
    }),
    menuButton: _defineProperty({
      marginRight: 20
    }, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    logoBar: _defineProperty({
      height: 56,
      backgroundColor: theme.palette.logoBar.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }, theme.breakpoints.up('sm'), {
      height: 64
    }),
    logoImg: _defineProperty({
      height: 72,
      margin: 'auto'
    }, theme.breakpoints.up('sm'), {
      height: 80
    }),
    drawerPaper: {
      width: theme.env.drawerWidth,
      backgroundColor: theme.palette.primary.main
    }
  };
};

var ResponsiveDrawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResponsiveDrawer, _React$Component);

  function ResponsiveDrawer(props) {
    var _this;

    _classCallCheck(this, ResponsiveDrawer);

    _this = _possibleConstructorReturn(this, (ResponsiveDrawer.__proto__ || Object.getPrototypeOf(ResponsiveDrawer)).call(this, props));
    _this.handleDrawerToggle = _this.handleDrawerToggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ResponsiveDrawer, [{
    key: "handleDrawerToggle",
    value: function handleDrawerToggle() {
      this.props.handleDrawerToggle();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme;
      var drawer = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.logoBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/img/sora-white.svg",
        className: classes.logoImg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_List___default.a, {
        className: classes.list,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem___default.a, {
        button: true,
        key: "Investments",
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_icons_TableChart___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default.a, {
        primary: "Investments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem___default.a, {
        button: true,
        key: "Performance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_BarChart___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default.a, {
        primary: "Performance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem___default.a, {
        button: true,
        key: "Users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Group___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default.a, {
        primary: "Users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))));
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: classes.drawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Hidden___default.a, {
        mdUp: true,
        implementation: "css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Drawer___default.a, {
        container: this.props.container,
        variant: "temporary",
        anchor: theme.direction === 'rtl' ? 'right' : 'left',
        open: this.props.mobileOpen,
        onClose: this.handleDrawerToggle,
        classes: {
          paper: classes.drawerPaper
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, drawer)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Hidden___default.a, {
        smDown: true,
        implementation: "css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Drawer___default.a, {
        classes: {
          paper: classes.drawerPaper
        },
        variant: "permanent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, drawer))));
    }
  }]);

  return ResponsiveDrawer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ResponsiveDrawer.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_styles__["withStyles"])(styles, {
  withTheme: true
})(ResponsiveDrawer));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__investments_js__ = __webpack_require__("./pages/investments.js");
var _jsxFileName = "/Users/dizhenlyu/honora-fa/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__investments_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
});

/***/ }),

/***/ "./pages/investments.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_EnhancedTable_js__ = __webpack_require__("./components/EnhancedTable.js");
var _jsxFileName = "/Users/dizhenlyu/honora-fa/pages/investments.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/anchor-is-valid */







var styles = function styles(theme) {
  return {
    root: _defineProperty({
      margin: '120px 92px auto'
    }, theme.breakpoints.up('md'), {
      margin: '120px 92px auto 288px'
    }),
    button: {
      float: 'right'
    }
  };
};

var Investments =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Investments, _React$Component);

  function Investments() {
    _classCallCheck(this, Investments);

    return _possibleConstructorReturn(this, (Investments.__proto__ || Object.getPrototypeOf(Investments)).apply(this, arguments));
  }

  _createClass(Investments, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_MyLayout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default.a, {
        variant: "contained",
        color: "secondary",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Add New Investment"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_EnhancedTable_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })));
    }
  }]);

  return Investments;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Investments.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Investments));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Drawer":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Hidden":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Table":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableHead":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TablePagination":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "@material-ui/core/TableRow":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/TableSortLabel":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableSortLabel");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/BarChart":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BarChart");

/***/ }),

/***/ "@material-ui/icons/Group":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "@material-ui/icons/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/TableChart":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChart");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map