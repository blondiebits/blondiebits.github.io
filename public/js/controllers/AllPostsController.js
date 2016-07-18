app.controller('AllPostsController', ['$scope', 'blog', function($scope, blog) {
	// controlling / setting / getting the data
	$scope.posts = blog.posts;
}]);