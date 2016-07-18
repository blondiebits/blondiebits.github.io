app.controller('AuthorController', ['$scope', '$routeParams', 'blog', function($scope, $routeParams, blog) {
	// controlling / setting / getting the data
	$scope.post = blog.posts[blog.posts.length - 1 - $routeParams.id];
	$scope.postIndex = $routeParams.id;
}]);