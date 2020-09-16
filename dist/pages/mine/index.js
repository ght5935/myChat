require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/index"],{

/***/ "./node_modules/remax/index.js":
/*!*************************************!*\
  !*** ./node_modules/remax/index.js ***!
  \*************************************/
/*! exports provided: render, createAppConfig, createPageConfig, usePageInstance, useQuery, useNativeEffect, unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createAppConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNativeEffect", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });



/***/ }),

/***/ "./src/pages/mine/index.js":
/*!*********************************!*\
  !*** ./src/pages/mine/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax */ "./node_modules/remax/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_conf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/conf */ "./src/utils/conf.js");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less?modules */ "./src/pages/mine/index.less?modules");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_7__);


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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    errMsg: '',
    signature: '',
    userInfo: ''
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      userInfo = _React$useState4[0],
      setUserInfo = _React$useState4[1];

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function () {
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
  Object(remax__WEBPACK_IMPORTED_MODULE_4__["useNativeEffect"])(function () {// 建议一定要写 hooks 依赖，否则所有 setData 回调后，都会在这里执行
  }, []);

  var bindGetUserInfo = function bindGetUserInfo() {
    wx.getUserInfo({
      success: function success(res) {
        setUserInfo({
          errMsg: res.errMsg,
          signature: res.signature,
          userInfo: res.userInfo
        });
      }
    });
  };

  var myWorld = function myWorld() {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["showToast"])('开发中....');
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

  var goweather = function goweather() {
    wx.navigateTo({
      url: "/pages/common/weather"
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.shici
  }, shici), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.infoRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.infoCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.touBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: userInfo.userInfo ? userInfo.userInfo.avatarUrl : _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Tou"],
    alt: "\u5934\u50CF",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.tou
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.bindBtn,
    "open-type": "getUserInfo",
    onClick: bindGetUserInfo
  }, userInfo.userInfo ? userInfo.userInfo.nickName : '未登录'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.infoCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Hua"],
    alt: "\u5934\u50CF"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listBox,
    onClick: gowallpaper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Icon1"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u4ECA\u65E5\u58C1\u7EB8 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listBox,
    onClick: gostarpair
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Icon6"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u661F\u5EA7\u914D\u5BF9 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listBox,
    onClick: myWorld
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Icon3"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u661F\u5EA7\u8FD0\u52BF "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listBox,
    onClick: myWorld
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Icon5"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u751F\u8096\u914D\u5BF9 ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 16,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listBox,
    onClick: gojoke
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Icon4"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u7B11\u8BDD\u5927\u5168 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listBox,
    onClick: goweather
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Icon2"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u5929\u6C14\u67E5\u8BE2 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listBox,
    onClick: myWorld
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Icon7"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u5468\u516C\u89E3\u68A6 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 6,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listCol
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.listBox,
    onClick: myWorld
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: _utils_conf__WEBPACK_IMPORTED_MODULE_6__["Icon8"],
    alt: "heihei",
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.Icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, " \u5728\u7EBF\u8054\u7CFB ")))));
};

_page.displayName = "Page[pages/mine/index]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/mine/index")));

/***/ }),

/***/ "./src/pages/mine/index.less?modules":
/*!*******************************************!*\
  !*** ./src/pages/mine/index.less?modules ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___23sT_","shici":"shici___1NI5L","loadingBox":"loadingBox___1aqco","btnLang":"btnLang___1jGr9","infoRow":"infoRow___1DXtH","infoCol":"infoCol___1fepE","info":"info___kdgxA","bindBtn":"bindBtn___1Zo48","touBox":"touBox___2rd9f","tou":"tou___fry5u","Icon":"Icon___1sCcv","listRow":"listRow___13dTd","listCol":"listCol___1o1pf","listBox":"listBox___24Vzo"};

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./src/pages/mine/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gaoht/github/Remax/src/pages/mine/index.js */"./src/pages/mine/index.js");


/***/ })

},[[3,"runtime","remax-vendors"]]]);