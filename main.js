/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/done_FILL0_wght400_GRAD0_opsz24.png */ \"./src/assets/images/done_FILL0_wght400_GRAD0_opsz24.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    --bg: #0b0b0f;\\n    --grey: #696c80;\\n}\\n\\nbody{ \\n    color: var(--grey);\\n    height: 100vh;\\n    background-color: var(--bg);\\n    background-size: cover;\\n\\n}\\n.all {\\n    display: grid;\\n    grid-template-columns: 2fr 8fr;\\n    grid-template-rows: 5rem 8fr;\\n    height: 100%;\\n}\\n\\n.title {\\n    grid-row: 1 / 2;\\n    grid-column: 1 / 2;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\np {\\n    word-break: break-all;\\n    height: 1.5rem;\\n    font-size: 1.5rem;\\n    \\n}\\n\\n/* left side (pages) */\\n.textContent {\\n    display: grid;\\n    grid-template-columns: 1fr 8fr;\\n}\\n.textContent p:hover {\\n    background-color: lightgrey;\\n    cursor: pointer;\\n}\\n#newPage {\\n    height: 2rem;\\n    width: 8rem;\\n    border-radius: 5rem;\\n    border: 0px;\\n    background-color: transparent;\\n}\\n#newPage:hover {\\n    background-color: lightgrey;\\n}   \\n.buttons {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column; \\n    margin-top: 1rem;\\n}\\n.pageButtons {\\n    display: flex;\\n    margin-top: 0.5rem;\\n}\\n.delBut {\\n    width: 1.5rem;\\n    height: 1.5rem;\\n    background-color: transparent;\\n    border: 0px;\\n    border-radius: 3rem;\\n}\\n.delBut:hover {\\n    cursor: pointer;\\n    background-color: lightgrey;\\n}\\n.projects {\\n    grid-column: 1 / 2;\\n    grid-row-start: 2;\\n    border: 1px solid blue;\\n    height: 100%;\\n}\\n.titleList {\\n    height: 3rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 2rem;\\n}\\n.inputContainer {\\n    height: 1.5rem;\\n}\\n\\n\\n/* right side  */\\n.openTaskContainer {\\n    width: 10rem;\\n    height: 3rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    border-radius: 6rem;\\n}\\n.openTaskContainer:hover {\\n    background-color: lightgrey;\\n    cursor: pointer;\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* right side (task layout) */\\n.rightSide {\\n    grid-row-start: 2;\\n    grid-column: 2 / 3;\\n}\\n.box, .categories , form{\\n    display: grid;\\n    grid-template-columns: 3rem repeat(5, 1fr);\\n\\n}\\n.categories{\\n    width: 100%;\\n}\\n.box {\\n    height: 2rem;\\n}\\nform{\\n    width: 100%;\\n    grid-template-rows: 2rem 2rem 15fr;\\n}\\n\\n/* right side (task elements (name, date, etc) */\\n.checkboxContainer {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.el1, .el2, .el3, .el4 {\\n    display: flex;\\n    align-items: center;\\n    word-break: break-all;\\n}\\ninput[name=\\\"name\\\"], .nameInput{\\n    grid-column: 2 /3;\\n}\\ninput[name=\\\"desc\\\"], .descInput {\\n    grid-column: 3 / 4;\\n}\\ninput[name=\\\"date\\\"], .dateInput {\\n    grid-column: 4 / 5;\\n}\\nselect[name=\\\"priority\\\"], .priorityInput{\\n    grid-column: 5 / 6;\\n}\\n.center {\\n    grid-column: 6 / 7;\\n    display: flex;\\n    justify-content: center;\\n}\\n.errorMsg{\\n    grid-row: 2 / 3;\\n    grid-column: 2 / 3;\\n}\\n/* right side (edit and add) */\\n.editContainer {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n#addButton, #cancelButton {\\n    height: 2rem;\\n    width: 2rem;\\n    background-color: transparent;\\n    border: 0px;\\n}\\n.submit, .cancel {\\n    height: 2rem;\\n    width: 2rem;\\n}\\n.add {\\n    border: 1px solid red;\\n    grid-column: 2 / 3;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n#addButton {\\n   background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n   background-repeat: no-repeat;\\n   background-position: center;\\n}\\n#addButton:hover {\\n    background-color: #323232;\\n}\\n#content {\\n    height: 100%;\\n    display: grid;\\n    grid-auto-rows: repeat(autofit, minmax(5rem, 1fr));\\n    gap: 0.75rem;\\n    grid-column: 2 / 3;\\n}\\n.el5 {\\n    height: 2rem;\\n    width: 2rem;\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMsg\": () => (/* binding */ errorMsg),\n/* harmony export */   \"hideErrorMsg\": () => (/* binding */ hideErrorMsg)\n/* harmony export */ });\nconst errorMsgElement = document.createElement('div');\nconst addSection = document.querySelector('.add');\nconst errorContainer = document.querySelector(\".errorMsg\");\nconst name = document.querySelector('input[name=\"name\"]');\nfunction errorMsg() {\n    errorMsgElement.textContent = 'Task Name Cannot Be Left Blank';\n    errorContainer.appendChild(errorMsgElement);\n  \n}\nfunction hideErrorMsg(boolean) {\n    \n        errorContainer.removeChild(errorContainer.lastChild);\n    \n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/error.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ \"./src/error.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n\n\nconst addSection = document.querySelector('.add');\nconst addButton = document.querySelector('#addButton');\n\nconst name = document.querySelector('input[name=\"name\"]');\n\nconst desc = document.querySelector('input[name=\"desc\"]');\nconst date = document.querySelector('input[name=\"date\"]');\n\n\n\nlet errorDisplayed = false;\n\n\nconst allInputs = document.querySelectorAll('form > *');\n\nallInputs.forEach(element => {\n    element.style.display = \"none\";\n});\nconst center = document.querySelector('.center');\nconst openTaskContainer = document.querySelector('.openTaskContainer');\nconst openTask = document.createElement('div');\nopenTask.textContent = \"+ Add Task\";\nopenTask.classList.add('openTask');\nopenTaskContainer.appendChild(openTask);\nopenTaskContainer.addEventListener('click', function() {\n    openTaskContainer.style.display = \"none\";\n    allInputs.forEach(element => {\n        element.style.display = \"block\";\n    });\n    center.style.display = \"flex\";\n});\n\nconst prioritySelect = document.getElementById('priority')\n//Cancel Button\nconst cancelAdd = document.querySelector(\"#cancelButton\");\ncancelAdd.addEventListener('click', function() {\n    allInputs.forEach(element => {\n        element.style.display = \"none\";\n        \n    });\n    openTaskContainer.style.display = \"flex\";\n    const inputs = document.querySelectorAll('input');\n    inputs.forEach(element => element.value = '');\n\n    prioritySelect.value = 'None'; \n    if (errorDisplayed == true) {\n        (0,_error__WEBPACK_IMPORTED_MODULE_2__.hideErrorMsg)();\n\n    }\n    errorDisplayed = false;\n});\n\n//Add Button\n\naddButton.addEventListener('click', function() {\n    const prioritySelect = document.getElementById('priority')\n    const priorityOptions = prioritySelect.options[prioritySelect.selectedIndex].text;\n    if (name.value === '' && !errorDisplayed) { //underneath add we create a popup stating what field is missing\n        (0,_error__WEBPACK_IMPORTED_MODULE_2__.errorMsg)();\n        errorDisplayed = true;\n    } else if (name.value === '' && errorDisplayed) {\n        \n    } else if (errorDisplayed){ //reset fields after\n        const item = (0,_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name.value, desc.value, date.value, priorityOptions);\n\n        item.addToDom();\n        (0,_error__WEBPACK_IMPORTED_MODULE_2__.hideErrorMsg)();\n        errorDisplayed = false;\n        allInputs.forEach(element => {\n            element.style.display = \"none\";\n        });\n        openTaskContainer.style.display = \"flex\";\n    } else {\n        const item = (0,_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name.value, desc.value, date.value, priorityOptions);\n\n        item.addToDom();\n        errorDisplayed = false;\n        allInputs.forEach(element => {\n            element.style.display = \"none\";\n        });\n        openTaskContainer.style.display = \"flex\";   \n    }\n\n    \n\n});\n\n//reset priority field when submitting\n\nconst newPage = document.querySelector('#newPage');\nconst content = document.querySelector('#content');\nconst allItems = document.querySelector('.allItems');\nnewPage.addEventListener('click', function() {\n    (0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.addPage)(); \n\n});\n\n    \n\n/*\n1. Click on it with no input, error message displayed, true\n    Click on it again with no input, error message previously displayed, goes to else\n\n*/\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n    let count = 0;\n    \nconst taskFactory = (name, desc, date, priority) => {\n\n    const editContainer = document.createElement('div');\n    editContainer.classList.add('editContainer');\n    const prioritySelect = document.getElementById('priority')\n    const priorityOptions = prioritySelect.options[prioritySelect.selectedIndex].text;\n\n    const addToDom = () => {\n     \n      \n        //clear input fields..\n        const inputs = document.querySelectorAll('input');\n        inputs.forEach(element => element.value = '');\n\n        prioritySelect.value = 'None';\n        const content = document.querySelector(\"#content\");\n\n    \n        //When addButton is pressed\n        //1. Check: If data fields are empty, give an error message\n        console.log(name);\n\n      \n        //2. Gets data from the input\n    \n    \n        //Create the categories\n        const box = document.createElement('div');\n        box.classList.add('box'); //.box1...n\n        box.setAttribute('id', count);\n\n        content.appendChild(box);\n        const checkboxContainer = document.createElement('div');\n        checkboxContainer.classList.add('checkboxContainer');\n        box.appendChild(checkboxContainer);\n        //Subcategories el0 = checkbox, el1 = name, el2 = desc, el3 = date, el4 = priority, el5 = edit\n        const el0 = document.createElement('input');\n        el0.setAttribute('type', 'checkbox');\n\n        const el1 = document.createElement('div');\n        el1.classList.add('el1');\n        const el2 = document.createElement('div');\n        el2.classList.add('el2');\n        const el3 = document.createElement('div');\n        el3.classList.add('el3');\n        const el4 = document.createElement('div');\n        el4.classList.add('el4');\n    \n  \n        const el5 = document.createElement('button');\n        el5.classList.add('el5');\n        el5.textContent = \"edit\";\n\n       \n\n\n        checkboxContainer.appendChild(el0);\n        box.appendChild(el1);\n        box.appendChild(el2);\n        box.appendChild(el3);\n        box.appendChild(el4);\n        //Put each data field in its respective category\n        el1.textContent = name;\n        el2.textContent = desc;\n        el3.textContent = date;\n        el4.textContent = priority;\n    \n        //reset forms, optimizze\n    \n\n    \n        const editTask = () => { //Press Edit Button we turn the text content of the examples into input fields. \n            //-> Opens up submit/cancel buttons, Cancel => turn input -> original textContent; Submit => turn input -> new textContent\n            console.log('test');\n            //1. Create the UI, submit/cancel buttons\n            //Hide edit button in the eventlistener below\n    \n            const submit = document.createElement('button');\n            submit.classList.add('submit');\n            submit.textContent = \"submit\";\n            const cancel = document.createElement('button');\n            cancel.classList.add('cancel');\n            cancel.textContent = \"cancel\";\n    \n            \n            editContainer.appendChild(cancel); //which ever one goes first\n            editContainer.appendChild(submit);\n        \n            //2. Turn categories back into inputs... IDK if there's a more efficient way to do this...\n            //creating the textboxes...\n            const nameInput = document.createElement('input');\n            nameInput.classList.add('nameInput');\n            const descInput = document.createElement('input');\n            descInput.classList.add('descInput');\n            const dateInput = document.createElement('input');\n            dateInput.classList.add('dateInput');\n            dateInput.setAttribute('type', 'date')\n            //make them contain the same text as when before pressing edit\n            nameInput.value = el1.textContent;\n            descInput.value = el2.textContent;\n            dateInput.value = date;\n        \n\n            const priorityInput = document.createElement('select');\n            priorityInput.classList.add('priorityInput');\n\n            const high = document.createElement('option');\n            high.textContent = 'High';\n            high.setAttribute('id', 'high');\n            const medium = document.createElement('option');\n            medium.textContent = 'Medium';\n            medium.setAttribute('id', 'medium');\n\n            const low = document.createElement('option');\n            low.textContent = 'Low'; //whatever is selected, switch statement.. later\n            low.setAttribute('id', 'low');\n\n            const none = document.createElement('option');\n            none.setAttribute('id', 'none');\n            nameInput.textContent = name;\n            descInput.textContent = desc;\n            dateInput.value = date;\n\n            priorityInput.appendChild(high);\n            priorityInput.appendChild(medium);\n            priorityInput.appendChild(low);\n            priorityInput.appendChild(none);\n\n            switch (el4.textContent) {\n                case \"High\":\n                high.setAttribute(\"selected\", \"true\");\n                break;\n                case \"Medium\":\n                medium.setAttribute(\"selected\", \"true\");\n                break;\n                case \"Low\":\n                low.setAttribute(\"selected\", \"true\");\n                break;\n                case \"\":\n                none.setAttribute(\"selected\", \"true\");\n                \n            }\n            //Save old inputs for cancel use..?\n            \n            //Remove old inputs..\n\n            el0.style.display = 'none';\n            el1.style.display = 'none';\n            el2.style.display = 'none';\n            el3.style.display = 'none';\n            el4.style.display = 'none';\n            checkboxContainer.style.display = \"none\";\n\n            box.insertBefore(priorityInput, box.firstChild);\n            box.insertBefore(dateInput, box.firstChild);\n            box.insertBefore(descInput, box.firstChild);\n            box.insertBefore(nameInput, box.firstChild);\n  \n\n            cancel.addEventListener('click', function() {\n                priorityInput.remove();\n                dateInput.remove();\n                descInput.remove();\n                nameInput.remove();\n                console.log(\"cancel pressed\");\n                el0.style.display = 'block';\n                el1.style.display = 'flex';\n                el2.style.display = 'flex';\n                el3.style.display = 'flex';\n                el4.style.display = 'flex';\n                checkboxContainer.style.display = \"flex\";\n                submit.remove();\n                cancel.remove();\n                \n                el5.style.display = \"block\";\n\n                \n            })\n\n\n            // 3. Submit Button function\n            submit.addEventListener('click', function() { //We remove all el0-4 input elements, use the EXISTING HIDDEN el0-4 dlements and change values\n                 el0.style.display = 'block';\n                 el1.style.display = 'flex';\n                 el2.style.display = 'flex';\n                 el3.style.display = 'flex';\n                 el4.style.display = 'flex';\n                 checkboxContainer.style.display = \"flex\";\n                 console.log(nameInput.textContent);\n                 el1.textContent = nameInput.value;\n                 el2.textContent = descInput.value;\n                 el3.textContent = dateInput.value;\n                    date = dateInput.value;\n                 \n                 const priorityOptions = priorityInput.options[priorityInput.selectedIndex].text;\n                 console.log(priorityOptions);\n                el4.textContent = priorityOptions;\n\n                priorityInput.remove();\n                dateInput.remove();\n                descInput.remove();\n                nameInput.remove();\n\n\n                submit.remove();\n                cancel.remove();\n                el5.style.display = \"block\";\n\n            })\n\n\n        }\n        box.appendChild(editContainer);\n        editContainer.appendChild(el5);\n    \n        el5.addEventListener('click', function() {\n            el5.style.display = \"none\";\n        \n            editTask();\n\n\n        })\n        el0.addEventListener('click', function() {\n            box.remove();\n        \n        });\n    \n    \n    \n    \n        count++;\n    \n    }\n\n\n    return {name, desc, date, priority, addToDom};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);\n\n//folders, if no date is specified...\n\n//# sourceURL=webpack://todo-list/./src/item.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPage\": () => (/* binding */ addPage)\n/* harmony export */ });\n//stores everything that is on the page??\n\n//create a function that stores all the dom elements into an array as an object????\nconst pages = [];\nlet curr = 0;\nconst allItems = document.querySelector('.allItems');\nconst content = document.querySelector('#content');\n//when we create a new page, we change curr to what the new index is\n//when we click on a diff page to change to, we change curr to that, but before we do that we save the current elements into the pages[curr]\nlet tracker = 1;\n\n//function that creates pages and assigns each page to an index...\nfunction addPage() { //takes input field.\n\n    const buttonSection = document.querySelector('.buttons')\n    const newPageButton = document.querySelector('#newPage');\n    \n    const pageName = document.createElement('input');\n    const submit = document.createElement('button');\n    submit.classList.add('submitPage');\n    submit.textContent = \"Add\";\n    const cancel = document.createElement('button');\n    cancel.textContent = \"Cancel\";\n    cancel.classList.add('cancelPage');\n\n    const inputContainer = document.createElement('div');\n    inputContainer.classList.add('inputContainer');\n    buttonSection.appendChild(inputContainer);\n    inputContainer.appendChild(pageName);\n\n\n    newPageButton.style.display = \"none\";\n    \n\n    const buttonContainer = document.createElement('div');\n    buttonContainer.classList.add('pageButtons');\n    buttonSection.appendChild(buttonContainer);\n    buttonContainer.appendChild(cancel);\n    buttonContainer.appendChild(submit);\n\n    \n    //when pressing a new page, stores the previous .box and creates a blank sheet\n    //when switching pages, we go to the array index that it corresponds to...\n  \n\n    //Cancel event listener\n    cancel.addEventListener('click', function() {\n        buttonContainer.remove();\n\n        inputContainer.remove();\n        newPageButton.style.display = \"block\";\n    })\n\n\n    //submit event listener\n  let firstRun = true;\n\n \n    submit.addEventListener('click', function() {\n     \n\n        //Displays all the lists we have (left side)\n        const pageNameToCreate = pageName.value;\n        buttonContainer.remove();\n\n        inputContainer.remove();\n        newPageButton.style.display = \"block\"; \n        //add a section that shows the list of displays later... adds the pageNameToCreate to display.., clickable i guess\n\n\n        const lists = document.querySelector('.textContent');\n        const page = document.createElement('p');\n        page.textContent = pageNameToCreate;\n        page.setAttribute('id', tracker);\n        page.classList.add('a' + tracker);\n        tracker++;\n\n        // page.addEventListener('click', function() {\n        //     if (!pages.includes(document.querySelector('#content'))) {\n        //         pages.push(document.querySelector('#content'));\n        //     }\n                \n        //         curr = page.id;\n        //         while (allItems.firstChild) {\n        //             allItems.removeChild(allItems.firstChild);\n        //         }\n        //         allItems.appendChild(pages[curr]); \n        // });\n\n       \n\n\n        //when submit, we store into array......... and then create blank doc,,,, \n\n        pages[curr] = document.querySelector('#content');\n        while (allItems.firstChild) {\n            allItems.removeChild(allItems.firstChild);\n        }\n        const temp = document.createElement('div');\n        temp.setAttribute('id', 'content');\n        allItems.appendChild(temp);\n        curr = pages.length;\n\n        \n        \n            // page.addEventListener('click', function() {\n            //     pages.push(document.querySelector('#content'));\n            //     curr = page.id;\n            //     while (allItems.firstChild) {\n            //         allItems.removeChild(allItems.firstChild);\n            //     }\n            //     allItems.appendChild(pages[curr]); \n            // })\n\n            //After clicking on the element it doesnt work\n            const deletePage = document.createElement('button');\n            deletePage.setAttribute('id', page.id);\n            deletePage.classList.add('delBut');\n            deletePage.textContent = \"x\";\n\n            deletePage.addEventListener('click', function() {\n                if (curr !== deletePage.id) {\n                    deletePage.nextElementSibling.click();\n                } \n\n                    curr = deletePage.previousElementSibling.id;\n                    // console.log(curr);\n                    deletePage.nextElementSibling.remove();\n                    deletePage.remove();\n                        while (allItems.firstChild) {\n                            allItems.removeChild(allItems.firstChild);\n                        }\n                        console.log(pages[curr]);\n                        allItems.appendChild(pages[curr]); \n                        \n                \n\n\n             \n                \n\n                \n                \n\n\n                //once u switch tabs, the button event listener switches also, so you're deleting the wrong tab?? \n                //when delete, activate the 'click' on the previous element so it switches?, remove the left side\n            \n            }); \n            lists.appendChild(deletePage);  \n            lists.appendChild(page);\n            const thePages = document.querySelectorAll('.textContent p');\n\n            // const delBut = document.createElement('button');\n            // lists.appendChild(delBut);\n\n\n            thePages.forEach(element => {\n                element.addEventListener('click', function() {\n                    if (!pages.includes(document.querySelector('#content'))) {\n                        pages.push(document.querySelector('#content'));\n                    }\n                    \n                    curr = element.id;\n                    while (allItems.firstChild) {\n                        allItems.removeChild(allItems.firstChild);\n                    }\n                    allItems.appendChild(pages[curr]); \n\n\n\n                    \n                })\n\n              \n                \n            \n\n            })\n           \n        \n            // const all = document.querySelectorAll('.textContent button');\n            // all.forEach(element => {\n            //     element.addEventListener('click', function() {\n            //         element.previousElementSibling.remove();\n            //         element.remove();\n        \n            //         pages[curr - 1].click();\n            //         curr -= 1;\n        \n                    \n            //     });\n            // })\n         \n    });\n\n    // var arr = Array.prototype.slice.call(thePages);\n\n}\n\n\n\n\n\n\n    \n\n\nconst homePage = document.querySelector('.home');\n\nhomePage.setAttribute('id', '0');\nhomePage.addEventListener('click', function() {\n//    console.log(homePage.id);\n\n\n \n})\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/assets/images/done_FILL0_wght400_GRAD0_opsz24.png":
/*!***************************************************************!*\
  !*** ./src/assets/images/done_FILL0_wght400_GRAD0_opsz24.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2198e98fd5f8bfcb961.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/images/done_FILL0_wght400_GRAD0_opsz24.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;