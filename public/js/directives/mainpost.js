
app.directive("mainpost", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      i: '='
    },
    templateUrl: 'js/directives/mainpost.html'
}})