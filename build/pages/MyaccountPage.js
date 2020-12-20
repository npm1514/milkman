"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _myaccount = require("../styled-components/pages/myaccount");

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

var Myaccount = /*#__PURE__*/function (_Component) {
  _inherits(Myaccount, _Component);

  var _super = _createSuper(Myaccount);

  function Myaccount(props) {
    var _this;

    _classCallCheck(this, Myaccount);

    _this = _super.call(this, props);
    _this.state = {
      user: {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        subscriptions: []
      }
    };
    return _this;
  }

  _createClass(Myaccount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("/api/getMe").then(function (response) {
        if (response.status !== 200) throw Error(response.statusText);
        return response.json();
      }).then(function (user) {
        console.log(user);

        if (!user._id) {
          window.location.href = "/login";
        } else {
          _this2.setState({
            user: user
          });
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$user = this.state.user,
          _id = _this$state$user._id,
          firstName = _this$state$user.firstName,
          lastName = _this$state$user.lastName,
          email = _this$state$user.email,
          password = _this$state$user.password,
          phone = _this$state$user.phone,
          address = _this$state$user.address,
          city = _this$state$user.city,
          state = _this$state$user.state,
          zip = _this$state$user.zip,
          subscriptions = _this$state$user.subscriptions;
      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, /*#__PURE__*/_react["default"].createElement(_myaccount.MyaccountContent, null, /*#__PURE__*/_react["default"].createElement("span", null, firstName, " ", lastName), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/chooseproducts"
      }, /*#__PURE__*/_react["default"].createElement(_global.Button, null, "Add New Subscription")), /*#__PURE__*/_react["default"].createElement("div", null, "calendar here"), /*#__PURE__*/_react["default"].createElement("div", null, "list of subscriptions"), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/cart"
      }, /*#__PURE__*/_react["default"].createElement(_global.Button, null, "Go To Cart")))), /*#__PURE__*/_react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Myaccount;
}(_react.Component);

var _default = Myaccount;
exports["default"] = _default;