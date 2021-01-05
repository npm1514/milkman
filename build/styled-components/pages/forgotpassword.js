"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormBox = exports.ForgotPasswordContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid #8d8d8d;\n    padding: 12px;\n    margin: 12px auto;\n    min-width: 40%;\n    max-width: 600px;\n    input, button {\n      padding: 12px;\n      margin: 4px 0;\n      width: 100%;\n      border: 1px solid #8d8d8d;\n      border-radius: 3px;\n    }\n    button:hover {\n      cursor: pointer;\n      margin: 3px 0;\n      border: 2px solid #8d8d8d;\n\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ForgotPasswordContent = _styledComponents["default"].div(_templateObject());

exports.ForgotPasswordContent = ForgotPasswordContent;

var FormBox = _styledComponents["default"].div(_templateObject2());

exports.FormBox = FormBox;