(function(){
	var app = angular.module('creditDash', []);
	
	app.controller('DashController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			if (this.tab === checkTab) {
				return true;
			} else {
				return false;
			};
		};
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