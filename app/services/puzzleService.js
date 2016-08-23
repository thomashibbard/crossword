var app = angular.module('crosswordApp');
app.service('PuzzleService', function($http){
	this.getPuzzleJson = function(){
		return 	$http({
			method: 'GET',
			url: './app/data/test1.json'
		});
	}
});