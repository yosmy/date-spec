'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DateProp = require('./DateProp');

var _DateProp2 = _interopRequireDefault(_DateProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    date: _DateProp2.default.isRequired,
    amount: _propTypes2.default.number.isRequired
};