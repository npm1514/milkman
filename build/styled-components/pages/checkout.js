"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckoutContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  input {\n    padding: 12px;\n    margin: 4px 0;\n    width: 230px;\n    border: 1px solid #8d8d8d;\n    border-radius: 3px;\n  }\n  input[type='checkbox'] {\n    width: 20px;\n    height: 20px;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .checkbox {\n    width: 300px;\n    text-align: center;\n    marginm: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckoutContent = _styledComponents["default"].div(_templateObject());

exports.CheckoutContent = CheckoutContent;