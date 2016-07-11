
app.directive("singlepost", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      i: '='
    },
    templateUrl: 'assets/js/directives/singlepost.html'
}})