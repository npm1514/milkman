"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutRight = exports.AboutLeft = exports.About = exports.AboutWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  h2 {\n    color: ", "\n  }\n  @media (min-width: 700px){\n      width: 70%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  img {\n    width: 150px;\n  }\n  @media (min-width: 700px){\n      width: 30%;\n      display: block;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 64px);\n  background-color: ", ";\n  color: #fff;\n  padding: 32px;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  max-width: 736px;\n  margin: auto;\n  @media (min-width: 700px) {\n    overflow: visible;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AboutWrap = _styledComponents["default"].div(_templateObject(), _colors.brown);

exports.AboutWrap = AboutWrap;

var About = _styledComponents["default"].div(_templateObject2(), _colors.brown);

exports.About = About;

var AboutLeft = _styledComponents["default"].div(_templateObject3());

exports.AboutLeft = AboutLeft;

var AboutRight = _styledComponents["default"].div(_templateObject4(), _colors.darkblue);

exports.AboutRight = AboutRight;