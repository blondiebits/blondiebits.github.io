
app.directive("mainpost", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      i: '='
    },
    templateUrl: 'assets/js/directives/mainpost.html'
}})