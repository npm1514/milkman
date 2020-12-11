"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _CartPage = _interopRequireDefault(require("../pages/CartPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (window) (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_CartPage["default"], {
  data: window.__DATA__
}), document.getElementById('app'));