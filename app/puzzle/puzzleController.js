var app = angular.module('crosswordApp')
  .controller('crosswordCtrl', crosswordCtrl);

  crosswordCtrl.$inject = ['$scope', 'CrosswordService'];

function crosswordCtrl($scope, CrosswordService){
	CrosswordService.init();
	$scope.crosswordData = CrosswordService.getCrosswordData();
	$scope.crosswordSize = CrosswordService.getCrosswordSize();
	$scope.activeSquareId = 1;
	$scope.activeVectorId = 'a';
	$scope.activeSquareIndex = 0;

	//$scope.crosswordGrid = CrosswordService.formatGridData($scope.crosswordData.grid);
	$scope.crosswordClues = CrosswordService.formatClueData($scope.crosswordData.clues);
	$scope.crosswordGridnums = CrosswordService.setCrosswordGridNums($scope.crosswordData);
 	$scope.rowChunk = CrosswordService.splitGridIntoRowsAndFormat($scope.crosswordData.grid, $scope.crosswordSize);
 	console.log($scope.rowChunk)
	$scope.selectClue = function(canonicalIndex, rowIndex, colIndex){
		highlightVector(canonicalIndex, rowIndex, colIndex);
		displayClue(canonicalIndex, rowIndex, colIndex);

	};
	$scope.getClue = function(gridNum, vector){
		if(gridNum){
			if($scope.crosswordClues[vector][gridNum]){
				return $scope.crosswordClues[vector][gridNum];
			}else{
				return false;
			}
		}else{
			return false
		}
	};

	$scope.setClueIndices = function(voidFlag, gridNum, rowIndex, colIndex, vector){
		if(voidFlag){ return;}
		if(gridNum && gridNum in $scope.crosswordClues[vector]){
			console.log('in: ', gridNum)
			return gridNum;
		}else{

			console.log('colIndex', colIndex, 'rowIndex', rowIndex)
			console.log('not in: rowIndex', rowIndex, 'colIndex', colIndex)
			return '';
		}

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
