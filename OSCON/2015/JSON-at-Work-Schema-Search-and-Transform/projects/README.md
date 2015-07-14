JSON at Work: Schema, Search, and Transform - Projects
======================================================
In addition to the examples shown in the slides, there are projects to work on during this session. We'll use [EspressoCON](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/EspressoCON.md) for subject matter.


## Contents
- [Project 1 - Schema Modeling and Basic Types](#project-1---schema-modeling-and-basic-types)
- [Project 2 - Schema Constraints and Conditional Content](#project-2---schema-constraints-and-conditional-content)
- [Project 3 - API Modeling with Schema](#project-3---api-modeling-with-schema)
- [Project 4 - JSON Search](#project-4---json-search)
- [Project 5 - JSON Transform](#project-5---json-transform)


## Project 1 - Schema Modeling and Basic Types
Create an [Espresso Drink order](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/EspressoCON.md#drinks) with the following elements:
* Order ID
* Customer Name
* [Drink Type](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/EspressoCON.md#drink-types)
* [Flavor](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/EspressoCON.md#flavors)
* [Milk](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/EspressoCON.md#milk)
* [Size](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/EspressoCON.md#sizes)
* Date/Time of the order
  * Date is in MM-DD-YYYY format
  * Time is in HH24:MM:SS format
* [Payment](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/EspressoCON.md#payment-options):
  * EspressoCON Card ID
  * Total Price (in USD) - make this a number, and don't worry about the `$` sign. 

Don't worry about:
* Specialty Drinks
* Formatting constraints on the Date/Time of the order or for the Payment.

Steps:
* Model the data with [JSONPad](https://github.com/tmarrs/json-at-work/tree/master/appendix-a#installing-jsonpad):
 * Use the the green `+` button to add elements.
 * Press the blue arrow button (under Tree) to generate the JSON document.
 * Copy the JSON Document to your clipboard.
* Validate the document on [JSONLint](http://jsonlint.com).
* Generate the initial Schema:
  * Visit [JSONSchema.net](http://jsonschema.net) and paste in the JSON document on the left-hand side.
  * Start with the default settings, and make the following changes:
    * Turn off `Use absolute IDs`
    * Turn off `Allow additional properties` 
    * Turn off `Allow additional items`
  * Press the `Generate Schema` button.
  * Copy the generated Schema to your clipboard.
* Validate the JSON document against the Schema:
  * Visit [JSON Validate](http://jsonvalidate.com/) and paste in the JSON document and Schema.
  * Remove all `id` fields because they're not needed.
  * Press the `Validate` button, and the document should validate against the schema.
  * Now, add an `enum` for Drink Type, Flavor, Milk, and Size.
  * You'll probably want to validate after adding each `enum`.
  * Make the Flavor optional.
  * Validate the JSON Document against the Schema.
  * Try modifying the JSON Document to violate the Schema to double-check.

The solution is available at: 
https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/project-1


## Project 2 - Schema Constraints and Conditional Content
Let's wade in a bit deeper:
* Expand the JSON document so that a customer can order a [muffin](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/EspressoCON.md#muffins) and/or [bagel](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/EspressoCON.md#bagels) with their drink.
  * Group the drink-related keys (Drink Type, Flavor, Milk, and Size) into a `drink` object.
  * Please be sure to use an `enum` for the `muffin`. 
  * Don't forget to go through the same process in [Project 1](#project-1---schema-modeling-and-basic-types) with:
    * [JSONPad](https://github.com/tmarrs/json-at-work/tree/master/appendix-a#installing-jsonpad)
    * [JSONLint](http://jsonlint.com)
    * [JSONSchema.net](http://jsonschema.net)
    * [JSON Validate](http://jsonvalidate.com/)
* Create Regular Expressions to validate the following fields:
  * EspressoCON Card ID
  * Order Date & Time
  * If you're struggling with Regexp:
    * Use [Regexp101](https://regex101.com/) for online testing.
    * Search the web for example Regular Expressions.
* Add a Mocha/Chai spec to validate the JSON Document against the Schema:
  * Create a Node project as follows:
    * First, find a suitable directory for your projects.
      `cd ~/projects`
    * Create the `search-test` directory and navigate there:
      ```
      mkdir search-test

      cd search-test
      ```
    * Use `npm init` to create your Node project.
      * Enter `mocha test` at the `test command` prompt.
      * Use defaults everywhere else.
    * Add npm modules:
    ```
    npm install mocha --save
    npm install chai --save
    ```
    * Create a `test` directory for the spec.
  * Create a Mocha/Chai spec (in the `test` directory):
    * Add the [`ujs-jsonvalidate`](https://github.com/usingjsonschema/ujs-jsonvalidate-nodejs) npm module to validate the JSON document against the Schema.
    * [Chai's `expect` style Assertions](http://chaijs.com/guide/styles/)
    * See the [json-path-spec](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/examples/search/search-test/test/json-path-spec.js) for an example Mocha/Chai spec.
  * Run the test from the CLI: `npm test`  

The solution is available at: 
https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/project-2


## Project 3 - API Modeling with Schema


## Project 4 - JSON Search


## Project 5 - JSON Transform
