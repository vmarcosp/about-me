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

      this.buttonMobile.addEventListener('click', function () {
        var $body = document.getElementsByTagName('body')[0];
        if (_this._isMenuActive()) {
          _this.buttonMobile.classList.remove('active');
          _this.menu.classList.remove('active');
          $body.classList.remove('body-overflow-hidden');
        } else {
          $body.classList.add('body-overflow-hidden');
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

},{"./App":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9zcmMvQXBwLmpzIiwianMvc3JjL2NvbnRyb2xsZXJzL0Jhbm5lckNvbnRyb2xsZXIuanMiLCJqcy9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztJQUVNLEc7QUFDSixpQkFBYztBQUFBOztBQUNaLFNBQUssZ0JBQUwsR0FBd0IsZ0NBQXhCO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLLGdCQUFMLENBQXNCLElBQXRCO0FBQ0Q7Ozs7OztrQkFHWSxHOzs7Ozs7Ozs7Ozs7O0lDWFQsZ0I7QUFFSiw4QkFBYztBQUFBOztBQUNaLFNBQUssWUFBTCxHQUFvQixTQUFTLHNCQUFULENBQWdDLGVBQWhDLEVBQWlELENBQWpELENBQXBCO0FBQ0EsU0FBSyxJQUFMLEdBQVksU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxFQUEwQyxDQUExQyxDQUFaO0FBQ0Q7Ozs7a0NBRWE7QUFBQTs7QUFDWixXQUFLLFlBQUwsQ0FBa0IsZ0JBQWxCLENBQW1DLE9BQW5DLEVBQTRDLFlBQU07QUFDaEQsWUFBSSxRQUFRLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBWjtBQUNBLFlBQUksTUFBSyxhQUFMLEVBQUosRUFBMEI7QUFDeEIsZ0JBQUssWUFBTCxDQUFrQixTQUFsQixDQUE0QixNQUE1QixDQUFtQyxRQUFuQztBQUNBLGdCQUFLLElBQUwsQ0FBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFFBQTNCO0FBQ0EsZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixzQkFBdkI7QUFDRCxTQUpELE1BSU87QUFDTCxnQkFBTSxTQUFOLENBQWdCLEdBQWhCLENBQW9CLHNCQUFwQjtBQUNBLGdCQUFLLFlBQUwsQ0FBa0IsU0FBbEIsQ0FBNEIsR0FBNUIsQ0FBZ0MsUUFBaEM7QUFDQSxnQkFBSyxJQUFMLENBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3QixRQUF4QjtBQUNEO0FBQ0YsT0FYRDtBQVlEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUssSUFBTCxDQUFVLFNBQVYsQ0FBb0IsUUFBcEIsQ0FBNkIsUUFBN0IsS0FBMEMsS0FBSyxZQUFMLENBQWtCLFNBQWxCLENBQTRCLFFBQTVCLENBQXFDLFFBQXJDLENBQWpEO0FBQ0Q7OzsyQkFFTTtBQUNMLFdBQUssV0FBTDtBQUNEOzs7Ozs7a0JBSVksZ0I7Ozs7O0FDakNmOzs7Ozs7QUFFQSxPQUFPLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQixNQUFNLE1BQU0sbUJBQVo7QUFDQSxNQUFJLElBQUo7QUFDRCxDQUhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBCYW5uZXJDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvQmFubmVyQ29udHJvbGxlcic7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5iYW5uZXJDb250cm9sbGVyID0gbmV3IEJhbm5lckNvbnRyb2xsZXIoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmJhbm5lckNvbnRyb2xsZXIuaW5pdCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsIlxyXG5jbGFzcyBCYW5uZXJDb250cm9sbGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbk1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vYmlsZS1idXR0b24nKVswXTtcclxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhcicpWzBdO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZU1lbnUoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbk1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0ICRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuICAgICAgaWYgKHRoaXMuX2lzTWVudUFjdGl2ZSgpKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25Nb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICRib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JvZHktb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keS1vdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbk1vYmlsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2lzTWVudUFjdGl2ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiB0aGlzLmJ1dHRvbk1vYmlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuX3RvZ2dsZU1lbnUoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJDb250cm9sbGVyOyIsImltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbiAgYXBwLmluaXQoKTtcclxufTtcclxuIl19
