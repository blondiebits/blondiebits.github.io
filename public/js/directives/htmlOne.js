
app.directive("htmlone", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      i: '=',
      hideorshow: '=',
    },
    templateUrl: 'js/directives/htmlOne.html'
}})