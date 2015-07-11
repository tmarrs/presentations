
var expect = require('chai').expect;
var request = require('request');
var jsonfile = require('jsonfile');
var jsonpatch = require('json-patch');

var template = [
  { op: 'add', path: '/submittedSlides', value: true },
	{ op: 'remove', path: '/tags' },
	{ op: 'remove', path: '/company' }
];

describe('json-patch', function() {
	describe('run', function() {
		it('should patch JSON', function(done) {
			var jsonFile = './data/speaker.json';
			var input = jsonfile.readFileSync(jsonFile);
			console.log(input);
			console.log('\n\n\n\JSONPatch Test');
			var output = jsonpatch.apply(input, template);
			console.log('\n\n\n\Patch JSON');
			console.log(JSON.stringify(output));
			done();
		});
	});
});


