"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Name"), /*#__PURE__*/_react.default.createElement("th", null, "Registered Course"))), /*#__PURE__*/_react.default.createElement("tbody", null, data ? /*#__PURE__*/_react.default.createElement(RenderTableData, {
    data: data
  }) : /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "no student data available"), /*#__PURE__*/_react.default.createElement("td", null, "no student data available"))));
};

var RenderTableData = function RenderTableData(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, data.map(function (student) {
    return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, student.name), /*#__PURE__*/_react.default.createElement("td", null, student.course));
  }));
};

var _default = Table;
exports.default = _default;

//# sourceMappingURL=Table.js.map