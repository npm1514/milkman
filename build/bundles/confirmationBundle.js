"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _ConfirmationPage = _interopRequireDefault(require("../pages/ConfirmationPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (window) (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_ConfirmationPage["default"], {
  data: window.__DATA__
}), document.getElementById('app'));