"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginContent = exports.LoginWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: calc(100% - 32px);\n    padding: 16px;\n    min-height: 300px;\n    text-align: center;\n  "]);

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

var LoginWrapper = _styledComponents["default"].div(_templateObject());

exports.LoginWrapper = LoginWrapper;

var LoginContent = _styledComponents["default"].div(_templateObject2());

exports.LoginContent = LoginContent;