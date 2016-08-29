var app = angular.module('crosswordApp')
  .controller('crosswordCtrl', crosswordCtrl);

  crosswordCtrl.$inject = ['$scope', 'CrosswordService'];

function crosswordCtrl($scope, CrosswordService){
	$scope.crosswordData = CrosswordService.getCrosswordData();
	$scope.crosswordSize = $scope.crosswordData.size;
	$scope.activeSquareId = 1;
	$scope.activeVectorId = 'a';
	$scope.activeSquareIndex = 0;

 $scope.crosswordGrid = CrosswordService.formatCrosswordData($scope.crosswordData);
 $scope.crosswordGridnums = CrosswordService.setCrosswordGridNums($scope.crosswordData);
 $scope.rowChunk = CrosswordService.splitGridIntoRows($scope.crosswordGrid, $scope.crosswordSize);

	$scope.getCanonicalIndex = function(rowIndex, colIndex){
		//console.log((rowIndex)*$scope.crosswordSize.rows, colIndex+1, $scope.crosswordSize);
		var row = rowIndex * $scope.crosswordSize.rows;
		return row + colIndex;
		//(rowIndex+rowChunk.length)+(colIndex)
	}

	$scope.selectClue = function(canonicalIndex, rowIndex, colIndex){
		highlightVector(canonicalIndex, rowIndex, colIndex);
		displayClue(canonicalIndex, rowIndex, colIndex);

	};

	function displayClue (canonicalIndex, rowIndex, colIndex){
		$scope.activeSquareIndex = canonicalIndex;
	};

	function highlightVector  (canonicalIndex, rowIndex, colIndex){
		console.log('canonicalIndex', canonicalIndex, 'rowIndex', rowIndex, 'colIndex', colIndex);
	};

	function getClueId(){
		//console.log(arguments);
	}


	//console.log($scope.crosswordData);
}
