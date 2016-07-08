
app.directive("post", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      i: '='
    },
    templateUrl: 'assets/js/directives/post.html'
}})