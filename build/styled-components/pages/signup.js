"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupContent = exports.SignupWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: calc(100% - 32px);\n    padding: 16px;\n    min-height: 300px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    @media(min-width: 700px){\n      flex-direction: row;\n      align-items: flex-start;\n      justify-content: center;\n      max-width: 900px;\n      margin: 60px auto;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    min-height: 100vh;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SignupWrapper = _styledComponents["default"].div(_templateObject());

exports.SignupWrapper = SignupWrapper;

var SignupContent = _styledComponents["default"].div(_templateObject2());

exports.SignupContent = SignupContent;