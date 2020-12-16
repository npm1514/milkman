"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderPreviewWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100vw - 56px);\n  margin: 12px;\n  padding: 12px;\n  padding-bottom: 24px;\n  border: 1px solid #8d8d8d;\n  @media (min-width: 700px){\n    width: initial;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderPreviewWrap = _styledComponents["default"].div(_templateObject());

exports.OrderPreviewWrap = OrderPreviewWrap;