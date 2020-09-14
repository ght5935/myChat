require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/common/starpair"],{

/***/ "./src/pages/common/starpair.js":
/*!**************************************!*\
  !*** ./src/pages/common/starpair.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less?modules */ "./src/pages/common/index.less?modules");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var _page = function _page() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      shuju = _React$useState4[0],
      setShuju = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    key: '4d2b150805d54841064fb46ab0371e38',
    men: '金牛',
    women: '金牛'
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      params = _React$useState6[0],
      setParams = _React$useState6[1];

  var isEmpty = function isEmpty() {
    if (!params.men) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showToast"])('星座不能为空');
      return false;
    }

    if (!params.women) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showToast"])('星座不能为空');
      return false;
    }

    return true;
  };

  var queryData = function queryData() {
    if (isEmpty()) {
      console.log(params, '参数');
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["request"])({
        url: "http://apis.juhe.cn/xzpd/query",
        //仅为示例，并非真实的接口地址
        data: _objectSpread({}, params),
        header: {
          'content-type': 'application/json' // 默认值

        },
        success: function success(res) {
          var result = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["successApi"])(res);
          console.log(result, 'result');
          setShuju(result.result);
          setLoading(false);
        },
        fail: function fail(e) {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showToast"])('抱歉！！数据正在开发中....');
          setLoading(true);
        }
      });
    }
  };

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function () {// queryData()
  }); // usePageEvent('onReachBottom', () => {
  //     console.log('上拉加载')
  // })
  // usePageEvent('onPullDownRefresh', () => {
  //     console.log('下拉刷新')
  // })

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.inputBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    style: {
      color: 'red'
    }
  }, "*"), "\u7537\u751F "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
    type: "text",
    name: "men",
    placeholder: "\u4F8B\u5982 \u91D1\u725B",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.starInput,
    bindinput: function bindinput(e) {
      setParams(_objectSpread(_objectSpread({}, params), {}, {
        men: e.detail.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.inputBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    style: {
      color: 'red'
    }
  }, "*"), "\u5973\u751F "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
    type: "text",
    name: "women",
    placeholder: "\u4F8B\u5982 \u91D1\u725B",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.starInput,
    bindinput: function bindinput(e) {
      setParams(_objectSpread(_objectSpread({}, params), {}, {
        women: e.detail.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.btnLang,
    onClick: function onClick() {
      return queryData();
    }
  }, "\u7ACB\u5373\u6D4B\u8BD5"), false ? /*#__PURE__*/undefined : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.cardTitle
  }, "\u6D4B\u7B97\u7ED3\u679C\uFF1A ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, "".concat(shuju.men ? shuju.men : '未知', "\u7537 \u914D ").concat(shuju.women ? shuju.women : '未知', "\u5973"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.cardMid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.cardMidBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.desc
  }, "\u914D\u5BF9\u6307\u6570:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, shuju.zhishu)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.cardMidBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.desc
  }, "\u914D\u5BF9\u6BD4\u91CD:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, shuju.bizhong)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.cardMidBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.desc
  }, "\u4E24\u60C5\u76F8\u60A6\u6307\u6570:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, shuju.xiangyue)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.cardMidBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.desc
  }, "\u5929\u957F\u5730\u4E45\u6307\u6570:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, shuju.tcdj)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.cardMidBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.desc
  }, "\u7ED3\u679C\u8BC4\u8FF0:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, shuju.jieguo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.cardCon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.desc
  }, "\u604B\u7231\u5EFA\u8BAE:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.line
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("text", {
    selectable: true
  }, shuju.lianai)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.cardCon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.desc
  }, "\u6CE8\u610F\u4E8B\u9879:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.line
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("text", {
    selectable: true
  }, shuju.zhuyi)))));
};

_page.displayName = "Page[pages/common/starpair]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/common/starpair")));

/***/ }),

/***/ 6:
/*!********************************************!*\
  !*** multi ./src/pages/common/starpair.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gaoht/github/Remax/src/pages/common/starpair.js */"./src/pages/common/starpair.js");


/***/ })

},[[6,"runtime","remax-vendors","remax-styles"]]]);