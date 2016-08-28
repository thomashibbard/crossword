var app = angular.module('crosswordApp');
app.directive('puzzle', puzzle);
puzzle.$inject = ['PuzzleService'];

function puzzle(PuzzleService){
	return {
		restrict: 'E',
		templateUrl: './app/puzzle/puzzle.html',
	};
}