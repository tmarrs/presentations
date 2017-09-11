'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _stripEof = require('strip-eof');

var _stripEof2 = _interopRequireDefault(_stripEof);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEN_MEBIBYTE = 1024 * 1024 * 10;

var exec = function exec(command, args) {
  return new Promise(function (resolve, reject) {
    var stdout = '';
    var stderr = '';

    var process = _child_process2.default.spawn(command, args, { maxBuffer: TEN_MEBIBYTE });

    process.stdout.on('data', function (data) {
      stdout += data;
    });

    process.stderr.on('data', function (data) {
      stderr += data;
    });

    process.on('close', function (code) {
      if (code !== 0) {
        return reject(Error(stderr));
      } else {
        return resolve((0, _stripEof2.default)(stdout));
      }
    });
  });
};

exports.default = exec;