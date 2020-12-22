"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _checkout = require("../styled-components/pages/checkout");

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

var Checkout = /*#__PURE__*/function (_Component) {
  _inherits(Checkout, _Component);

  var _super = _createSuper(Checkout);

  function Checkout(props) {
    var _this;

    _classCallCheck(this, Checkout);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "submitPayment", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          ccNum = _this$state.ccNum,
          ccExp = _this$state.ccExp,
          ccCVV = _this$state.ccCVV,
          ccZip = _this$state.ccZip,
          saveCard = _this$state.saveCard;
      fetch('/api/pay', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ccNum: ccNum,
          ccExp: ccExp,
          ccCVV: ccCVV,
          ccZip: ccZip
        })
      }).then(function (res) {
        if (res.status !== 200) throw Error(res.statusText);
        return res.json();
      }).then(function (res) {
        console.log("res", res.message);

        if (res.message == "success") {
          if (saveCard) {
            _this.encryptCardInfo();
          } else {
            _this.createOrder();
          }
        } else {
          _this.setMessage(res.message);
        }

        console.log("payment success", res);
      })["catch"](function (err) {
        console.log("payment error", err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "encryptCardInfo", function () {
      console.log("encryption");
      var _this$state2 = _this.state,
          ccNum = _this$state2.ccNum,
          ccExp = _this$state2.ccExp,
          ccCVV = _this$state2.ccCVV,
          ccZip = _this$state2.ccZip;
      fetch('/api/card', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ccNum: ccNum,
          ccExp: ccExp,
          ccCVV: ccCVV,
          ccZip: ccZip
        })
      }).then(function (res) {
        if (res.status !== 200) throw Error(res.statusText);
        return res.json();
      }).then(function (data) {
        console.log("card info encrypted", data);

        _this.setState({
          ccNumEncrypted: data.ccNum,
          ccExpEncrypted: data.ccExp,
          ccCVVEncrypted: data.ccCVV,
          ccZipEncrypted: data.ccZip
        }, function () {
          _this.createOrder();
        });
      })["catch"](function (err) {
        console.log("card info not encrypted", err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createOrder", function () {
      var _this$state3 = _this.state,
          _this$state3$user = _this$state3.user,
          _id = _this$state3$user._id,
          currentCart = _this$state3$user.currentCart,
          subtotal = _this$state3.subtotal;
      fetch('/api/orders', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: _id,
          subscriptions: currentCart.map(function (a) {
            return a._id;
          }),
          price: subtotal,
          date: new Date()
        })
      }).then(function (res) {
        if (res.status !== 200) throw Error(res.statusText);
        return res.json();
      }).then(function (data) {
        console.log("order created", data);

        _this.updateUser(data._id);
      })["catch"](function (err) {
        console.log("order creation error", err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateUser", function (orderId) {
      var _this$state4 = _this.state,
          _this$state4$user = _this$state4.user,
          _id = _this$state4$user._id,
          currentCart = _this$state4$user.currentCart,
          subscriptions = _this$state4$user.subscriptions,
          orders = _this$state4$user.orders,
          subtotal = _this$state4.subtotal,
          ccNumEncrypted = _this$state4.ccNumEncrypted,
          ccExpEncrypted = _this$state4.ccExpEncrypted,
          ccCVVEncrypted = _this$state4.ccCVVEncrypted,
          ccZipEncrypted = _this$state4.ccZipEncrypted;
      var cartSubscriptions = currentCart.map(function (a) {
        subscriptions.push(a._id);
      });
      console.log(subscriptions);
      console.log(orderId);
      orders.push(orderId);
      fetch('/api/users/' + _id, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          encryptedCard: ccNumEncrypted,
          encryptedCVV: ccExpEncrypted,
          encryptedExp: ccCVVEncrypted,
          encryptedZip: ccZipEncrypted,
          currentCart: [],
          subscriptions: subscriptions,
          orders: orders
        })
      }).then(function (res) {
        if (res.status !== 200) throw Error(res.statusText);
        return res.json();
      }).then(function (data) {
        console.log("update user success", data);
        window.location.href = "/confirmation/" + orderId;
      })["catch"](function (err) {
        console.log("update user error", err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (e, prop) {
      var obj = {};
      obj[prop] = e.currentTarget.value;

      _this.setState(obj);
    });

    _defineProperty(_assertThisInitialized(_this), "updateCheckbox", function (e) {
      _this.setState({
        saveCard: e.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setMessage", function (message) {
      _this.setState({
        message: message
      });

      setTimeout(function () {
        _this.setState({
          message: ""
        });
      }, 3000);
    });

    _this.state = {
      user: {
        currentCart: []
      },
      ccNum: "",
      ccExp: "",
      ccCVV: "",
      ccZip: "",
      ccNumEncrypted: "",
      ccExpEncrypted: "",
      ccCVVEncrypted: "",
      ccZipEncrypted: "",
      saveCard: false,
      verified: false,
      payMessage: "",
      subtotal: 0
    };
    return _this;
  }

  _createClass(Checkout, [{
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
        } else if (!user.currentCart.length) {
          window.location.href = "/myaccount";
        } else {
          _this2.setState({
            user: user,
            verified: true,
            subtotal: user.currentCart.reduce(function (a, b) {
              return a + b.pricePerDelivery;
            }, 0)
          });
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state5 = this.state,
          currentCart = _this$state5.user.currentCart,
          ccNum = _this$state5.ccNum,
          ccExp = _this$state5.ccExp,
          ccCVV = _this$state5.ccCVV,
          ccZip = _this$state5.ccZip,
          saveCard = _this$state5.saveCard,
          verified = _this$state5.verified,
          payMessage = _this$state5.payMessage,
          subtotal = _this$state5.subtotal;
      console.log(this.state);
      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, verified && /*#__PURE__*/_react["default"].createElement(_checkout.CheckoutContent, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Your Cart"), currentCart.map(function (subscription, index) {
        return /*#__PURE__*/_react["default"].createElement(_components.SubscriptionPreview, {
          key: index,
          subscription: subscription
        });
      }), /*#__PURE__*/_react["default"].createElement("h2", null, "Subtotal: $", subtotal), payMessage && /*#__PURE__*/_react["default"].createElement("span", null, payMessage), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.submitPayment
      }, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "CCN",
        type: "text",
        value: ccNum,
        required: true,
        onChange: function onChange(e) {
          _this3.updateState(e, "ccNum");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "EXP",
        type: "text",
        value: ccExp,
        required: true,
        onChange: function onChange(e) {
          _this3.updateState(e, "ccExp");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "CVV",
        type: "text",
        value: ccCVV,
        required: true,
        onChange: function onChange(e) {
          _this3.updateState(e, "ccCVV");
        }
      }), /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Card Zip",
        type: "text",
        value: ccZip,
        required: true,
        onChange: function onChange(e) {
          _this3.updateState(e, "ccZip");
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        "for": "saveCard"
      }, "Save Card Info?"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "saveCard",
        style: {
          marginTop: '8px',
          marginLeft: '8px'
        },
        type: "checkbox",
        name: "saveCard",
        checked: saveCard,
        required: true,
        onChange: this.updateCheckbox
      })), /*#__PURE__*/_react["default"].createElement(_global.Button, {
        type: "submit"
      }, "Submit Payment")))), /*#__PURE__*/_react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Checkout;
}(_react.Component);

var _default = Checkout;
exports["default"] = _default;