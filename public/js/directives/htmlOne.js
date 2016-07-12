
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
            $scope.getIncludeString = function(index){
            	return "js/directives/article" + index + ".html"
            }
        }

}})