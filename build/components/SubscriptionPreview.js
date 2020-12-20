"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _subscriptionpreview = require("../styled-components/components/subscriptionpreview");

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

var SubscriptionPreviewComponent = /*#__PURE__*/function (_Component) {
  _inherits(SubscriptionPreviewComponent, _Component);

  var _super = _createSuper(SubscriptionPreviewComponent);

  function SubscriptionPreviewComponent() {
    _classCallCheck(this, SubscriptionPreviewComponent);

    return _super.apply(this, arguments);
  }

  _createClass(SubscriptionPreviewComponent, [{
    key: "render",
    value: function render() {
      var _this$props$subscript = this.props.subscription,
          deliveryFrequency = _this$props$subscript.deliveryFrequency,
          flavor = _this$props$subscript.flavor,
          payPeriodFrequency = _this$props$subscript.payPeriodFrequency,
          pricePerDelivery = _this$props$subscript.pricePerDelivery,
          pricePerPayPeriod = _this$props$subscript.pricePerPayPeriod,
          product = _this$props$subscript.product,
          quantity = _this$props$subscript.quantity,
          recurringPayment = _this$props$subscript.recurringPayment,
          size = _this$props$subscript.size,
          startDate = _this$props$subscript.startDate,
          timeOfDelivery = _this$props$subscript.timeOfDelivery,
          _id = _this$props$subscript._id;
      return /*#__PURE__*/_react["default"].createElement(_subscriptionpreview.SubscriptionPreviewWrap, null, /*#__PURE__*/_react["default"].createElement("p", null, _id), /*#__PURE__*/_react["default"].createElement("h2", null, "Your Cart"), /*#__PURE__*/_react["default"].createElement("div", null, "(", quantity, ") ", size, " ", flavor, " ", product), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", null, "Delivery Frequency: ", deliveryFrequency), /*#__PURE__*/_react["default"].createElement("div", null, "Start Date: ", startDate), /*#__PURE__*/_react["default"].createElement("div", null, "Time Of Delivery: ", timeOfDelivery), /*#__PURE__*/_react["default"].createElement("div", null, "Payment Frequency: ", payPeriodFrequency), /*#__PURE__*/_react["default"].createElement("div", null, "Price Per Payment Period: ", new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(pricePerPayPeriod)), /*#__PURE__*/_react["default"].createElement("div", null, "Recurring Payment: ", recurringPayment.toString()));
    }
  }]);

  return SubscriptionPreviewComponent;
}(_react.Component);

var _default = SubscriptionPreviewComponent;
exports["default"] = _default;