'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateJSONPath = exports.isJSONPath = undefined;

var _isValidPath = require('is-valid-path');

var _isValidPath2 = _interopRequireDefault(_isValidPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_PATH_ERROR = 'Invalid path';
var INVALID_JSON_PATH_ERROR = 'Not a json file';

var isJSONPath = exports.isJSONPath = function isJSONPath(path) {
  return (/\.json$/.test(path)
  );
};

var validateJSONPath = exports.validateJSONPath = function validateJSONPath(JSONFile) {
  if (!(0, _isValidPath2.default)(JSONFile)) {
    throw Error(INVALID_PATH_ERROR);
  }

  if (!isJSONPath(JSONFile)) {
    throw Error(INVALID_JSON_PATH_ERROR);
  }
};