"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _forgotpassword = require("../styled-components/pages/forgotpassword");

var _global = require("../styled-components/global");

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

var ForgotPassword = /*#__PURE__*/function (_Component) {
  _inherits(ForgotPassword, _Component);

  var _super = _createSuper(ForgotPassword);

  function ForgotPassword(props) {
    var _this;

    _classCallCheck(this, ForgotPassword);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "submitEmail", function (e) {
      e.preventDefault();
      fetch('/api/recover', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: _this.state.email
        })
      }).then(function (res) {
        if (res.status !== 200) throw Error(res.statusText);
        return res.json();
      }).then(function (response) {
        if (response.message) {
          _this.setState({
            passwordMessage: response.message
          });
        } else {
          alert("An email has been sent to your inbox. Please open the link and reset your password.");
        }

        console.log("send email to user", response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "badPassword", function (passwordMessage) {
      document.getElementById('password1').style.border = '1px solid red';
      document.getElementById('password2').style.border = '1px solid red';

      _this.setState({
        passwordMessage: passwordMessage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateUser", function () {
      var userID = _this.props.data.userID;
      var password1 = _this.state.password1;
      fetch('/api/changePassword/' + userID, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password1: password1
        })
      }).then(function (res) {
        if (res.status !== 200) throw Error(res.statusText);
        return res.json();
      }).then(function (response) {
        if (response.message) {
          _this.setState({
            passwordMessage: response.message
          });
        } else {
          _this.setState({
            passwordMessage: "You have successfully changed your password. Login below."
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submitNewPasswords", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          password1 = _this$state.password1,
          password2 = _this$state.password2;

      if (password1 != password2) {
        _this.badPassword("Passwords do not match!");
      } else if (password1.length < 8) {
        _this.badPassword("Password must be at least 8 characters long");
      } else if (!/\d+/.test(password1)) {
        _this.badPassword("Password must contain at least 1 number");
      } else if (!/[a-zA-Z]/.test(password1)) {
        _this.badPassword("Password must contain at least one letter");
      } else {
        _this.updateUser();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updatePassword", function () {
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
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (e, prop) {
      var obj = {};
      obj[prop] = e.currentTarget.value;

      _this.setState(obj, function () {
        if (!_this.state.expired) _this.updatePassword();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showForm", function () {
      var userID = _this.props.data.userID;
      var _this$state3 = _this.state,
          expired = _this$state3.expired,
          password1 = _this$state3.password1,
          password2 = _this$state3.password2,
          email = _this$state3.email;

      if (!expired && userID) {
        return /*#__PURE__*/_react["default"].createElement(_forgotpassword.FormBox, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Create a New Password"), /*#__PURE__*/_react["default"].createElement("form", {
          onSubmit: _this.submitNewPasswords
        }, /*#__PURE__*/_react["default"].createElement("p", null, "Password must..."), /*#__PURE__*/_react["default"].createElement("p", null, "-contain at least 8 characters"), /*#__PURE__*/_react["default"].createElement("p", null, "-contain at least 1 letter"), /*#__PURE__*/_react["default"].createElement("p", null, "-contain at least 1 number"), /*#__PURE__*/_react["default"].createElement("input", {
          id: "password1",
          placeholder: "Password",
          type: "password",
          value: password1,
          required: true,
          onChange: function onChange(e) {
            _this.updateState(e, "password1");
          }
        }), /*#__PURE__*/_react["default"].createElement("input", {
          id: "password2",
          placeholder: "Re-Type Password",
          type: "password",
          value: password2,
          required: true,
          onChange: function onChange(e) {
            _this.updateState(e, "password2");
          }
        }), /*#__PURE__*/_react["default"].createElement(_global.Button, {
          type: "submit"
        }, "Submit New Password")));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_forgotpassword.FormBox, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Submit Your Email"), /*#__PURE__*/_react["default"].createElement("form", {
          onSubmit: _this.submitEmail
        }, /*#__PURE__*/_react["default"].createElement("p", null, "We will send you a password recovery link."), /*#__PURE__*/_react["default"].createElement("input", {
          placeholder: "Email",
          type: "email",
          value: email,
          required: true,
          onChange: function onChange(e) {
            _this.updateState(e, "email");
          }
        }), /*#__PURE__*/_react["default"].createElement(_global.Button, {
          type: "submit"
        }, "Submit Email")));
      }
    });

    _this.state = {
      email: "",
      password1: "",
      password2: "",
      passwordMessage: "",
      expired: false,
      passwordChanged: false
    };
    return _this;
  }

  _createClass(ForgotPassword, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$data = this.props.data,
          userID = _this$props$data.userID,
          timer = _this$props$data.timer;

      if (userID) {
        console.log(timer, new Date().getTime());

        if (!timer || timer < new Date().getTime()) {
          this.setState({
            expired: true
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var userID = this.props.data.userID;
      var _this$state4 = this.state,
          expired = _this$state4.expired,
          passwordMessage = _this$state4.passwordMessage,
          passwordChanged = _this$state4.passwordChanged;
      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, /*#__PURE__*/_react["default"].createElement(_forgotpassword.ForgotPasswordContent, null, expired && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Sorry! this link has expired."), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/passwordrecovery"
      }, /*#__PURE__*/_react["default"].createElement(_global.Button, null, "Try Again"))), this.showForm(), passwordMessage && /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          color: "red"
        }
      }, passwordMessage), passwordChanged && /*#__PURE__*/_react["default"].createElement("a", {
        href: "/login"
      }, /*#__PURE__*/_react["default"].createElement(_global.Button, null, "Login")))), /*#__PURE__*/_react["default"].createElement(_components.Footer, null));
    }
  }]);

  return ForgotPassword;
}(_react.Component);

var _default = ForgotPassword;
exports["default"] = _default;