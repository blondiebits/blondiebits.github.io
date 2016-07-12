app.controller('HomeController', ['$scope', 'blog', function($scope, blog) {
	// controlling / setting / getting the data
	$scope.posts = blog.posts;
	$scope.showButton = true;

	$scope.getString = function(index) {
		return "js/directives/article" + index + "html"
	}
	
}]);