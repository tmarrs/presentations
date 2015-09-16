Create a Node Project with Mocha and Chai from Scratch
======================================================
* First, find a suitable directory for your project.
  `cd ~/projects`
* Create the `x-test` directory (where `x` is a placeholder for your project name) and navigate there:
  ```
  mkdir x-test

  cd x-test
  ```
* Use `npm init` to create your Node project.
  * Enter `mocha test` at the `test command` prompt.
  * Use defaults everywhere else.
* Add npm modules:
```
npm install mocha --save
npm install chai --save
```
* Install any node modules with `npm install --save`
* Create a `test` directory for the specs.
* Write the specs in the `test` directory.