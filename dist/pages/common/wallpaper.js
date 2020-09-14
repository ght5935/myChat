require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/common/wallpaper"],{

/***/ "./src/pages/common/wallpaper.js":
/*!***************************************!*\
  !*** ./src/pages/common/wallpaper.js ***!
  \***************************************/
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


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var _page = function _page(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      imgList = _React$useState4[0],
      setImgList = _React$useState4[1];

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function (option) {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["request"])({
      url: "http://service.picasso.adesk.com/v1/vertical/vertical",
      //仅为示例，并非真实的接口地址
      data: {
        limit: 30,
        skip: 180,
        adult: false,
        first: option.day,
        order: 'hot'
      },
      header: {
        'content-type': 'application/json' // 默认值

      },
      success: function success(res) {
        var result = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["successApi"])(res);
        setImgList(result.res.vertical);
        setLoading(false);
        console.log(result, 'res');
      },
      fail: function fail(e) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showToast"])('抱歉！！数据正在开发中....');
        setLoading(true);
      }
    });
  });

  var Down = function Down(v) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showToast"])('抱歉！！暂不支持下载....');
    wx.saveImageToPhotosAlbum({
      filePath: v,
      success: function success(res) {
        console.log('成功');
      },
      fail: function fail() {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showToast"])('抱歉！！保存失败....');
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.shici
  }, "\u4ECA\u65E5\u58C1\u7EB8"), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Loading"], {
    type: "anna",
    color: "#1890FF"
  }) : imgList && imgList.length > 0 ? imgList.map(function (v) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      key: v.id,
      className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.bizhiBox,
      onClick: function onClick() {
        return Down(v.img);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
      src: v.img,
      alt: "\u58C1\u7EB8",
      className: _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.bizhi
    }));
  }) : null);
};

_page.displayName = "Page[pages/common/wallpaper]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/common/wallpaper")));

/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./src/pages/common/wallpaper.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gaoht/github/Remax/src/pages/common/wallpaper.js */"./src/pages/common/wallpaper.js");


/***/ })

},[[4,"runtime","remax-vendors","remax-styles"]]]);