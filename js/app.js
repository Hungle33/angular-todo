var App = angular.module('todoApp', []);
App.controller('TodoController', ['$scope', function($scope){
	$scope.todos = [
	{title:'Sample Todo item', done:false},
	{title:'Sample Todo item', done:true}
	];

	$scope.addTodo = function(){
		$scope.todos.push({title:$scope.todoTask, done:false});
		$scope.todoTask = '';
	};

	$scope.resetTodo = function(){
		$scope.todos = [];
	};

	$scope.clearCompletedTodo = function(){
		$scope.todos = $scope.todos.filter(function(ele) {
			return !ele.done;
		});
	};
}]);


