"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CateringMenu = exports.CateringMenuWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 64px);\n  background-color: ", ";\n  color: ", ";\n  padding: 32px;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 762px;\n  margin: auto;\n  table {\n    width: 100%;\n    max-width: 334px;\n  }\n  tr th:first-child {\n    text-align: left;\n    padding: 0;\n    width: 170px;\n  }\n  tr td:first-child {\n    text-align: left;\n    padding: 0;\n  }\n  th {\n    text-align: right;\n    color: ", ";\n    padding: 0 4px;\n    min-width: 30px;\n  }\n  td {\n    text-align: right;\n    color: ", ";\n    padding: 0 4px;\n  }\n  sup {\n    font-size: 12px;\n  }\n  h2 {\n    width: 100%;\n    text-align: left;\n    max-width: 334px;\n    margin: initial auto;\n  }\n  @media (min-width: 700px){\n    .mobile-menu-header {\n      display: none;\n    }\n    table {\n      max-width: 439px;\n    }\n    tr th:first-child {\n      text-align: left;\n      padding-left: 0;\n      width: 172px;\n    }\n    th, td {\n      font-size: 18px;\n      padding: 0 12px;\n    }\n    h2 {\n      max-width: 439px;\n    }\n  }\n  @media (min-width: 800px){\n    table {\n      max-width: 528px;\n    }\n    th, td {\n      font-size: 28px;\n    }\n    h2 {\n      max-width: 528px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  h2 {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CateringMenuWrap = _styledComponents["default"].div(_templateObject(), _colors.white, _colors.darkblue);

exports.CateringMenuWrap = CateringMenuWrap;

var CateringMenu = _styledComponents["default"].div(_templateObject2(), _colors.white, _colors.green, _colors.darkblue, _colors.green);

exports.CateringMenu = CateringMenu;