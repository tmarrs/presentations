# JSON Validate Utility

Part of the [Using JSON Schema](http://usingjsonschema.github.io) project.

```jsonvalidate``` is a command line and library utility allowing JSON content
to be validated using JSON Schema content from local or remote sources, and
use of custom schema storage and URI access.

The utility uses the [tv4](https://www.npmjs.org/package/tv4)
library for the schema validation processing
([GitHub repo](https://geraintluff.github.io/tv4)).

For command line/script use, a console message is displayed and the process
exits with 0 for success, 1 for failure.

[![Build Status](https://secure.travis-ci.org/usingjsonschema/ujs-jsonvalidate-nodejs.png?branch=master)](http://travis-ci.org/usingjsonschema/ujs-jsonvalidate-nodejs)

## Command Line / Script Use
To run the validation (command line or script), use the ```validate```
command with a file name (path optional). For example, to check the file
```example.json``` against the schema ```example_schema.json```, use,

    validate example.json example_schema.json

## Library Function Use
**validate** (dataFile, schemaFile, refFiles, jsdbFile, callback)

> dataFile *String* File name of JSON data file (path optional)  
> schemaFile *String* File name of JSON Schema file (path optional)  
> refFiles *String[]* Array of file names for $ref files (path optional)  
> jsdbFile *String* File name for JSDB file (path optional)  
> callback: *Function* Function called when processing has completed. Called
with (code, data, message) arguments, where,
>
> - *code* is the validation result
> - *data* is the validated JSON content from dataFile
> - *message* is text message associated with the *code*

For example,

    var jsonvalidate = require ("ujs-jsonvalidate");
    var validate = jsonvalidate.validate;

    var dataFile = "example.json";
    var schemaFile = "example_schema.json";
    var refFiles = ["ref1_schema.json", "ref2_schema.json"];
    var jsdbFile = null;

    validate (dataFile, schemaFile, refFiles, jsdbFile, function (code, data, message) {
        if (code === jsonvalidate.VALID) {
            console.log ("Valid JSON content");
        } else {
            console.log ("Error: " + message);
        }
    }

## Installation
The program can be installed using ```npm```, with the command,

    npm -g install ujs-jsonvalidate

Use of the ```-g``` parameter will install it in the global system repository,
allowing command line / script use from any location on the system.

## License
MIT