"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _footer = require("../styled-components/components/footer");

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

var FooterComponent = /*#__PURE__*/function (_Component) {
  _inherits(FooterComponent, _Component);

  var _super = _createSuper(FooterComponent);

  function FooterComponent() {
    _classCallCheck(this, FooterComponent);

    return _super.apply(this, arguments);
  }

  _createClass(FooterComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_footer.Footer, null, /*#__PURE__*/_react["default"].createElement("span", null, "Copyright 2020 Cafe Juniper LLC"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        rel: "noopener",
        name: "instagram link",
        href: "https://www.instagram.com/cafejuniperslc/",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fab fa-instagram"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        rel: "noopener",
        name: "facebook link",
        href: "https://www.facebook.com/cafejuniperslc",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fab fa-facebook-square"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        rel: "noopener",
        name: "facebook link",
        href: "https://www.grubhub.com/restaurant/cafe-juniper-29-e-400-s-salt-lake-city/2418846",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        width: "28",
        height: "28",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 40 40"
      }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("rect", {
        width: "40",
        height: "40",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M14.6273,17.9708c0,.703-.3013,3.5149-2.31,4.1174-1.5063.4017-2.2093-.703-2.2093-3.314v-9.44a6.3838,6.3838,0,0,1,.8034-3.314,3.5254,3.5254,0,0,1,2.1089-1.2051c.8034,0,1.6068.703,1.6068,2.2094V8.4305c0,.3013.3013.6026.6025.4017l3.5149-1.4059c.1,0,.3013-.1005.3013-.4017V5.4178c0-3.8162-3.4145-6.1259-7.03-5.2221A8.8677,8.8677,0,0,0,5.3882,8.9326V20.5819c0,4.2178,3.0128,6.3267,5.5234,6.3267,3.7157,0,8.1344-2.9123,8.1344-9.2391v-7.23c0-.4017-.3013-.4017-.6026-.4017l-5.7242,2.0085a.5147.5147,0,0,0-.4017.6025v3.314c0,.3013.3013.4017.6026.4017l1.6068-.6025v2.2093Zm19.3819,21.993c.3013.1.6026,0,.6026-.4017V15.1589c0-.3012-.1005-.4017-.4017-.4017l-3.7157-1.4059c-.3013-.1-.6026,0-.6026.4017v9.6408l-3.7157-1.406V12.2466c0-.3012-.1-.4017-.4017-.4017L22.0587,10.439c-.3013-.1-.6026,0-.6026.4017v24.604c0,.3013.1005.4017.4017.4017l3.7157,1.4059c.3013.1005.6026,0,.6026-.4017V26.7078l3.7157,1.4059V38.2566c0,.3012.1.4017.4017.4017l3.7157,1.3055Z"
      })))), /*#__PURE__*/_react["default"].createElement("a", {
        rel: "noopener",
        name: "facebook link",
        href: "https://www.doordash.com/store/cafe-juniper-salt-lake-city-1279187/en-US",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 99.5 56.5"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"
      })))));
    }
  }]);

  return FooterComponent;
}(_react.Component);

var _default = FooterComponent;
exports["default"] = _default;