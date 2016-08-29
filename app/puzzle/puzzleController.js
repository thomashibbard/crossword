var app = angular.module('crosswordApp')
  .controller('crosswordCtrl', crosswordCtrl);

  crosswordCtrl.$inject = ['$scope', 'CrosswordService'];

function crosswordCtrl($scope, CrosswordService){
	$scope.crosswordData = CrosswordService.getCrosswordData();
	$scope.crosswordSize = $scope.crosswordData.size;
	$scope.activeSquareId = 1;
	$scope.activeVectorId = 'a';
	$scope.activeSquareIndex = 0;


	$scope.crosswordGrid = $scope.crosswordData.grid.map(function(item){
		return item === '.' ? false : item;
	});

	$scope.crosswordGridnums = $scope.crosswordData.gridnums.map(function(item){
		return item === 0 ? false : item;
	});

	$scope.getCanonicalIndex = function(rowIndex, squareIndex){
		//console.log((rowIndex)*$scope.crosswordSize.rows, squareIndex+1, $scope.crosswordSize);
		var row = rowIndex * $scope.crosswordSize.rows;
		return row + squareIndex;
		//(rowIndex+rowChunk.length)+(squareIndex)
	}

	splitRows();

	$scope.selectClue = function(canonicalIndex, rowIndex, squareIndex){
		highlightVector(canonicalIndex, rowIndex, squareIndex);
		displayClue(canonicalIndex, rowIndex, squareIndex);

	};

	function splitRows(){
		$scope.rowChunk = _.chunk($scope.crosswordGrid, $scope.crosswordSize.cols);
	}

	function displayClue (canonicalIndex, rowIndex, squareIndex){
		$scope.activeSquareIndex = canonicalIndex;
	};

	function highlightVector  (canonicalIndex, rowIndex, squareIndex){
		console.log('highlighting');
	};

	function getClueId(){
		//console.log(arguments);
	}


	//console.log($scope.crosswordData);
}
