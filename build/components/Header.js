"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _subcomponents = require("../subcomponents");

var _header = require("../styled-components/components/header");

var _colors = require("../styled-components/colors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderComponent = /*#__PURE__*/function (_Component) {
  _inherits(HeaderComponent, _Component);

  var _super = _createSuper(HeaderComponent);

  function HeaderComponent(props) {
    var _this;

    _classCallCheck(this, HeaderComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "clickMenu", function () {
      if (_this.state.menuOpen) _this.closeMenu();else _this.openMenu();
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      _this.setState({
        menuOpen: false
      }, function () {
        document.body.removeEventListener('click', _this.onBlur);
        document.body.removeEventListener('touchstart', _this.onBlur);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openMenu", function () {
      _this.setState({
        menuOpen: true
      }, function () {
        document.body.addEventListener('click', _this.onBlur);
        document.body.addEventListener('touchstart', _this.onBlur);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      if (!e.path.find(function (a) {
        return a.id == "mobile-header";
      }) && !e.path.find(function (a) {
        return a.id == "mobile-menu";
      })) _this.closeMenu();
    });

    _this.state = {
      menuOpen: false,
      menuStuck: true
    };
    return _this;
  }

  _createClass(HeaderComponent, [{
    key: "render",
    value: function render() {
      var menuStuck = this.state.menuStuck;
      return /*#__PURE__*/_react["default"].createElement(_header.HeaderWrap, null, /*#__PURE__*/_react["default"].createElement(_header.OnlineOrder, null, "Cafe Juniper Subscriptions"), /*#__PURE__*/_react["default"].createElement(_header.MobileHeader, {
        id: "mobile-header"
      }, /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "mobile-hex",
        color: _colors.lightblue,
        top: -17,
        right: 10,
        size: 40
      }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("a", {
        name: "link to home",
        href: "/"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        alt: "secondary logo",
        src: "/images/Cafe-Juniper_Secondary_02.png"
      })), /*#__PURE__*/_react["default"].createElement(_header.HexLock, {
        onClick: this.clickMenu
      }, /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "mobile-hex",
        color: _colors.green,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        size: 60
      }, /*#__PURE__*/_react["default"].createElement("line", {
        x1: "25",
        x2: "75",
        y1: "40",
        y2: "40",
        stroke: _colors.darkblue,
        strokeWidth: "4"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "25",
        x2: "75",
        y1: "50",
        y2: "50",
        stroke: _colors.darkblue,
        strokeWidth: "4"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "25",
        x2: "75",
        y1: "60",
        y2: "60",
        stroke: _colors.darkblue,
        strokeWidth: "4"
      })))), /*#__PURE__*/_react["default"].createElement("h1", null, "Salt lake city's premier coffee shop")), this.state.menuOpen && /*#__PURE__*/_react["default"].createElement(_header.MobileMenu, {
        id: "mobile-menu"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        onClick: this.closeMenu,
        href: "/"
      }, "Home")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        onClick: this.closeMenu,
        href: "/#about"
      }, "About Us")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        onClick: this.closeMenu,
        href: "/#map"
      }, "Location")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        onClick: this.closeMenu,
        href: "/#contact"
      }, "Contact")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        onClick: this.closeMenu,
        href: "/catering"
      }, "Catering"))), /*#__PURE__*/_react["default"].createElement(_header.HeaderWrap, {
        menuStuck: menuStuck
      }, /*#__PURE__*/_react["default"].createElement(_header.DesktopOrder, null, "Cafe Juniper Subscriptions"), /*#__PURE__*/_react["default"].createElement(_header.DesktopHeader, {
        menuStuck: menuStuck
      }, /*#__PURE__*/_react["default"].createElement("a", {
        name: "link to home",
        href: "/"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        style: {
          width: "120px"
        },
        alt: "secondary logo",
        src: "/images/Cafe-Juniper_Secondary_02.png"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/"
      }, "Home"), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/#about"
      }, "About Us"), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/#map"
      }, "Location"), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/#contact"
      }, "Contact"), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/catering"
      }, "Catering"))), /*#__PURE__*/_react["default"].createElement(_header.Spacer, {
        menuStuck: menuStuck
      }));
    }
  }]);

  return HeaderComponent;
}(_react.Component);

var _default = HeaderComponent;
exports["default"] = _default;