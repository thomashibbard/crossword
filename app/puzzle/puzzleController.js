var app = angular.module('crosswordApp')
  .controller('crosswordCtrl', crosswordCtrl);

  crosswordCtrl.$inject = ['$scope', 'CrosswordService'];

function crosswordCtrl($scope, CrosswordService){
	$scope.crosswordData = CrosswordService.getCrosswordData();
	$scope.crosswordSize = $scope.crosswordData.size;
	splitRows();

	function splitRows(){
		$scope.crosswordGrid = $scope.crosswordData.grid.map(function(item){
			return item === '.' ? false : item;
		});
		$scope.rowChunk = _.chunk($scope.crosswordGrid, $scope.crosswordSize.cols);
		console.log($scope.rowChunk)

	}

	console.log($scope.crosswordData);
}
