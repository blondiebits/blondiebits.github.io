
app.directive("articlepost", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      ind: '=',
      hideorshow: '=',
    },

    templateUrl: 'js/directives/articlepost.html',
    
    link: function($scope, element, attrs) {
            $scope.getArticle = function(){
            		return "articles/article" + $scope.ind + ".html"
            }
        }

}})