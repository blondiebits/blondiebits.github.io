app.directive("author", function() {
  return {
    restrict: 'E',
    scope: {
      post: '=',
      postIndex: '='
    },
    templateUrl: 'js/directives/author.html',

}})