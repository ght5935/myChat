require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
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
/* harmony import */ var _utils_conf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/conf */ "./src/utils/conf.js");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less?modules */ "./src/pages/index/index.less?modules");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_6__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var _page = function _page() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('春暖花开，面朝大海'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      shici = _React$useState2[0],
      setShici = _React$useState2[1];

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onShow', function () {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["request"])({
      url: 'https://v1.jinrishici.com/shuqing/aiqing',
      //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值

      },
      success: function success(res) {
        setShici(res.data.content);
      }
    });
  });

  var myWorld = function myWorld() {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showToast"])('开发中....');
  };

  var gowallpaper = function gowallpaper() {
    var day = new Date().getDate();
    wx.navigateTo({
      url: "/pages/common/wallpaper?day=".concat(day)
    });
  };

  var gojoke = function gojoke() {
    wx.navigateTo({
      url: "/pages/common/joke"
    });
  };

  var gostarpair = function gostarpair() {
    wx.navigateTo({
      url: "/pages/common/starpair"
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.shici
  }, shici), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listBox,
    onClick: gowallpaper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_5__["Icon1"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u4ECA\u65E5\u58C1\u7EB8 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listBox,
    onClick: gostarpair
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_5__["Icon6"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u661F\u5EA7\u914D\u5BF9 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listBox,
    onClick: myWorld
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_5__["Icon3"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u661F\u5EA7\u8FD0\u52BF "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listBox,
    onClick: myWorld
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_5__["Icon5"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u751F\u8096\u914D\u5BF9 ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listBox,
    onClick: gojoke
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_5__["Icon4"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u7B11\u8BDD\u5927\u5168 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listBox,
    onClick: myWorld
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_5__["Icon2"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u5929\u6C14\u67E5\u8BE2 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listBox,
    onClick: myWorld
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_5__["Icon7"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u5468\u516C\u89E3\u68A6 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.listBox,
    onClick: myWorld
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_5__["Icon8"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u5728\u7EBF\u8054\u7CFB ")))));
};

_page.displayName = "Page[pages/index/index]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index/index")));

/***/ }),

/***/ "./src/pages/index/index.less?modules":
/*!********************************************!*\
  !*** ./src/pages/index/index.less?modules ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___wI8RB","shici":"shici___2jeB0","btnLang":"btnLang___1IMzS","infoRow":"infoRow___3u4zd","infoCol":"infoCol___3f6dT","info":"info___1cdbZ","bindBtn":"bindBtn___104yz","touBox":"touBox___LOxsT","tou":"tou___7EQ0u","Icon":"Icon___37OOr","listRow":"listRow___31iay","listCol":"listCol___2zHK5","listBox":"listBox___1yCTs"};

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./src/pages/index/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gaoht/github/Remax/src/pages/index/index.js */"./src/pages/index/index.js");


/***/ })

},[[1,"runtime","remax-vendors"]]]);