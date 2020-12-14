"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100vw - 56px);\n  max-width: 900px;\n  p {\n    margin: 0;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  @media(min-width: 700px){\n    width: initial;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SignupWrap = _styledComponents["default"].div(_templateObject());

exports.SignupWrap = SignupWrap;