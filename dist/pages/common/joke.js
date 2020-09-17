require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[4],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var _page=function _page(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_1__["useState"](true),_React$useState2=_slicedToArray(_React$useState,2),loading=_React$useState2[0],setLoading=_React$useState2[1];var _React$useState3=react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]),_React$useState4=_slicedToArray(_React$useState3,2),jokeList=_React$useState4[0],setJokeList=_React$useState4[1];var _React$useState5=react__WEBPACK_IMPORTED_MODULE_1__["useState"]({key:'e9c5e478f7b19bc46ad10c3985c6c878',sort:'asc',time:''}),_React$useState6=_slicedToArray(_React$useState5,2),params=_React$useState6[0],setParams=_React$useState6[1];var queryData=function queryData(){var ts=Math.round(new Date().getTime()/1000).toString();setParams(_objectSpread(_objectSpread({},params),{},{time:ts}));Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["request"])({url:"http://v.juhe.cn/joke/randJoke.php",//仅为示例，并非真实的接口地址
data:_objectSpread({},params),header:{'content-type':'application/json'// 默认值
},success:function success(res){var result=Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__[/* successApi */ "b"])(res);setJokeList(result.result);setLoading(false);},fail:function fail(e){Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__[/* showToast */ "a"])('抱歉！！数据正在开发中....');setLoading(true);}});};Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__[/* usePageEvent */ "h"])('onLoad',function(){queryData();wx.setNavigationBarTitle({title:"每日一笑"});});Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__[/* usePageEvent */ "h"])('onReachBottom',function(){setLoading(false);queryData();console.log('上拉加载');});Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__[/* usePageEvent */ "h"])('onPullDownRefresh',function(){queryData();console.log('下拉刷新');});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"],{className:_index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.app},loading?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:_index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.loadingBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{type:"anna",color:"#FF7777"})):null,jokeList&&jokeList.length>0?jokeList.map(function(v){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{key:v.hashId,className:_index_less_modules__WEBPACK_IMPORTED_MODULE_5___default.a.jokeBox},v.content);}):null);};/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__[/* createPageConfig */ "d"])(_page,"pages/common/joke")));

/***/ })

},[[51,1,0,2]]]);