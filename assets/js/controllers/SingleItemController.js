app.controller('SingleItemController', ['$scope', '$routeParams', 'blog', function($scope, $routeParams, blog) {
	// controlling / setting / getting the data
		$scope.post = blog.posts[$routeParams.id];
	
}]);
