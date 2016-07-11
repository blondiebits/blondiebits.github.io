
app.directive("htmlone", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      i: '=',
      hideorshow: '='
    },
    templateUrl: 'assets/js/directives/htmlOne.html'
}})