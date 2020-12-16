"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupOrLoginWrap = exports.SignupLoginContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #8d8d8d;\n  padding: 12px;\n  margin: 12px;\n  min-width: 40%;\n  input, button {\n    padding: 12px;\n    margin: 4px 0;\n    width: 100%;\n    border: 1px solid #8d8d8d;\n    border-radius: 3px;\n  }\n  button {\n    background-color: ", ";\n  }\n  a {\n    color: ", ";\n  }\n  a:hover {\n    color: ", ";\n    cursor: pointer;\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  @media(min-width: 700px){\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: center;\n    margin: 60px auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SignupLoginContent = _styledComponents["default"].div(_templateObject());

exports.SignupLoginContent = SignupLoginContent;

var SignupOrLoginWrap = _styledComponents["default"].div(_templateObject2(), _colors.pink, _colors.green, _colors.darkblue);

exports.SignupOrLoginWrap = SignupOrLoginWrap;