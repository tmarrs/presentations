
var expect = require('chai').expect;
var request = require('request');
var jsonfile = require('jsonfile');
var j2j = require('jsonapter').instance();

var template = {
	content: {
  	name: {
		  dataTransform: function(input) {
				return input.firstName + ' ' + input.lastName;
			}
	  },
		email: { dataKey: 'email' },
		about: { dataKey: 'about' },		
	}
};

describe('jsonapter', function() {
	describe('run', function() {
		it('should transform JSON', function(done) {
			var jsonFile = './data/speaker.json';
			var input = jsonfile.readFileSync(jsonFile);
			console.log(input);
			console.log('\n\n\n\jsonapter Test');
			var output = j2j.run(template, input);
			console.log('\n\n\n\Tranformed JSON');
			console.log(JSON.stringify(output));
			done();
		});
	});
});


