require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[9],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ /* global define */(function(){'use strict';var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=_typeof(arg);if(argType==='string'||argType==='number'){classes.push(arg);}else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);if(inner){classes.push(inner);}}else if(argType==='object'){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key);}}}}return classes.join(' ');}if( true&&module.exports){classNames.default=classNames;module.exports=classNames;}else if( true&&_typeof(__webpack_require__(26))==='object'&&__webpack_require__(26)){// register as 'classnames', consistent with npm package name
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return classNames;}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{window.classNames=classNames;}})();

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___23sT_","shici":"shici___1NI5L","btnLang":"btnLang___1jGr9","infoRow":"infoRow___1DXtH","infoCol":"infoCol___1fepE","info":"info___kdgxA","bindBtn":"bindBtn___1Zo48","touBox":"touBox___2rd9f","tou":"tou___fry5u","Icon":"Icon___1sCcv","listRow":"listRow___13dTd","listCol":"listCol___1o1pf","listBox":"listBox___24Vzo"};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 35 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/remax/one.js
var one = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(12);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/common/index.js
var common = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/anna-remax-ui/esm/row/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){Object(defineProperty["a" /* default */])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var prefixCls=Object(common["a" /* getPrefixCls */])('row');var row_renderCols=function renderCols(columns,halfGutter){var cols=react_default.a.Children.map(columns,function(column){var style=halfGutter?{paddingLeft:"".concat(halfGutter,"px"),paddingRight:"".concat(halfGutter,"px")}:null;return _objectSpread(_objectSpread({},column),{},{props:_objectSpread(_objectSpread({},column.props),{},{style:_objectSpread(_objectSpread({},column.props.style),style)})});});return cols;};var row_Row=function Row(props){var _classNames;var _props$gutter=props.gutter,gutter=_props$gutter===void 0?0:_props$gutter,_props$justify=props.justify,justify=_props$justify===void 0?'start':_props$justify,_props$align=props.align,align=_props$align===void 0?'top':_props$align,style=props.style,className=props.className,children=props.children;var halfGutter=Object(react["useMemo"])(function(){return gutter/2;},[gutter]);return/*#__PURE__*/react_default.a.createElement(one["View"],{className:classnames_default()(prefixCls,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-justify-").concat(justify),justify),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-align-").concat(align),align),_classNames),className),style:_objectSpread(_objectSpread({},style),{},{marginLeft:"-".concat(halfGutter,"px"),marginRight:"-".concat(halfGutter,"px")})},row_renderCols(children,halfGutter));};/* harmony default export */ var row = (row_Row);
// CONCATENATED MODULE: ./node_modules/anna-remax-ui/esm/col/index.js
function col_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function col_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){col_ownKeys(Object(source),true).forEach(function(key){Object(defineProperty["a" /* default */])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{col_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var col_prefixCls=Object(common["a" /* getPrefixCls */])('col');var col_Col=function Col(props){var _classNames;var span=props.span,_props$offset=props.offset,offset=_props$offset===void 0?0:_props$offset,flex=props.flex,style=props.style,className=props.className,children=props.children;return/*#__PURE__*/react["createElement"](one["View"],{className:classnames_default()(col_prefixCls,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,"".concat(col_prefixCls,"-").concat(span),span),Object(defineProperty["a" /* default */])(_classNames,"".concat(col_prefixCls,"-offset-").concat(offset),offset),_classNames),className),style:col_objectSpread({flex:flex},style)},children);};/* harmony default export */ var col = (col_Col);
// CONCATENATED MODULE: ./node_modules/remax/index.js

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(7);

// CONCATENATED MODULE: ./src/utils/conf.js
// 聚合数据: KEY
var KEY='JH2ac3f7e82499a39b607a20d1002abcef';var Tou='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/tt.gif?sign=88541696104081f3f7da6e00d21a2845&t=1599727017';var Hua='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/hua.gif?sign=d15171846e5bd581725f65a18565d49f&t=1599727114';var Icon1='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/1.png?sign=10132853bb666483ebb9fad840caec38&t=1599729964';var Icon2='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/2.png?sign=dbee297b0a9528151d68ab96e94d1693&t=1599730065';var Icon3='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/3.png?sign=94a97782f2ded87dc0d76a648dac48a3&t=1599730079';var Icon4='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/4.png?sign=0e599b7df18b5aa6184e67ded838ffdc&t=1599730091';var Icon5='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/5.png?sign=8a964fc350287b56dc20679da8e6193e&t=1599730105';var Icon6='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/6.png?sign=1166ecbe6c25d22a531ef0d474a919dd&t=1599730115';var Icon7='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/7.png?sign=8fe51cb811f0967501af3172c1bce132&t=1599730124';var Icon8='https://6761-gaoht195935-1258511601.tcb.qcloud.la/assets/8.png?sign=a51a6420ae164de6925a8cb7409ca60b&t=1599730133';
// EXTERNAL MODULE: ./src/pages/mine/index.less?modules
var minemodules = __webpack_require__(3);
var minemodules_default = /*#__PURE__*/__webpack_require__.n(minemodules);

// CONCATENATED MODULE: ./src/pages/mine/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var mine_page=function _page(){var _React$useState=react["useState"]('春暖花开，面朝大海'),_React$useState2=_slicedToArray(_React$useState,2),shici=_React$useState2[0],setShici=_React$useState2[1];var _React$useState3=react["useState"]({errMsg:'',signature:'',userInfo:''}),_React$useState4=_slicedToArray(_React$useState3,2),userInfo=_React$useState4[0],setUserInfo=_React$useState4[1];Object(esm["h" /* usePageEvent */])('onLoad',function(){Object(wechat["request"])({url:'https://v1.jinrishici.com/shuqing/aiqing',//仅为示例，并非真实的接口地址
data:{},header:{'content-type':'application/json'// 默认值
},success:function success(res){setShici(res.data.content);}});});Object(esm["f" /* useNativeEffect */])(function(){// 建议一定要写 hooks 依赖，否则所有 setData 回调后，都会在这里执行
},[]);var bindGetUserInfo=function bindGetUserInfo(){wx.getUserInfo({success:function success(res){setUserInfo({errMsg:res.errMsg,signature:res.signature,userInfo:res.userInfo});}});};var myWorld=function myWorld(){Object(utils["a" /* showToast */])('开发中....');};var gowallpaper=function gowallpaper(){var day=new Date().getDate();wx.navigateTo({url:"/pages/common/wallpaper?day=".concat(day)});};var gojoke=function gojoke(){wx.navigateTo({url:"/pages/common/joke"});};var gostarpair=function gostarpair(){wx.navigateTo({url:"/pages/common/starpair"});};return/*#__PURE__*/react["createElement"](wechat["View"],{className:minemodules_default.a.app},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.shici},shici),/*#__PURE__*/react["createElement"](row,{className:minemodules_default.a.infoRow},/*#__PURE__*/react["createElement"](col,{span:12,className:minemodules_default.a.infoCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.info},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.touBox},/*#__PURE__*/react["createElement"]("img",{src:userInfo.userInfo?userInfo.userInfo.avatarUrl:Tou,alt:"\u5934\u50CF",className:minemodules_default.a.tou})),/*#__PURE__*/react["createElement"]("button",{className:minemodules_default.a.bindBtn,"open-type":"getUserInfo",onClick:bindGetUserInfo},userInfo.userInfo?userInfo.userInfo.nickName:'未登录'))),/*#__PURE__*/react["createElement"](col,{span:12,className:minemodules_default.a.infoCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.info},/*#__PURE__*/react["createElement"]("img",{src:Hua,alt:"\u5934\u50CF"})))),/*#__PURE__*/react["createElement"](row,{gutter:16,className:minemodules_default.a.listRow},/*#__PURE__*/react["createElement"](col,{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:gowallpaper},/*#__PURE__*/react["createElement"]("img",{src:Icon1,alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u4ECA\u65E5\u58C1\u7EB8 "))),/*#__PURE__*/react["createElement"](col,{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:gostarpair},/*#__PURE__*/react["createElement"]("img",{src:Icon6,alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u661F\u5EA7\u914D\u5BF9 "))),/*#__PURE__*/react["createElement"](col,{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:myWorld},/*#__PURE__*/react["createElement"]("img",{src:Icon3,alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u661F\u5EA7\u8FD0\u52BF "))),/*#__PURE__*/react["createElement"](col,{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:myWorld},/*#__PURE__*/react["createElement"]("img",{src:Icon5,alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u751F\u8096\u914D\u5BF9 ")))),/*#__PURE__*/react["createElement"](row,{gutter:16,className:minemodules_default.a.listRow},/*#__PURE__*/react["createElement"](col,{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:gojoke},/*#__PURE__*/react["createElement"]("img",{src:Icon4,alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u7B11\u8BDD\u5927\u5168 "))),/*#__PURE__*/react["createElement"](col,{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:myWorld},/*#__PURE__*/react["createElement"]("img",{src:Icon2,alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u5929\u6C14\u67E5\u8BE2 "))),/*#__PURE__*/react["createElement"](col,{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:myWorld},/*#__PURE__*/react["createElement"]("img",{src:Icon7,alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u5468\u516C\u89E3\u68A6 "))),/*#__PURE__*/react["createElement"](col,{span:6,className:minemodules_default.a.listCol},/*#__PURE__*/react["createElement"]("div",{className:minemodules_default.a.listBox,onClick:myWorld},/*#__PURE__*/react["createElement"]("img",{src:Icon8,alt:"heihei",className:minemodules_default.a.Icon}),/*#__PURE__*/react["createElement"]("div",null," \u5728\u7EBF\u8054\u7CFB ")))));};/* harmony default export */ var mine = __webpack_exports__["default"] = (Page(Object(esm["d" /* createPageConfig */])(mine_page,"pages/mine/index")));

/***/ })

},[[45,1,0]]]);