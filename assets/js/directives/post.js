
app.directive("post", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      index: '='
    },
    templateUrl: 'assets/js/directives/post.html'
}})