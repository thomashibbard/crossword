var app = angular.module('crosswordApp')
  .controller('crosswordCtrl', crosswordCtrl);

  crosswordCtrl.$inject = ['$scope', 'CrosswordService'];

function crosswordCtrl($scope, CrosswordService){
	$scope.crosswordData = CrosswordService.getCrosswordData();
	$scope.crosswordSize = $scope.crosswordData.size;
	$scope.crosswordGrid = $scope.crosswordData.grid.map(function(item){
		return item === '.' ? false : item;
	});
	console.log($scope.crosswordGridnums);
	$scope.crosswordGridnums = $scope.crosswordData.gridnums.map(function(item){
		//console.log(item)
		return item === 0 ? false : item;
	});

	splitRows();

	function splitRows(){
		$scope.rowChunk = _.chunk($scope.crosswordGrid, $scope.crosswordSize.cols);
	}

	$scope.highlightVector = function($event){
		console.log($event);
	}

	//console.log($scope.crosswordData);
}
