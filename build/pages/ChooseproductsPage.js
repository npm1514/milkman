"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _chooseproducts = require("../styled-components/pages/chooseproducts");

var _global = require("../styled-components/global");

var _sizes = _interopRequireDefault(require("../data/sizes"));

var _flavors = _interopRequireDefault(require("../data/flavors"));

var _frequencies = _interopRequireDefault(require("../data/frequencies"));

var _products = _interopRequireDefault(require("../data/products"));

var _colors = require("../styled-components/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Chooseproducts = /*#__PURE__*/function (_Component) {
  _inherits(Chooseproducts, _Component);

  var _super = _createSuper(Chooseproducts);

  function Chooseproducts(props) {
    var _this;

    _classCallCheck(this, Chooseproducts);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "selectProduct", function (product) {
      var flavor = product.name == "Cold Brew" ? ["House", [1, 1]] : "";
      var size = product.name == "Amour Jam" ? ["9 oz", [1, 1]] : "";

      _this.setState({
        productSelected: product,
        flavorSelected: flavor,
        sizeSelected: size,
        reelPosition: "showReel",
        quantitySelected: 1,
        frequencySelected: ""
      }, function () {
        _this.slider("step2");

        _this.checkPrice();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectFlavor", function (flavor) {
      var _this$state = _this.state,
          name = _this$state.productSelected.name,
          sizeSelected = _this$state.sizeSelected;
      var size = name == "Amour Jam" ? ["9 oz", [1, 1]] : sizeSelected;

      if (sizeSelected && name == "Prebrewed Drip Coffee") {
        var option = flavor[0] == "rotating single origin" ? "singleoriginsizes" : "coffeeteasizes";
        size = _sizes["default"][option].find(function (a) {
          return a[0] == sizeSelected[0];
        });
      }

      _this.setState({
        flavorSelected: flavor,
        sizeSelected: size
      }, function () {
        _this.slider("step3");

        _this.checkPrice();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectSize", function (size) {
      _this.setState({
        sizeSelected: size
      }, function () {
        _this.slider("step4");

        _this.checkPrice();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectFrequency", function (frequency) {
      _this.setState({
        frequencySelected: frequency
      }, function () {
        _this.slider("step5");

        _this.checkPrice();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectQuantity", function (event) {
      var value = event.currentTarget.value;
      var val = value < 1 ? 1 : value;

      _this.setState({
        quantitySelected: val
      }, function () {
        _this.checkPrice();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectStartDate", function (event) {
      _this.setState({
        startDateSelected: event.currentTarget.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectTime", function (event) {
      var value = event.currentTarget.value;
      var time_select = document.getElementById('time_select');
      var hour = parseInt(value.split(":")[0]);
      var isValid = false;

      if (hour > 6 && hour < 13) {
        time_select.style.backgroundColor = '#bfa';
        isValid = true;
      } else {
        time_select.style.backgroundColor = '#fba';
      }

      _this.setState({
        timeSelected: value,
        validTime: isValid
      });
    });

    _defineProperty(_assertThisInitialized(_this), "manageReel", function () {
      var position = _this.state.reelPosition == "showReel" ? "hideReel" : "showReel";

      _this.setState({
        reelPosition: position
      });
    });

    _defineProperty(_assertThisInitialized(_this), "slider", function (id) {
      setTimeout(function () {
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 200);
    });

    _defineProperty(_assertThisInitialized(_this), "checkPrice", function () {
      var _this$state2 = _this.state,
          basePrice = _this$state2.productSelected.basePrice,
          flavorSelected = _this$state2.flavorSelected,
          sizeSelected = _this$state2.sizeSelected,
          quantitySelected = _this$state2.quantitySelected,
          frequencySelected = _this$state2.frequencySelected;
      var flavor = flavorSelected.length ? flavorSelected[1] : [1, 1];
      var size = sizeSelected.length ? sizeSelected[1] : [1, 1];
      var price = Math.round(quantitySelected * basePrice * flavor[0] * (1 / flavor[1]) * size[0] * (1 / size[1]) * 100) / 100;
      var pppp = "";
      var payFreq = "Month";

      if (frequencySelected) {
        pppp = price;

        switch (frequencySelected.name) {
          case "Daily":
            pppp *= 7;
            payFreq = "Week";
            break;

          case "Work Days":
            pppp *= 5;
            payFreq = "Week";
            break;

          case "Weekend":
            pppp *= 2;
            payFreq = "Week";
            break;

          case "Weekly":
            payFreq = "Week";
            break;

          case "Bi-Weekly":
            payFreq = "Bi-Weekly";
            break;
        }
      }

      _this.setState({
        selectedPrice: price,
        pricePerPayPeriod: pppp,
        paymentFrequency: payFreq
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createSubscription", function (e) {
      if (_this.state.validTime) {
        var _this$state3 = _this.state,
            productSelected = _this$state3.productSelected,
            flavorSelected = _this$state3.flavorSelected,
            sizeSelected = _this$state3.sizeSelected,
            quantitySelected = _this$state3.quantitySelected,
            frequencySelected = _this$state3.frequencySelected,
            startDateSelected = _this$state3.startDateSelected,
            timeSelected = _this$state3.timeSelected,
            selectedPrice = _this$state3.selectedPrice,
            paymentFrequency = _this$state3.paymentFrequency,
            pricePerPayPeriod = _this$state3.pricePerPayPeriod,
            user = _this$state3.user;
        var subscriptionID = _this.props.data.subscriptionID;
        fetch('/api/subscriptions', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            product: productSelected.name,
            flavor: flavorSelected[0],
            size: sizeSelected[0],
            quantity: quantitySelected,
            deliveryFrequency: frequencySelected.name,
            startDate: startDateSelected,
            timeOfDelivery: timeSelected,
            pricePerDelivery: selectedPrice,
            pricePerPayPeriod: pricePerPayPeriod,
            payPeriodFrequency: paymentFrequency,
            recurringPayment: true,
            user: user
          })
        }).then(function (res) {
          if (res.status !== 200) throw Error(res.statusText);
          return res.json();
        }).then(function (data) {
          if (user._id) {
            _this.addSubscriptionToUser(data._id);
          } else {
            window.location.href = "/signup/" + data._id;
          }
        });
      } else {
        alert("Please select a valid delivery time.");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addSubscriptionToUser", function (subscriptionID) {
      var _this$state4 = _this.state,
          user = _this$state4.user,
          _this$state4$user = _this$state4.user,
          currentCart = _this$state4$user.currentCart,
          _id = _this$state4$user._id;
      currentCart.push(subscriptionID);
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
        window.location.href = "/cart";
      });
    });

    _this.state = {
      productSelected: "",
      flavorSelected: "",
      sizeSelected: "",
      quantitySelected: 1,
      frequencySelected: "",
      startDateSelected: setMinDate(),
      timeSelected: "09:00",
      selectedPrice: "",
      paymentFrequency: "Month",
      pricePerPayPeriod: "",
      reelPosition: "",
      validTime: true,
      user: {},
      subscription: {}
    };
    return _this;
  }

  _createClass(Chooseproducts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var time_select = document.getElementById('time_select');

      if (time_select && this.state.validTime) {
        time_select.style.backgroundColor = '#bfa';
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("/api/getMe").then(function (response) {
        if (response.status !== 200) throw Error(response.statusText);
        return response.json();
      }).then(function (user) {
        console.log(user);

        _this2.setState({
          user: user
        });
      })["catch"](function (err) {
        return console.log(err);
      });
      var subscriptionID = this.props.subscriptionID;

      if (subscriptionID) {
        fetch('/api/subscriptions/' + subscriptionID).then(function (res) {
          return res.json();
        }).then(function (subscription) {
          _this2.setState({
            subscription: subscription
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state5 = this.state,
          productSelected = _this$state5.productSelected,
          flavorSelected = _this$state5.flavorSelected,
          sizeSelected = _this$state5.sizeSelected,
          selectedPrice = _this$state5.selectedPrice,
          frequencySelected = _this$state5.frequencySelected,
          quantitySelected = _this$state5.quantitySelected,
          pricePerPayPeriod = _this$state5.pricePerPayPeriod,
          startDateSelected = _this$state5.startDateSelected,
          timeSelected = _this$state5.timeSelected,
          reelPosition = _this$state5.reelPosition,
          paymentFrequency = _this$state5.paymentFrequency;
      var sizeoptions = "";

      if (productSelected) {
        sizeoptions = flavorSelected[0] == "rotating single origin" ? "singleoriginsizes" : productSelected.sizeOptions;
      }

      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, /*#__PURE__*/_react["default"].createElement(_chooseproducts.ChooseproductsContent, null, /*#__PURE__*/_react["default"].createElement(_chooseproducts.FlagWrapper, {
        className: reelPosition,
        onClick: this.manageReel
      }, selectedPrice && /*#__PURE__*/_react["default"].createElement("h2", {
        style: {
          color: "#fff",
          zIndex: 100
        }
      }, new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(selectedPrice), "/Delivery"), pricePerPayPeriod && /*#__PURE__*/_react["default"].createElement("h2", {
        style: {
          color: "#fff",
          zIndex: 100
        }
      }, new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(pricePerPayPeriod), "/", paymentFrequency), /*#__PURE__*/_react["default"].createElement(_chooseproducts.Flag, null, /*#__PURE__*/_react["default"].createElement("path", {
        fill: _colors.lightblue,
        d: "\n                      M 1 1\n                      L 249 1\n                      L 249 129\n                      L 239 123\n                      L 229 129\n                      L 219 123\n                      L 209 129\n                      L 199 123\n                      L 189 129\n                      L 179 123\n                      L 169 129\n                      L 159 123\n                      L 149 129\n                      L 139 123\n                      L 129 129\n                      L 119 123\n                      L 109 129\n                      L 99 123\n                      L 89 129\n                      L 79 123\n                      L 69 129\n                      L 59 123\n                      L 49 129\n                      L 39 123\n                      L 29 129\n                      L 19 123\n                      L 9 129\n                      L 1 123\n                      L 1 1",
        stroke: _colors.darkblue,
        strokeWidth: "2"
      }))), /*#__PURE__*/_react["default"].createElement("h2", {
        id: "step1"
      }, "Step 1: Select Product"), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductWrapper, null, _products["default"].map(function (product, i) {
        return /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
          key: i,
          onClick: function onClick() {
            return _this3.selectProduct(product);
          },
          className: productSelected == product ? "productSelected" : ""
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: product.img
        }), /*#__PURE__*/_react["default"].createElement("p", null, product.name));
      })), productSelected && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", {
        id: "step2"
      }, "Step 2: Select Flavor"), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductWrapper, null, _flavors["default"][productSelected.flavorOptions].map(function (flavor, i) {
        return /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
          key: i,
          onClick: function onClick() {
            return _this3.selectFlavor(flavor);
          },
          className: flavor[0] == flavorSelected[0] ? "productSelected" : ""
        }, /*#__PURE__*/_react["default"].createElement("p", null, flavor[0]));
      }))), productSelected && flavorSelected && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", {
        id: "step3"
      }, "Step 3: Select Size"), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductWrapper, null, _sizes["default"][sizeoptions].map(function (size, i) {
        return /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
          key: i,
          onClick: function onClick() {
            return _this3.selectSize(size);
          },
          className: size[0] == sizeSelected[0] ? "productSelected" : ""
        }, /*#__PURE__*/_react["default"].createElement("p", null, size[0]));
      }))), productSelected && flavorSelected && sizeSelected && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", {
        id: "step4"
      }, "Step 4: Select Frequency and Quantity"), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
        style: {
          margin: "auto"
        },
        className: quantitySelected ? "productSelected" : ""
      }, /*#__PURE__*/_react["default"].createElement("input", {
        style: {
          width: "62px",
          textAlign: "center"
        },
        placeholder: "Quantity",
        type: "number",
        required: true,
        value: quantitySelected,
        onChange: this.selectQuantity
      })), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductWrapper, null, _frequencies["default"].map(function (frequency, i) {
        return /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
          key: i,
          onClick: function onClick() {
            return _this3.selectFrequency(frequency);
          },
          className: frequency == frequencySelected ? "productSelected" : ""
        }, /*#__PURE__*/_react["default"].createElement("p", {
          title: frequency.label
        }, frequency.name));
      }))), productSelected && flavorSelected && sizeSelected && frequencySelected && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", {
        id: "step5"
      }, "Step 5: Select Start Date and Preferred Time of Delivery"), /*#__PURE__*/_react["default"].createElement("p", null, "We deliver between the hours of 7AM and 12PM. If you have a deliver requirement outside of this range, please call us."), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
        style: {
          margin: "auto"
        },
        className: startDateSelected ? "productSelected" : ""
      }, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Select Start Date",
        type: "date",
        required: true,
        value: startDateSelected,
        onChange: this.selectStartDate,
        min: setMinDate(),
        max: setMaxDate()
      })), /*#__PURE__*/_react["default"].createElement(_chooseproducts.ProductBox, {
        style: {
          margin: "auto"
        },
        className: timeSelected ? "productSelected" : ""
      }, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Select Preferred Delivery Time",
        type: "time",
        id: "time_select",
        required: true,
        value: timeSelected,
        onChange: this.selectTime,
        min: "07:00",
        max: "12:00"
      }))), productSelected && flavorSelected && sizeSelected && frequencySelected && startDateSelected && timeSelected && /*#__PURE__*/_react["default"].createElement(_global.Button, {
        onClick: this.createSubscription
      }, "Add To Cart"))), /*#__PURE__*/_react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Chooseproducts;
}(_react.Component);

var _default = Chooseproducts;
exports["default"] = _default;

function setMinDate() {
  var minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  return minDate.toISOString().split('T')[0];
}

function setMaxDate() {
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 31);
  return maxDate.toISOString().split('T')[0];
}