"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _login = require("../styled-components/components/login");

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

var LoginComponent = /*#__PURE__*/function (_Component) {
  _inherits(LoginComponent, _Component);

  var _super = _createSuper(LoginComponent);

  function LoginComponent(props) {
    var _this;

    _classCallCheck(this, LoginComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateState", function (e, prop) {
      var obj = {};
      obj[prop] = e.currentTarget.value;

      _this.setState(obj);
    });

    _this.state = {
      email: "",
      password: ""
    };
    return _this;
  }

  _createClass(LoginComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          switchDisplay = _this$props.switchDisplay,
          login = _this$props.login;
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      return /*#__PURE__*/_react["default"].createElement(_login.LoginWrap, null, /*#__PURE__*/_react["default"].createElement("a", {
        onClick: switchDisplay
      }, /*#__PURE__*/_react["default"].createElement("p", null, "No login? Create an account")), /*#__PURE__*/_react["default"].createElement("h2", null, "Log In"), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: function onSubmit(e) {
          login(e, _this2.state);
        }
      }, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Email Address",
        type: "email",
        value: email,
        autocomplete: "on",
        onChange: function onChange(e) {
          _this2.updateState(e, "email");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Password",
        type: "password",
        value: password,
        onChange: function onChange(e) {
          _this2.updateState(e, "password");
        }
      }), /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit"
      }, "Log In")), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/passwordrecovery"
      }, /*#__PURE__*/_react["default"].createElement("p", null, "Forgot Your Password?")));
    }
  }]);

  return LoginComponent;
}(_react.Component);

var _default = LoginComponent;
exports["default"] = _default;