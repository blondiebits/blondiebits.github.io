
app.directive("singlepost", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      i: '='
    },
    templateUrl: 'js/directives/singlepost.html'
}})