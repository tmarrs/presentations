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
We have a basic Schema for EspressoCON. Let's wade in a bit deeper:
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
    * Create a new directory called `schema-test`
    * Copy the following from the [Project 2 solutions directory](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/project-2/schema-test)
      * The `node_modules` directory.
      * `package.json`
    * We're trying to avoid doing a big `npm install` so we don't flood the WiFi, 
      but if all else fails, then follow the instructions for [creating a Node project with Mocha and Chai from scratch](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/Create-Node-Mocha-Chai-Project-From-Scratch.md).
  * Create a Mocha/Chai spec (in the `test` directory):
    * Add the [`ujs-jsonvalidate`](https://github.com/usingjsonschema/ujs-jsonvalidate-nodejs) npm module to validate the JSON document against the Schema.
    * [Chai's `expect` style Assertions](http://chaijs.com/guide/styles/)
    * See the [json-path-spec](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/examples/search/search-test/test/json-path-spec.js) for an example Mocha/Chai spec.
  * Run the test from the CLI: `npm test`  

The solution is available at: 
https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/project-2


## Project 3 - API Modeling with Schema
We've modeled the Espresso Schema, and now it's time to test-drive the corresponding API ... __without writing any code__:
* Generate some sample data that conforms to the Schema.
  * Take the JSON document that was created during [Project 2](#project-2---schema-constraints-and-conditional-content) so that you can use it as a sample.
  * Visit: [JSON Generator](http://www.json-generator.com/).
  * We want to generate 3 records (Hint: Use `'{{repeat(3)}}'` to get 3 records).
  * Don't worry about generating the `order` object itself. We're only concerned with the fields.
  * Use the following pattern generators:
    * `espressoConCard` -  `{{guid()}}`
    * `orderId` - `{{integer(1, 40000)}}`
    * `date` and `time` - `{{date ...}}`
    * `totalPrice` - `{floating ...}}`
    * `customerName` - `{{firstName()}} {{surname()}}` 
    * Hard-code the following fields with values that fit the Schema:
      * `drinkType: 'Latte'`
      * `size: 'Large'`
      * `milk: 'Non-Fat'`
      * `muffin: 'Chocolate Cheesecake'`
    * Everything else - `{{lorem ...}}`
    * You'll need an object for `drink`.
  * Press the `Generate` button and you'll see 3 new buttons on the right. Press the `Copy to clipboard` button and save the contents to the `orders.json` file.
    * Optional: change `drinkType`, `size`, `milk`, `muffin` to other values that fit the Schema.
  * You may want to save your template as a `.js` file for future reference.
  * Don't forget to validate the contents of `orders.json`:
    * Use [JSONLint](http://www.jsonlint.com) to check the document syntax.
    * Use [JSON Validate](http://jsonvalidate.com/) to check against the following provided Schema:
    ```
    https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/project-3/orders-schema-final.json
    ```
* Now deploy the JSON document as an API:
  * Modify the `orders.json` so that we have the `/orders` route. You'll need to name the array of `orders` and wrap it in the JSON begin/end braces as follows:
  ```
  {
    "orders": [
    ...
    ]
  }
  ```
  * Run `json-server` as follows:
  ```
  json-server -p 5000 ./orders.json
  ```
  * Visit `http://localhost:5000/orders` to see our list of EspressoCON orders.

The solution is available at: https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/project-3


## Project 4 - JSON Search
Let's search on the airports data with JSONPath and JSONPointer.
* JSONPath
  * Review the [JSONPath Syntax](http://goessner.net/articles/JsonPath/index.html#e2).
  * Search for the following airport data:
    * All California Airports (check the `state` field)
    * All California Airport Codes (`IATA` is the airport code)
    * All Airports with low visibility (e.g., `visibility < 10`)
  * Try in an online tester:
    * Copy the contents of the [`airports.json` file](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/examples/test-server/airports.json) and paste it into the following online testers:
      * [JSONPath - Curious Concept](http://jsonpath.curiousconcept.com/)
        * __WARNING__ - Don't press the Return button in the `JSONPath Expression` text box - it doesn't work.
        * Rather, press the `Process` button and it works properly.
      * [JSONPathOnlineEvaluator](http://ashphy.com/JSONPathOnlineEvaluator/) - this one is a bit more user-friendly.
  * Extend the JSONPath Mocha/Chai spec that we saw earlier:
    * Borrow the code from the [Search Examples](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/examples/search/search-test)
    * Add the additional JSONPath queries at the end of the test.
  * Caveats:
    * When testing for equality, use `==`, but _not_ `=`
    * In the tester, start your JSONPath expressions with `$.airports`
    * In the Mocha/Chai specs, start your JSONPath expressions with `$` (i.e., omit `.airports`).
* JSON Pointer
  * Navigate to the following airport data:
    * Temperature (`temperature`) on the 0th Object.
  * Try in an online tester:
    * Copy the contents of the [`airports.json` file](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/examples/test-server/airports.json) and paste it into the following online tester:
     * [JSON Pointer Tester](http://www.jsonpointer.com) 
  * Extend the JSON Pointer Mocha/Chai spec that we saw earlier:
    * Borrow the code from the [Search Examples](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/examples/search/search-test)
    * Add the additional JSON Pointer queries at the end of the test.
  * Caveats:
    * In the tester, start your JSON Pointer expressions with `/airports`
    * In the Mocha/Chai specs, start your JSON Pointer expressions with `/` (i.e., omit `airports`).

The solution is available at: https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/project-4


## Project 5 - JSON Transform
Let's add some new JSON Patch operations to further modify our `speaker`.
* New JSON Patch operations
  * Use the `move` operation to rename the `about` field to `bio`.
  * Use the `replace` operation to change the value of the `email` field to `fred.smith@acme.com`.
  * For examples, please visit:
    * [Intro to JSON Patch](http://slides.com/warpech/introduction-to-json-patch#/).
* Extend the JSON Patch Mocha/Chai spec that we saw earlier:
  * Borrow the code from the [Transform Examples](https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/examples/transform/transform-test)
  * Add the additional JSON Patch operations at the end of the `template` array.


The solution is available at: https://github.com/tmarrs/presentations/blob/master/OSCON/2015/JSON-at-Work-Schema-Search-and-Transform/projects/project-5
