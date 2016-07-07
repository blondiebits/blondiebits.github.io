
app.directive("post", function() {
  return {
    restrict: 'E',
    scope: {
      p: '=',
      index: '=',
      hideButton: '='
    },
    templateUrl: 'assets/js/directives/post.html'
}})