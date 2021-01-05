"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FourOhFourContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n\n  img {\n    width: 100%;\n    max-width: 480px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FourOhFourContent = _styledComponents["default"].div(_templateObject());

exports.FourOhFourContent = FourOhFourContent;