(function(){
	var app = angular.module('creditDash', []);

	app.controller('ScoreController', function(){
		this.test = test;
		console.log("This is just to see if it works")
	});

	var test = {
		name: 'Faraaz',
		price: 3.0,
		description: "Hey this should be the description"
	}
})();