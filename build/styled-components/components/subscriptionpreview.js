"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionPreviewWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  background-color: ", ";\n  position: ", ";\n  top: 0;\n  left: 0;\n  z-index: 10;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SubscriptionPreviewWrap = _styledComponents["default"].div(_templateObject(), _colors.darkblue, function (props) {
  return props.menuStuck ? 'fixed' : 'static';
});

exports.SubscriptionPreviewWrap = SubscriptionPreviewWrap;