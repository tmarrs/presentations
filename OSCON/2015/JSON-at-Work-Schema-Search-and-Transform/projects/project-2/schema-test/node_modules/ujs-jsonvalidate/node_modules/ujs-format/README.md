# Message format utility

[![Build Status](https://secure.travis-ci.org/usingjsonschema/ujs-format-nodejs.png?branch=master)](http://travis-ci.org/usingjsonschema/ujs-format-nodejs)

Message formatting utility function. Using a message template containing
replacement markers {#} (open brace # close brace), where # is a digit
between 0 and 9. Each replacement marker will be replaced by its
corresponding parameter passed to the function. For example,

```javascript
var format = require ("ujs-format").format;
format ("Syntax error on line {0}: Missing '{1}'", "101", ")");
```

will generate the result string,

```javascript
Syntax error on line 101: Missing ')'
```

Using this approach helps with message organization (isolating message
text definitions from the code they are used in) and internationalization,
as the message text can be substituted with different language text, and
the replacement parameters adjusted accordingly.

## Installation
The program can be installed using ```npm```, with the command,

    npm install ujs-format

## Project
This program is part of the [Using JSON Schema]
(http://usingjsonschema.github.io) project.

## License
MIT
