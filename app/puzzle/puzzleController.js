var app = angular.module('crosswordApp')
  .controller('crosswordCtrl', crosswordCtrl);

  crosswordCtrl.$inject = ['$scope', 'CrosswordService'];

function crosswordCtrl($scope, CrosswordService){
	$scope.crosswordData = CrosswordService.getCrosswordData();
	$scope.crosswordSize = $scope.crosswordData.size;

	$scope.crosswordGrid = $scope.crosswordData.grid.map(function(item){
		return item === '.' ? false : item;
	});

	$scope.crosswordGridnums = $scope.crosswordData.gridnums.map(function(item){
		// console.log(item)
		return item === 0 ? false : item;
	});
	//console.log($scope.crosswordData)

	splitRows();

	function splitRows(){
		$scope.rowChunk = _.chunk($scope.crosswordGrid, $scope.crosswordSize.cols);
	}

	$scope.highlightVector = function($event){
		//console.log($event);
	}
	console.log($scope.crosswordGridnums);
	$scope.getClueId = function(){
		//console.log(arguments);
	}
	$scope.getCanonicalIndex = function(rowIndex, squareIndex){
		//console.log((rowIndex)*$scope.crosswordSize.rows, squareIndex+1, $scope.crosswordSize);
		console.log($scope.crosswordGridnums);
		var row = rowIndex * $scope.crosswordSize.rows;
		console.log(row + squareIndex)
		return row + squareIndex;
		//(rowIndex+rowChunk.length)+(squareIndex)
	}
	//console.log($scope.crosswordData);
}
