
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
            		return "articles/article" + $scope.ind + ".html"
            }
        }

}})