var app = angular.module('app', ['ui.grid', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.infiniteScroll']);
 
app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

	$http.get("https://api.myjson.com/bins/11fxr").then(function(response) { 
		$scope.myData = response.data;
	});


}]);