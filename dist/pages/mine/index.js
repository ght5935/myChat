require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[10],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___23sT_","shici":"shici___1NI5L","loadingBox":"loadingBox___1aqco","btnLang":"btnLang___1jGr9","infoRow":"infoRow___1DXtH","infoCol":"infoCol___1fepE","info":"info___kdgxA","bindBtn":"bindBtn___1Zo48","touBox":"touBox___2rd9f","tou":"tou___fry5u","Icon":"Icon___1sCcv","listRow":"listRow___13dTd","listCol":"listCol___1o1pf","listBox":"listBox___24Vzo"};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 35 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/row/index.js
var row = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/col/index.js
var col = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/remax/index.js

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(7);

// EXTERNAL MODULE: ./src/utils/conf.js
var conf = __webpack_require__(8);

// EXTERNAL MODULE: ./src/pages/mine/index.less?modules
var minemodules = __webpack_require__(4);
var minemodules_default = /*#__PURE__*/__webpack_require__.n(minemodules);

// CONCATENATED MODULE: ./src/pages/mine/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var mine_page=function _page(){var _React$useState=react["useState"]('春暖花开，面朝大海'),_React$useState2=_slicedToArray(_React$useState,2),shici=_React$useState2[0],setShici=_React$useState2[1];var _React$useState3=react["useState"]({errMsg:'',signature:'',userInfo:''}),_React$useState4=_slicedToArray(_React$useState3,2),userInfo=_React$useState4[0],setUserInfo=_React$useState4[1];Object(esm["h" /* usePageEvent */])('onLoad',function(){wx.setNavigationBarTitle({title:"我的"});Object(wechat["request"])({url:'https://v1.jinrishici.com/shuqing/aiqing',//仅为示例，并非真实的接口地址
data:{},header:{'content-type':'application/json'// 默认值
},success:function success(res){setShici(res.data.content);}});});Object(esm["f" /* useNativeEffect */])(function(){// 建议一定要写 hooks 依赖，否则所有 setData 回调后，都会在这里执行
},[]);var bindGetUserInfo=function bindGetUserInfo(){wx.getUserInfo({success:function success(res){setUserInfo({errMsg:res.errMsg,signature:res.signature,userInfo:res.userInfo});}});};var myWorld=function myWorld(){Object(utils["a" /* showToast */])('开发中....');};var gowallpaper=function gowallpaper(){var day=new Date().getDate();wx.navigateTo({url:"/pages/common/wallpaper?day=".concat(day)});};var gojoke=function gojoke(){wx.navigateTo({url:"/pages/common/joke"});};var gostarpair=function gostarpair(){wx.navigateTo({url:"/pages/common/starpair"});};var goweather=function goweather(){wx.navigateTo({url:"/pages/common/weather"});};return/*#__PURE__*/react["createElement"](wechat["View"],{className:minemodules_default.a.app},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.shici},shici),/*#__PURE__*/react["createElement"](row["a" /* default */],{className:minemodules_default.a.infoRow},/*#__PURE__*/react["createElement"](col["a" /* default */],{span:12,className:minemodules_default.a.infoCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.info},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.touBox},/*#__PURE__*/react["createElement"]("img",{src:userInfo.userInfo?userInfo.userInfo.avatarUrl:conf["j" /* Tou */],alt:"\u5934\u50CF",className:minemodules_default.a.tou})),/*#__PURE__*/react["createElement"]("button",{className:minemodules_default.a.bindBtn,"open-type":"getUserInfo",onClick:bindGetUserInfo},userInfo.userInfo?userInfo.userInfo.nickName:'未登录'))),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:12,className:minemodules_default.a.infoCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.info},/*#__PURE__*/react["createElement"]("img",{src:conf["a" /* Hua */],alt:"\u5934\u50CF"})))),/*#__PURE__*/react["createElement"](row["a" /* default */],{gutter:16,className:minemodules_default.a.listRow},/*#__PURE__*/react["createElement"](col["a" /* default */],{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:gowallpaper},/*#__PURE__*/react["createElement"]("img",{src:conf["b" /* Icon1 */],alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u4ECA\u65E5\u58C1\u7EB8 "))),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:gostarpair},/*#__PURE__*/react["createElement"]("img",{src:conf["g" /* Icon6 */],alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u661F\u5EA7\u914D\u5BF9 "))),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:myWorld},/*#__PURE__*/react["createElement"]("img",{src:conf["d" /* Icon3 */],alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u661F\u5EA7\u8FD0\u52BF "))),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:myWorld},/*#__PURE__*/react["createElement"]("img",{src:conf["f" /* Icon5 */],alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u751F\u8096\u914D\u5BF9 ")))),/*#__PURE__*/react["createElement"](row["a" /* default */],{gutter:16,className:minemodules_default.a.listRow},/*#__PURE__*/react["createElement"](col["a" /* default */],{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:gojoke},/*#__PURE__*/react["createElement"]("img",{src:conf["e" /* Icon4 */],alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u7B11\u8BDD\u5927\u5168 "))),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:goweather},/*#__PURE__*/react["createElement"]("img",{src:conf["c" /* Icon2 */],alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u5929\u6C14\u67E5\u8BE2 "))),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:myWorld},/*#__PURE__*/react["createElement"]("img",{src:conf["h" /* Icon7 */],alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u5468\u516C\u89E3\u68A6 "))),/*#__PURE__*/react["createElement"](col["a" /* default */],{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:myWorld},/*#__PURE__*/react["createElement"]("img",{src:conf["i" /* Icon8 */],alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u5728\u7EBF\u8054\u7CFB ")))));};/* harmony default export */ var mine = __webpack_exports__["default"] = (Page(Object(esm["d" /* createPageConfig */])(mine_page,"pages/mine/index")));

/***/ })

},[[48,1,0]]]);