var app = angular.module('crosswordApp');
app.directive('puzzle', puzzle);
puzzle.$inject = ['PuzzleService'];

function puzzle(PuzzleService){
	return {
		restrict: 'E',
		//template: '<textarea id="#a">DATA=>{{data}}</textarea>'
		templateUrl: './app/puzzle/puzzle.html',

	};
}