'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commandFactory = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _options = require('./options');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JQ_PATH = _path2.default.join(__dirname, '..', 'bin', 'jq');

var commandFactory = exports.commandFactory = function commandFactory(filter, json) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return {
    command: JQ_PATH,
    args: (0, _options.parseOptions)(filter, json, options)
  };
};