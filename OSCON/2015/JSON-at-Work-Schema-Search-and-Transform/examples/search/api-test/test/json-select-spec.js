
var expect = require('chai').expect;
var request = require('request');
var jsonSelect = require('JSONSelect');

describe('JSONSelect', function() {
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
				console.log('\n\n\n\nJSONSelect Test');
				var obj = JSON.parse(res.body);
				console.log('\n\n1st & 2nd Object weather: ');
        console.log(jsonSelect.match('.status ~ .weather', obj).slice(0,2));

				console.log('\n\nAll Airport Codes: ');
				console.log(jsonSelect.match('.IATA', obj));
				done();
			});
		});
	});
});
