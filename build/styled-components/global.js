"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductBox = exports.Button = exports.ContentWrapper = exports.PageWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("./colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: max-content;\n  width: max-content;\n  padding: 8px;\n  margin: 8px;\n  text-align: center;\n  border: 1px solid #8d8d8d;\n  border-radius: 4px;\n  &.productSelected {\n    border: 2px solid #000;\n  }\n  img {\n    height: 150px;\n  }\n  input, textarea {\n    padding: 4px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 6px 12px;\n  margin: 13px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: max-content;\n  &:hover {\n    cursor: pointer;\n    margin: 12px;\n    border: 2px solid #8d8d8d;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  padding: 16px;\n  min-height: calc(100vh - 89px - 145px);\n  max-width: 900px;\n  margin: auto;\n  text-align: center;\n  position: relative;\n  @media (min-width: 700px){\n    min-height: calc(100vh - 58px - 115px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageWrapper = _styledComponents["default"].div(_templateObject());

exports.PageWrapper = PageWrapper;

var ContentWrapper = _styledComponents["default"].div(_templateObject2());

exports.ContentWrapper = ContentWrapper;

var Button = _styledComponents["default"].button(_templateObject3(), _colors.pink);

exports.Button = Button;

var ProductBox = _styledComponents["default"].div(_templateObject4());

exports.ProductBox = ProductBox;