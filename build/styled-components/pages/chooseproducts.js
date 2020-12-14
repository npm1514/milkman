"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Flag = exports.FlagWrapper = exports.ProductBox = exports.ProductWrapper = exports.ChooseproductsContent = exports.ChooseproductsWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 6px 12px;\n  margin: 12px auto;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: max-content;\n  &:hover {\n    cursor: pointer;\n    border: 2px solid #8d8d8d;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  width: 250px;\n  height: 130px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  top: -105px;\n  right: 0;\n  left: 0;\n  margin: auto;\n  width: 250px;\n  height: 130px;\n  position: fixed;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  z-index: 10000;\n  transition: top 1s;\n  h2 {\n    font-size: 24px;\n    margin: 8px 0 0 0;\n  }\n  &.showReel {\n    top: -2px;\n  }\n  &.hideReel {\n    top: -85px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: max-content;\n  width: max-content;\n  padding: 8px;\n  margin: 8px;\n  text-align: center;\n  border: 1px solid #8d8d8d;\n  border-radius: 4px;\n  &.productSelected {\n    border: 2px solid #000;\n  }\n  img {\n    height: 150px;\n  }\n  input {\n    padding: 4px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 8px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);

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

var ChooseproductsWrapper = _styledComponents["default"].div(_templateObject());

exports.ChooseproductsWrapper = ChooseproductsWrapper;

var ChooseproductsContent = _styledComponents["default"].div(_templateObject2());

exports.ChooseproductsContent = ChooseproductsContent;

var ProductWrapper = _styledComponents["default"].div(_templateObject3());

exports.ProductWrapper = ProductWrapper;

var ProductBox = _styledComponents["default"].div(_templateObject4());

exports.ProductBox = ProductBox;

var FlagWrapper = _styledComponents["default"].div(_templateObject5());

exports.FlagWrapper = FlagWrapper;

var Flag = _styledComponents["default"].svg(_templateObject6());

exports.Flag = Flag;

var Button = _styledComponents["default"].div(_templateObject7(), _colors.pink);

exports.Button = Button;