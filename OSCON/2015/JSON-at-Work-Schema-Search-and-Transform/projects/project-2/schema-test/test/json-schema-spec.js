var expect = require('chai').expect;
var jsonvalidate = require ("ujs-jsonvalidate");
var validate = jsonvalidate.validate;

describe('ujs-jsonvalidate', function() {
	it('should validate', function(done) {
		var jsonFileName = '../order-2.json';
		var jsonSchemaFileName = '../order-schema-2-final.json';
		var refFiles = null;
		var jsdbFile = null;
		
		validate (jsonFileName, jsonSchemaFileName, refFiles, jsdbFile,
			                                        function (code, data, message) {
			console.log('\n\n\n\nujs-jsonvalidate Test - Valid');
			console.log('\n\n\n\nmessage: ' + message);
			expect(code).to.equal(jsonvalidate.VALID);
			done();
	  });
	});
	
	it('should not validate', function(done) {
		var jsonFileName = '../order-2-bad.json';
		var jsonSchemaFileName = '../order-schema-2-final.json';
		var refFiles = null;
		var jsdbFile = null;
		
		validate (jsonFileName, jsonSchemaFileName, refFiles, jsdbFile,
			                                        function (code, data, message) {
			console.log('\n\n\n\nujs-jsonvalidate Test - Invalid');
			expect(code).to.equal(jsonvalidate.VALIDATION_ERROR);
			console.log('\n\n\n\nmessage: ' + message);
			done();
	  });
	});
});