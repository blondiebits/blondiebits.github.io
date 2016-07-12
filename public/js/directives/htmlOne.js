
app.directive("htmlone", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      ind: '=',
      hideorshow: '=',
    },

    templateUrl: 'js/directives/htmlOne.html',
    
    
    link: function($scope, element, attrs) {
            $scope.getIncludeString = function(){
            	if ($scope.ind) {
            		return "js/directives/article" + $scope.ind + ".html"
            	} else {
            		return "ok"
            	}
            }
        }

}})