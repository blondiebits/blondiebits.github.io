
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
            $scope.getArticle = function(){
            		return "js/directives/article" + $scope.ind + ".html"
            }
        }

}})