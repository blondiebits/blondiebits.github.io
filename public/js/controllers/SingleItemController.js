app.controller('SingleItemController', ['$scope', '$routeParams', 'blog', function($scope, $routeParams, blog) {
	// controlling / setting / getting the data
		$scope.post = blog.posts.length - 1 - blog.posts[$routeParams.id];
		$scope.ID = $routeParams.id;
		$scope.showButton = false;
	
}]);
