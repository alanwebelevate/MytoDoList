/*

* Author: Alan Scully
* Assignment WE4 Mobile Web Applications, Digital Skills Academy
* Date : 2016/09/08

*/

var app = angular.module('myApp', []); /* module myApp no dependencies */
app.controller('todoCtrl', function($scope) {   /* controller with scope */
    $scope.todoList = [{todoText:'GO SHOPPING', done:false}];

    $scope.todoAdd = function() { /* method */
        $scope.todoList.push({todoText:$scope.todoInput, done:false});         /* to do list with status */
        $scope.todoInput = "";  /* stop same item been created on submit */     /* add new todo to list */  
    };

    $scope.remove = function() {  /* method */ 
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x); /* remove completed items */
        });
    };
});