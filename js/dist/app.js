(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BannerController = require('./controllers/BannerController');

var _BannerController2 = _interopRequireDefault(_BannerController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.bannerController = new _BannerController2.default();
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {
            this.bannerController.init();
        }
    }]);

    return App;
}();

exports.default = App;

},{"./controllers/BannerController":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BannerController = function () {
    function BannerController() {
        _classCallCheck(this, BannerController);

        this.buttonMobile = document.getElementsByClassName('mobile-button')[0];
        this.menu = document.getElementsByClassName('navbar')[0];
    }

    _createClass(BannerController, [{
        key: '_toggleMenu',
        value: function _toggleMenu() {
            var _this = this;

            this.buttonMobile.addEventListener('click', function (event) {
                if (_this._isMenuActive()) {
                    _this.buttonMobile.classList.remove('active');
                    _this.menu.classList.remove('active');
                } else {
                    _this.buttonMobile.classList.add('active');
                    _this.menu.classList.add('active');
                }
            });
        }
    }, {
        key: '_isMenuActive',
        value: function _isMenuActive() {
            return this.menu.classList.contains('active') && this.buttonMobile.classList.contains('active');
        }
    }, {
        key: 'init',
        value: function init() {
            this._toggleMenu();
        }
    }]);

    return BannerController;
}();

exports.default = BannerController;

},{}],3:[function(require,module,exports){
'use strict';

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    var app = new _App2.default();
    app.init();
};

},{"./App":1}]},{},[3]);
