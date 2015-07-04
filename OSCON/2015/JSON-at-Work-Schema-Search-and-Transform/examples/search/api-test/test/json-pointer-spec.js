var expect = require('chai').expect;
var request = require('request');
var pointer = require('json-pointer');

describe('json-pointer', function() {
	describe('api', function() {
		it('should return 200', function(done) {
			var options = {
				url: 'http://localhost:5000/airports',
				headers: {
					'Content-Type': 'application/json'
				}
			};
			request.get(options, function(err, res, body) {
				expect(res.statusCode).to.equal(200);
				//console.log(res.body);
				var obj = JSON.parse(res.body);
				console.log('\n\n\n\nJSON Pointer Test');
				console.log('\n\n1st Object: ');
				console.log(pointer.get(obj, '/0'));
				console.log('\nIATA on 2nd Object: ');
				console.log(pointer.get(obj, '/1/IATA'));
				done();
			});
		});
	});
});