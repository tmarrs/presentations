
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
			
			jsonfile.readFile(jsonFile, function(err, obj) {
				console.log(obj);
				console.log('\n\n\n\jsonapter Test');
				var output = j2j.run(template, obj);
				console.log('\n\n\n\Tranformed JSON');
				console.log(JSON.stringify(output));
				done();
			});
		});
	});
});


