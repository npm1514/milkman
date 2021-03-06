"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _signuplogin = require("../styled-components/pages/signuplogin");

var _global = require("../styled-components/global");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var SignupLogin = /*#__PURE__*/function (_Component) {
  _inherits(SignupLogin, _Component);

  var _super = _createSuper(SignupLogin);

  function SignupLogin(props) {
    var _this;

    _classCallCheck(this, SignupLogin);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "switchDisplay", function () {
      _this.setState({
        loggingIn: !_this.state.loggingIn
      });
    });

    _defineProperty(_assertThisInitialized(_this), "signup", function (e, obj) {
      e.preventDefault();
      fetch('/api/signup', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(function (res) {
        if (res.status === 200) return res.json();else if (res.status === 401) return {
          message: "Account already exists! Login."
        };else return {};
      }).then(function (data) {
        console.log("auth response", data);

        if (data.message) {
          alert(data.message);
        } else if (data._id) {
          if (_this.props.data.subscriptionID) {
            _this.setState({
              user: data
            }, function () {
              _this.addSubscriptionToUser();
            });
          } else {
            window.location.href = "/myaccount";
          }
        }
      })["catch"](function (err) {
        console.log("login err", err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "login", function (e, obj) {
      e.preventDefault();
      fetch('/api/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(function (res) {
        if (res.status === 200) return res.json();else if (res.status === 401) return {
          message: "Incorrect email or password"
        };else return {};
      }).then(function (data) {
        console.log("auth response", data);

        if (data.message) {
          alert(data.message);
        } else if (data._id) {
          if (_this.props.data.subscriptionID) {
            _this.setState({
              user: data
            }, function () {
              _this.addSubscriptionToUser();
            });
          } else {
            window.location.href = "/myaccount";
          }
        }
      })["catch"](function (err) {
        console.log("login err", err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addSubscriptionToUser", function () {
      var _this$state = _this.state,
          user = _this$state.user,
          _this$state$user = _this$state.user,
          currentCart = _this$state$user.currentCart,
          _id = _this$state$user._id;
      currentCart.push(_this.props.data.subscriptionID);
      currentCart = _toConsumableArray(new Set(currentCart));
      fetch('/api/users/' + _id, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: user
        })
      }).then(function (res) {
        if (res.status !== 200) throw Error(res.statusText);
        return res.json();
      }).then(function (response) {
        console.log("update user", response);
        window.location.href = "/cart";
      });
    });

    _this.state = {
      loggingIn: props.data.loggingIn,
      user: {},
      verified: false
    };
    return _this;
  }

  _createClass(SignupLogin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("/api/getMe").then(function (response) {
        if (response.status !== 200) throw Error(response.statusText);
        return response.json();
      }).then(function (user) {
        if (user._id) {
          window.location.href = "/myaccount";
        } else {
          _this2.setState({
            user: user,
            verified: true
          });
        }
      })["catch"](function (err) {
        return console.log("get me catch", err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          subscription = _this$props$data.subscription,
          subscriptionID = _this$props$data.subscriptionID;
      var _this$state2 = this.state,
          verified = _this$state2.verified,
          user = _this$state2.user;
      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, {
        user: user
      }), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, verified && /*#__PURE__*/_react["default"].createElement(_signuplogin.SignupLoginContent, null, subscriptionID && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Your Cart"), /*#__PURE__*/_react["default"].createElement(_components.SubscriptionPreview, {
        subscription: subscription
      })), /*#__PURE__*/_react["default"].createElement(_signuplogin.SignupOrLoginWrap, null, this.state.loggingIn ? /*#__PURE__*/_react["default"].createElement(_components.Login, {
        switchDisplay: this.switchDisplay,
        login: this.login
      }) : /*#__PURE__*/_react["default"].createElement(_components.Signup, {
        switchDisplay: this.switchDisplay,
        signup: this.signup
      })))), /*#__PURE__*/_react["default"].createElement(_components.Footer, null));
    }
  }]);

  return SignupLogin;
}(_react.Component);

var _default = SignupLogin;
exports["default"] = _default;