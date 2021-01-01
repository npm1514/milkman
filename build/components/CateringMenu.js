"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _cateringmenu = require("../styled-components/components/cateringmenu");

var _colors = require("../styled-components/colors");

var _products = _interopRequireDefault(require("../data/products"));

var _sizes = _interopRequireDefault(require("../data/sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var CateringMenuComponent = /*#__PURE__*/function (_Component) {
  _inherits(CateringMenuComponent, _Component);

  var _super = _createSuper(CateringMenuComponent);

  function CateringMenuComponent() {
    var _this;

    _classCallCheck(this, CateringMenuComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "pricer", function (value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value);
    });

    return _this;
  }

  _createClass(CateringMenuComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(_cateringmenu.CateringMenuWrap, null, /*#__PURE__*/_react["default"].createElement(_cateringmenu.CateringMenu, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Prepared Drink Menu"), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Sizes"), /*#__PURE__*/_react["default"].createElement("th", null, "16", /*#__PURE__*/_react["default"].createElement("sup", null, "oz")), /*#__PURE__*/_react["default"].createElement("th", null, "32", /*#__PURE__*/_react["default"].createElement("sup", null, "oz")), /*#__PURE__*/_react["default"].createElement("th", null, "64", /*#__PURE__*/_react["default"].createElement("sup", null, "oz")), /*#__PURE__*/_react["default"].createElement("th", null, "128", /*#__PURE__*/_react["default"].createElement("sup", null, "oz"))), _products["default"].map(function (a, ia) {
        if (a.type == "Prepared Drink") {
          return /*#__PURE__*/_react["default"].createElement("tr", {
            key: ia
          }, /*#__PURE__*/_react["default"].createElement("td", null, a.name), _sizes["default"][a.sizeOptions].map(function (b, ib) {
            return /*#__PURE__*/_react["default"].createElement("td", {
              key: ib
            }, _this2.pricer(a.basePrice * b[1][0] / b[1][1]));
          }));
        }
      })), /*#__PURE__*/_react["default"].createElement("h2", null, "Baked Goods Menu"), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Sizes"), /*#__PURE__*/_react["default"].createElement("th", null, "Single"), /*#__PURE__*/_react["default"].createElement("th", null, "1/2 Dozen"), /*#__PURE__*/_react["default"].createElement("th", null, "Dozen")), _products["default"].map(function (a, ia) {
        if (a.type == "Baked Goods") {
          return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
            key: ia
          }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, a.name), _sizes["default"][a.sizeOptions].map(function (c, ic) {
            return /*#__PURE__*/_react["default"].createElement("td", {
              key: ic
            }, _this2.pricer(a.basePrice * c[1][0] / c[1][1]));
          })));
        }
      })), /*#__PURE__*/_react["default"].createElement("h2", null, "Retail Menu"), /*#__PURE__*/_react["default"].createElement("table", null, _products["default"].map(function (a, ia) {
        if (a.type == "Retail") {
          return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
            key: ia
          }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Sizes"), _sizes["default"][a.sizeOptions].map(function (b, ib) {
            return /*#__PURE__*/_react["default"].createElement("th", {
              key: ib
            }, b[0]);
          })), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, a.name), _sizes["default"][a.sizeOptions].map(function (c, ic) {
            return /*#__PURE__*/_react["default"].createElement("td", {
              key: ic
            }, _this2.pricer(a.basePrice * c[1][0] / c[1][1]));
          })));
        }
      }))));
    }
  }]);

  return CateringMenuComponent;
}(_react.Component);

var _default = CateringMenuComponent;
exports["default"] = _default;