var app = angular.module('crosswordApp');
app.controller('puzzleCtrl', puzzleController);
puzzleController.$inject = ['$scope', '$http', 'PuzzleService'];

function puzzleController($scope, $http, PuzzleService){

	PuzzleService.getPuzzleJson()
	.then(function(data){

		console.log('data from service', data);
		$scope.rows = data.data.rows
	}, function(err){
		console.error('err', err);
	});

}