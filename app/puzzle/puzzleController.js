var app = angular.module('crosswordApp');
app.controller('puzzleCtrl', puzzleController);
puzzleController.$inject = ['$scope', '$http', '$timeout'];

function puzzleController($scope, $http, $timeout){


	$http({
		method: 'GET',
		url: './app/data/test1.json'
	})
	.then(function(data){
		$scope.crosswordData = data.data;
		$scope.rows = $scope.crosswordData.rows;
		console.log($scope.crosswordData);

		//console.log('data', $scope.crosswordData)
	}, function(err){
		console.error('err', arguments);
	});



}