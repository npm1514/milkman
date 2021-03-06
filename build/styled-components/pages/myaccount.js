"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyaccountContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MyaccountContent = _styledComponents["default"].div(_templateObject());

exports.MyaccountContent = MyaccountContent;