"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionPreviewWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  max-width: 900px;\n  margin: auto;\n  margin-top: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SubscriptionPreviewWrap = _styledComponents["default"].div(_templateObject());

exports.SubscriptionPreviewWrap = SubscriptionPreviewWrap;