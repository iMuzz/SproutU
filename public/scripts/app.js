(function(){
	var app = angular.module('creditDash', []);

	app.controller('ScoreController', function(){
		this.cards = creditCards;
	});

	app.controller('DashController', function(){
		this.tab = 1;
	});

	var creditCards = [{
		bankName: "British Airways",
		image: "",
		balance: 4512
	}, {
		bankName: "Citi Business",
		image: "",
		balance: 2905
	}, {
		bankName: "Bank Of America",
		image: "",
		balance: 3471
	}]
})();