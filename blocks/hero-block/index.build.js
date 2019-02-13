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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// import './styles/style.scss';
// import './styles/editor.scss';

// import Inspector from './components/inspector';

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

registerBlockType('gutenbergs-hotel/hero-block', {
	title: 'Hero Block',
	description: __('Add a Hero Section', 'gutenbergs-hotel'),
	icon: 'format-gallery',
	category: 'gh-blocks',
	keywords: [__('Hero'), __('Slider')],

	attributes: heroBlockAttributes,

	edit: function edit(props, className, setAttributes) {
		var _props$attributes = props.attributes,
		    heroHeading = _props$attributes.heroHeading,
		    backgroundImageURL = _props$attributes.backgroundImageURL,
		    heroText = _props$attributes.heroText,
		    heroText_color = _props$attributes.heroText_color,
		    button = _props$attributes.button,
		    backgroundImageID = _props$attributes.backgroundImageID;


		return wp.element.createElement(
			'div',
			{ 'class': 'wp-block-gutenbergs-hotel-hero-block' },
			wp.element.createElement(RichText, {
				tagName: 'h1',
				placeholder: __('Hero Heading', 'gutenbergs-hotel'),
				keepPlaceholderOnFocus: true,
				value: heroHeading,
				className: 'hero-title',
				onChange: function onChange(value) {
					return setAttributes({ heroHeading: heroHeading });
				}
			}),
			wp.element.createElement(RichText, {
				tagName: 'p',
				placeholder: __('Hero Text', 'gutenbergs-hotel'),
				keepPlaceholderOnFocus: true,
				value: heroText,
				className: 'hero-text',
				style: { color: heroText_color },
				onChange: function onChange(value) {
					return setAttributes({ heroText: heroText });
				}
			})
		);
	},

	save: function save(props, className) {
		var _props$attributes2 = props.attributes,
		    heroHeading = _props$attributes2.heroHeading,
		    backgroundImageURL = _props$attributes2.backgroundImageURL,
		    heroText = _props$attributes2.heroText,
		    heroText_color = _props$attributes2.heroText_color,
		    button = _props$attributes2.button,
		    backgroundImageID = _props$attributes2.backgroundImageID;


		return [wp.element.createElement(
			'div',
			{ style: 'background-image: url({backgroundImageURL})' },
			wp.element.createElement(RichText.Content, {
				tagName: 'h1',
				value: heroHeading
			}),
			wp.element.createElement(RichText.Content, {
				tagName: 'p',
				value: heroText
			})
		)];
	}
});

/***/ })
/******/ ]);