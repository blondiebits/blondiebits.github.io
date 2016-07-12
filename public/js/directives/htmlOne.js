
app.directive("htmlone", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      i: '=',
      hideorshow: '=',
    },

    templateUrl: 'js/directives/htmlOne.html',
    
    
    link: function($scope, element, attrs) {
            $scope.getIncludeString = function(){
            	return "js/directives/article" + "0" + ".html"
            }
        }

}})