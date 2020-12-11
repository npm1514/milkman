"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../components/Header"));

var _Footer = _interopRequireDefault(require("../components/Footer"));

var _chooseproducts = require("../styled-components/pages/chooseproducts");

var _sizes = _interopRequireDefault(require("../data/sizes"));

var _flavors = _interopRequireDefault(require("../data/flavors"));

var _frequencies = _interopRequireDefault(require("../data/frequencies"));

var _products = _interopRequireDefault(require("../data/products"));

var _colors = require("../styled-components/colors");

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

var Chooseproducts = /*#__PURE__*/function (_Component) {
  _inherits(Chooseproducts, _Component);

  var _super = _createSuper(Chooseproducts);

  function Chooseproducts(props) {
    var _this;

    _classCallCheck(this, Chooseproducts);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "selectProduct", function (product) {
      var flavor = product.name == "Cold Brew" ? ["House", 1] : "";
      var size = product.name == "Amour Jam" ? ["9oz", 1] : "";

      _this.setState({
        productSelected: product,
        flavorSelected: flavor,
        sizeSelected: size,
        selectedPrice: product.basePrice
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectFlavor", function (flavor) {
      var _this$state = _this.state,
          _this$state$productSe = _this$state.productSelected,
          name = _this$state$productSe.name,
          basePrice = _this$state$productSe.basePrice,
          sizeSelected = _this$state.sizeSelected;
      var size = name == "Amour Jam" ? ["9oz", 1] : sizeSelected;
      var sizePrice = sizeSelected ? sizeSelected[1] : 1;
      var price = Math.round(basePrice * flavor[1] * sizePrice * 100) / 100;

      _this.setState({
        flavorSelected: flavor,
        sizeSelected: size,
        selectedPrice: price
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectSize", function (size) {
      var _this$state2 = _this.state,
          basePrice = _this$state2.productSelected.basePrice,
          flavorSelected = _this$state2.flavorSelected;
      var price = Math.round(basePrice * flavorSelected[1] * size[1] * 100) / 100;

      _this.setState({
        sizeSelected: size,
        selectedPrice: price
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectFrequency", function (frequency) {
      // const { productSelected: { basePrice }, flavorSelected } = this.state;
      // let price = Math.round(basePrice * flavorSelected[1] * size[1]*100)/100;
      _this.setState({
        frequencySelected: frequency
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectQuantity", function (event) {
      // const { productSelected: { basePrice }, flavorSelected } = this.state;
      // let price = Math.round(basePrice * flavorSelected[1] * size[1]*100)/100;
      _this.setState({
        quantitySelected: event.currentTarget.value
      });
    });

    _this.state = {
      productSelected: "",
      flavorSelected: "",
      sizeSelected: "",
      quantitySelected: "",
      frequencySelected: "",
      startDateSelected: "",
      timeSelected: "",
      selectedPrice: "",
      priceMessage: ""
    };
    return _this;
  }

  _createClass(Chooseproducts, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          productSelected = _this$state3.productSelected,
          flavorSelected = _this$state3.flavorSelected,
          sizeSelected = _this$state3.sizeSelected,
          selectedPrice = _this$state3.selectedPrice,
          frequencySelected = _this$state3.frequencySelected,
          quantitySelected = _this$state3.quantitySelected;
      return /*#__PURE__*/_react["default"].createElement(_chooseproducts.ChooseproductsWrapper, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ChooseproductsContent, null, /*#__PURE__*/_react["default"].createElement(_chooseproducts.FlagWrapper, {
        className: selectedPrice ? "showReel" : ""
      }, selectedPrice && /*#__PURE__*/_react["default"].createElement("h2", {
        style: {
          color: "#fff",
          zIndex: 100
        }
      }, "$", selectedPrice), frequencySelected && /*#__PURE__*/_react["default"].createElement("h2", {
        style: {
          color: "#fff",
          zIndex: 100
        }
      }, frequencySelected.name), /*#__PURE__*/_react["default"].createElement(_chooseproducts.Flag, null, /*#__PURE__*/_react["default"].createElement("path", {
        fill: _colors.lightblue,
        d: "M 1 1 L 149 1 L 149 99 L 139 93 L 129 99 L 119 93 L 109 99 L 99 93 L 89 99 L 79 93 L 69 99 L 59 93 L 49 99 L 39 93 L 29 99 L 19 93 L 9 99 L 1 93 L 1 1 ",
        stroke: _colors.darkblue,
        strokeWidth: "2"
      }))), /*#__PURE__*/_react["default"].createElement("h2", null, "Step 1: Select Product"), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductWrapper, null, _products["default"].map(function (product, i) {
        return /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
          key: i,
          onClick: function onClick() {
            return _this2.selectProduct(product);
          },
          className: productSelected == product ? "productSelected" : ""
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: product.img
        }), /*#__PURE__*/_react["default"].createElement("p", null, product.name));
      })), productSelected && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Step 2: Select Flavor"), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductWrapper, null, _flavors["default"][productSelected.flavorOptions].map(function (flavor, i) {
        return /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
          key: i,
          onClick: function onClick() {
            return _this2.selectFlavor(flavor);
          },
          className: flavor[0] == flavorSelected[0] ? "productSelected" : ""
        }, /*#__PURE__*/_react["default"].createElement("p", null, flavor[0]));
      }))), productSelected && flavorSelected && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Step 3: Select Size"), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductWrapper, null, _sizes["default"][productSelected.sizeOptions].map(function (size, i) {
        return /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
          key: i,
          onClick: function onClick() {
            return _this2.selectSize(size);
          },
          className: size[0] == sizeSelected[0] ? "productSelected" : ""
        }, /*#__PURE__*/_react["default"].createElement("p", null, size[0]));
      }))), productSelected && flavorSelected && sizeSelected && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Step 4: Select Frequency and Quantity"), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductWrapper, null, _frequencies["default"].map(function (frequency, i) {
        return /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
          key: i,
          onClick: function onClick() {
            return _this2.selectFrequency(frequency);
          },
          className: frequency == frequencySelected ? "productSelected" : ""
        }, /*#__PURE__*/_react["default"].createElement("p", {
          title: frequency.label
        }, frequency.name));
      })), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
        className: quantitySelected ? "productSelected" : ""
      }, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Quantity",
        value: quantitySelected,
        onChange: this.selectQuantity
      })))), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null));
    }
  }]);

  return Chooseproducts;
}(_react.Component);

var _default = Chooseproducts;
exports["default"] = _default;