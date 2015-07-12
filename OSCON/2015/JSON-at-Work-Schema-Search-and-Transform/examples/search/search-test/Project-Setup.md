Test Project Setup
==================
Here's how to create the search-test project with Node.


## Contents
- [Create the Project Directory](#create-the-project-directory)
- [Create the Project with `npm init`](#create-the-project-with-npm-init)
- [Install Node Modules](#install-node-modules)
- [Create Test Directory](#create-test-directory)
- [Write the Tests](#write-the-tests)
- [Start the Test Server](#start-the-test-server)
- [Run the Tests](#run-the-tests)


## Create the Project Directory
First, find a suitable directory for your projects.
`cd ~/projects`

Next, create the `search-test` directory and naviage there:
```
mkdir search-test

cd search-test
```

## Create the Project with `npm init`
Now, use `npm init` to create your Node project.

Your CLI session should look like this:
```
npm init

npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (search-test)
version: (1.0.0)
description: JSON Search tests.
entry point: (index.js)
test command: mocha test
git repository:
keywords: JSON, Search
author: Me
license: (ISC)
About to write to /Users/tmarrs/projects/search-test/package.json:

{
  "name": "search-test",
  "version": "1.0.0",
  "description": "JSON Search tests.",
  "main": "index.js",
  "scripts": {
    "test": "mocha test"
  },
  "keywords": [
    "JSON",
    "Search"
  ],
  "author": "Me",
  "license": "ISC"
}


Is this ok? (yes)
```

## Install Node Modules
Next, install the modules we'll need:
```
npm install mocha --save
npm install chai --save
npm install request --save
npm install jsonpath --save
npm install json-pointer --save 
npm install JSONSelect --save 
```

## Create Test Directory
Finally, create the test directory.
```
mkdir test
```

## Write the Tests
Now you're ready to start writing tests.


## Start the Test Server
Don't forget to run the test server.
```
cd /Users/tmarrs/projects/presentations/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/examples/test-server

json-server -p 5000 ./airports.json
```


## Run the Tests
Run the tests as follows:
```
npm test
```