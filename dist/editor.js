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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/carousel-block/index.js":
/*!********************************************!*\
  !*** ./src/blocks/carousel-block/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
registerBlockType('gutenbergs-hotel-blocks/carousel-block', {
  title: __('Carousel Block', 'gutenbergs-hotel-blocks'),
  description: __('Carousel', 'gutenbergs-hotel-blocks'),
  category: 'gh-blocks',
  edit: function edit() {},
  save: function save() {}
});

/***/ }),

/***/ "./src/blocks/features-block/index.js":
/*!********************************************!*\
  !*** ./src/blocks/features-block/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/features-block/styles.editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/cesarcdowns/Local Sites/gutenbergs-hotel/app/public/wp-content/plugins/gutenbergs-hotel-blocks/src/blocks/features-block/index.js";

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
registerBlockType('gutenbergs-hotel-blocks/features-block', {
  title: __('Features Block', 'gutenbergs-hotel-blocks'),
  description: __('Features', 'gutenbergs-hotel-blocks'),
  category: 'gh-blocks',
  edit: function edit() {
    return wp.element.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  },
  save: function save() {
    return wp.element.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }
});

/***/ }),

/***/ "./src/blocks/features-block/styles.editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/features-block/styles.editor.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/form-block/index.js":
/*!****************************************!*\
  !*** ./src/blocks/form-block/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
registerBlockType('gutenbergs-hotel-blocks/form-block', {
  title: __('Form Block', 'gutenbergs-hotel-blocks'),
  description: __('Forms', 'gutenbergs-hotel-blocks'),
  category: 'gh-blocks',
  edit: function edit() {},
  save: function save() {}
});

/***/ }),

/***/ "./src/blocks/grid-block/index.js":
/*!****************************************!*\
  !*** ./src/blocks/grid-block/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _jsxFileName = "/Users/cesarcdowns/Local Sites/gutenbergs-hotel/app/public/wp-content/plugins/gutenbergs-hotel-blocks/src/blocks/grid-block/index.js";
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
registerBlockType('gutenbergs-hotel-blocks/grid-block', {
  title: __('Grid Block', 'gutenbergs-hotel-blocks'),
  description: __('Display post types in a grid', 'gutenbergs-hotel-blocks'),
  category: 'gh-blocks',
  edit: function edit() {
    return wp.element.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  },
  save: function save() {
    return wp.element.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }
});

/***/ }),

/***/ "./src/blocks/hero-block/index.js":
/*!****************************************!*\
  !*** ./src/blocks/hero-block/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _jsxFileName = "/Users/cesarcdowns/Local Sites/gutenbergs-hotel/app/public/wp-content/plugins/gutenbergs-hotel-blocks/src/blocks/hero-block/index.js";
var Component = wp.element.Component;
var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;
var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    URLInput = _wp$editor.URLInput,
    BlockControls = _wp$editor.BlockControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    withFallbackStyles = _wp$components.withFallbackStyles,
    IconButton = _wp$components.IconButton,
    Dashicon = _wp$components.Dashicon,
    Toolbar = _wp$components.Toolbar;
var heroBlockAttributes = {
  heroHeading: {
    type: 'array',
    source: 'children',
    selector: 'h2'
  },
  heroText: {
    type: 'array',
    source: 'children',
    selector: '.hero-text'
  },
  heroText_color: {
    type: 'string',
    default: '#f22424'
  },
  heroText_alignment: {
    type: 'string'
  },
  button: {
    type: 'string',
    source: 'text'
  },
  backgroundImageURL: {
    type: 'string',
    source: 'attribute',
    attribute: 'src',
    selector: 'img',
    default: 'http://localhost/hotel/wp-content/uploads/2018/12/210129.jpg'
  },
  backgroundImageID: {
    type: 'number'
  }
};
registerBlockType('gutenbergs-hotel-blocks/hero-block', {
  title: 'Hero Block',
  description: __('Add a Hero Section', 'gutenbergs-hotel'),
  icon: 'format-gallery',
  category: 'gh-blocks',
  keywords: [__('Hero', 'gutenbergs-hotel-blocks'), __('Slider', 'gutenbergs-hotel-blocks')],
  attributes: heroBlockAttributes,
  edit: function edit(props, className, setAttributes) {
    var _props$attributes = props.attributes,
        heroHeading = _props$attributes.heroHeading,
        backgroundImageURL = _props$attributes.backgroundImageURL,
        heroText = _props$attributes.heroText,
        heroText_color = _props$attributes.heroText_color,
        button = _props$attributes.button,
        backgroundImageID = _props$attributes.backgroundImageID;
    return wp.element.createElement("div", {
      class: "wp-block-gutenbergs-hotel-hero-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, wp.element.createElement(RichText, {
      tagName: "h1",
      placeholder: __('Hero Heading', 'gutenbergs-hotel'),
      keepPlaceholderOnFocus: true,
      value: heroHeading,
      className: "hero-title",
      onChange: function onChange(value) {
        return setAttributes({
          heroHeading: heroHeading
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), wp.element.createElement(RichText, {
      tagName: "p",
      placeholder: __('Hero Text', 'gutenbergs-hotel'),
      keepPlaceholderOnFocus: true,
      value: heroText,
      className: "hero-text",
      style: {
        color: heroText_color
      },
      onChange: function onChange(value) {
        return setAttributes({
          heroText: heroText
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }));
  },
  save: function save(props, className) {
    var _props$attributes2 = props.attributes,
        heroHeading = _props$attributes2.heroHeading,
        backgroundImageURL = _props$attributes2.backgroundImageURL,
        heroText = _props$attributes2.heroText,
        heroText_color = _props$attributes2.heroText_color,
        button = _props$attributes2.button,
        backgroundImageID = _props$attributes2.backgroundImageID;
    return [wp.element.createElement("div", {
      style: "background-image: url({backgroundImageURL})",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, wp.element.createElement(RichText.Content, {
      tagName: "h1",
      value: heroHeading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), wp.element.createElement(RichText.Content, {
      tagName: "p",
      value: heroText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }))];
  }
});

/***/ }),

/***/ "./src/blocks/image-showcase-block/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/image-showcase-block/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
registerBlockType('gutenbergs-hotel-blocks/image-showcase-block', {
  title: __('Image Showcase Block', 'gutenbergs-hotel-blocks'),
  description: __('Image Showcase', 'gutenbergs-hotel-blocks'),
  category: 'gh-blocks',
  edit: function edit() {},
  save: function save() {}
});

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_grid_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/grid-block */ "./src/blocks/grid-block/index.js");
/* harmony import */ var _blocks_grid_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_grid_block__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_hero_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/hero-block */ "./src/blocks/hero-block/index.js");
/* harmony import */ var _blocks_hero_block__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_hero_block__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_image_showcase_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/image-showcase-block */ "./src/blocks/image-showcase-block/index.js");
/* harmony import */ var _blocks_image_showcase_block__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_image_showcase_block__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_carousel_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/carousel-block */ "./src/blocks/carousel-block/index.js");
/* harmony import */ var _blocks_carousel_block__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_carousel_block__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_form_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/form-block */ "./src/blocks/form-block/index.js");
/* harmony import */ var _blocks_form_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_form_block__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_features_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/features-block */ "./src/blocks/features-block/index.js");







/***/ })

/******/ });
//# sourceMappingURL=editor.js.map