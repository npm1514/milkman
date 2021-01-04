"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _signup = require("../styled-components/components/signup");

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

var SignupComponent = /*#__PURE__*/function (_Component) {
  _inherits(SignupComponent, _Component);

  var _super = _createSuper(SignupComponent);

  function SignupComponent(props) {
    var _this;

    _classCallCheck(this, SignupComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "badPassword", function (passwordMessage) {
      var p1Border = document.getElementById('password1').style.border;
      var p2border = document.getElementById('password2').style.border;
      var bad = '1px solid red';

      _this.setState({
        passwordMessage: passwordMessage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "signup", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          email = _this$state.email,
          password1 = _this$state.password1,
          password2 = _this$state.password2,
          phone = _this$state.phone,
          address = _this$state.address,
          city = _this$state.city,
          state = _this$state.state,
          zip = _this$state.zip,
          currentCart = _this$state.currentCart;

      if (password1 != password2) {
        _this.badPassword("Passwords do not match!");
      } else if (password1.length < 8) {
        _this.badPassword("Password must be at least 8 characters long");
      } else if (!/\d+/.test(password1)) {
        _this.badPassword("Password must contain at least 1 number");
      } else if (!/[a-zA-Z]/.test(password1)) {
        _this.badPassword("Password must contain at least one letter");
      } else {
        _this.props.signup(e, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password1,
          phone: phone,
          address: address,
          city: city,
          state: state,
          zip: zip,
          currentCart: currentCart
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (e, prop) {
      var obj = {};
      obj[prop] = e.currentTarget.value;

      _this.setState(obj);
    });

    _defineProperty(_assertThisInitialized(_this), "updatePassword", function (e, prop) {
      var _this$state2 = _this.state,
          password1 = _this$state2.password1,
          password2 = _this$state2.password2;

      if (password1 == password2) {
        document.getElementById('password1').style.border = '1px solid #8d8d8d';
        document.getElementById('password2').style.border = '1px solid #8d8d8d';

        _this.setState({
          passwordMessage: ""
        });
      }

      _this.updateState(e, prop);
    });

    _this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      password1: "",
      password2: "",
      passwordMessage: "",
      currentCart: _this.props.subscriptionID ? [_this.props.subscriptionID] : []
    };
    return _this;
  }

  _createClass(SignupComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var switchDisplay = this.props.switchDisplay;
      var _this$state3 = this.state,
          firstName = _this$state3.firstName,
          lastName = _this$state3.lastName,
          email = _this$state3.email,
          password1 = _this$state3.password1,
          password2 = _this$state3.password2,
          phone = _this$state3.phone,
          address = _this$state3.address,
          city = _this$state3.city,
          state = _this$state3.state,
          zip = _this$state3.zip,
          passwordMessage = _this$state3.passwordMessage;
      return /*#__PURE__*/_react["default"].createElement(_signup.SignupWrap, null, /*#__PURE__*/_react["default"].createElement("a", {
        onClick: switchDisplay
      }, /*#__PURE__*/_react["default"].createElement("p", null, "Have an account? Log In Here")), /*#__PURE__*/_react["default"].createElement("h2", null, "Create an Account"), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.signup
      }, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "First Name",
        type: "text",
        value: firstName,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "firstName");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Last Name",
        type: "text",
        value: lastName,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "lastName");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Phone",
        type: "phone",
        value: phone,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "phone");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Email",
        type: "email",
        value: email,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "email");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Address",
        type: "text",
        value: address,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "address");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "City",
        type: "text",
        value: city,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "city");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "State",
        type: "text",
        value: state,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "state");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Zip",
        type: "text",
        value: zip,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "zip");
        }
      }), /*#__PURE__*/_react["default"].createElement("p", null, "Password must..."), /*#__PURE__*/_react["default"].createElement("p", null, "-contain at least 8 characters"), /*#__PURE__*/_react["default"].createElement("p", null, "-contain at least 1 letter"), /*#__PURE__*/_react["default"].createElement("p", null, "-contain at least 1 letter"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "password1",
        placeholder: "Password",
        type: "password",
        value: password1,
        required: true,
        onChange: function onChange(e) {
          _this2.updatePassword(e, "password1");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        id: "password2",
        placeholder: "Re-Type Password",
        type: "password",
        value: password2,
        required: true,
        onChange: function onChange(e) {
          _this2.updatePassword(e, "password2");
        }
      }), passwordMessage && /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          color: "red"
        }
      }, passwordMessage), /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit"
      }, "Sign Up")), /*#__PURE__*/_react["default"].createElement("a", {
        onClick: switchDisplay
      }, /*#__PURE__*/_react["default"].createElement("p", null, "Have an account? Log In Here")));
    }
  }]);

  return SignupComponent;
}(_react.Component);

var _default = SignupComponent;
exports["default"] = _default;