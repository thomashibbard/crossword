var app = angular.module('crosswordApp');
app.directive('puzzle', puzzle);
//puzzle.$inject = ['$scope'];

function puzzle(){
	return {
		restrict: 'E',
		scope: {
			data: '=',
			rows: '='
		},
		//template: '<textarea id="#a">DATA=>{{data}}</textarea>'
		templateUrl: './app/puzzle/puzzle.html',
		// link: function(scope, element, attrs){
		// 	//var rows = attrs;
		// 	debugger;
		// 	 scope.$watchCollection('crosswordData',function(newVal, oldVal){
		// 	 if (newVal){
		// 			console.log("I see a data change!");
		// 		}
		// 	 });
		// 	 function buildPuzzle(){
		// 	 	debugger;
		// 		element.replaceWith('<h1>test</h1>')
		// 	 }

		// }
	};
}