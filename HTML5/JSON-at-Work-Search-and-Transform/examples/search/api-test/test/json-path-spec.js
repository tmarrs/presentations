var expect = require('chai').expect;
var request = require('request');
var jp = require('jsonpath');

describe('jsonpath', function() {
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
				console.log('\n\n\n\nJSONPath Test');
				//console.log(res.body);
				//var obj = JSON.parse(res.body);
				var obj = JSON.parse(res.body);
				console.log('\n\n1st & 3rd Object weather: ');
				console.log(jp.query(obj, '$[0,2].weather'));

				console.log('\n\nAll Airport Codes: ');
				console.log(jp.query(obj, '$..IATA'));
				done();
			});
		});
	});

});
