Required Installs
=================
Here are the tools and example code to install coming to this session.

## Contents
- [Install Tools](#install-tools)
- [Install Example Code and Projects](#install-example-code-and-projects)
- [Find the Example Code and Projects](#find-the-example-code-and-projects)


## Install Tools
Here are the tools to install:
* [JSONView in Chrome and/or Firefox](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#installing-jsonview-in-chrome-and-firefox)
* [JSONPad](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#installing-jsonpad)
* [Node.js](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#installing-nodejs)
  * npm Modules:
    * [`jsonlint`](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#install-jsonlint)
    * [`ujs-validate`](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#install-ujs-validate)
    * [`tinyserver`](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#install-tinyserver)
    * [`http-server`](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#install-http-server)
    * [`json-server`](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#install-json-server)
    * [Matic](https://github.com/mattyod/matic-draft4-example)
      * Install `matic` and `jade`
        ```
        npm install -g matic
    
        npm install -g jade
        ```
     * Clone the repository: `git clone https://github.com/mattyod/matic-draft4-example`
     * Navigate to `matic-draft4-example`
     * Create the `schemas` directory if it doesn't exist.
     * Copy your [JSON Schema](https://github.com/tmarrs/presentations/tree/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/examples/schema/api/speaker-verbose-schema.json) to the `schemas` directory.
     * Run Matic from the command line:
       ```
       matic
       ```
     * You'll find the generated documentation in the `web` directory.
     * Display the `index.html` file in your browser and you'll see the Schema documentation.
  * [Yeoman](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#installing-yeoman)
    * [Yeoman `webapp` generator](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#installing-the-webapp-yeoman-generator)
* [`jq`](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#installing-jq)
  * [`cURL`](https://github.com/tmarrs/json-at-work-examples/tree/master/appendix-a#installing-curl)

## Install Example Code and Projects
Install the example code as follows:

Use github:
```
git clone https://github.com/tmarrs/presentations.git
```

Or, download the Zip file:
visit [https://github.com/tmarrs/presentations.git](https://github.com/tmarrs/presentations.git)

Then, press the `Download ZIP` button to download the Zip file and unzip it to your local disk.

## Find the Example Code and Projects
After you [install the Example Code and Projects](#install-example-code-and-projects):

```
cd presentations/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform
```

From here, you'll see the following directories:
* `slides` has the PDF of the slides.
* `examples` has all the code listings in the slides.
* `projects` has the problem descriptions for projects that you can work on. This includes the solutions, too.
