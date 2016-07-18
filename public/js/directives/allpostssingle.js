app.directive("allpostssingle", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      i: '='
    },
    templateUrl: 'js/directives/allpostssingle.html',

     link: function($scope, element, attrs) {
            $scope.getPhoto = function(){
            		return "images/article" + $scope.ind + "/pin.png"
            }
        }

}})