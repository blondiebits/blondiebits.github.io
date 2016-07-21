var app = angular.module('blondiebits', ['ngRoute'])

angular.module('testing',['djds4rce.angular-socialshare'])

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/allposts', {
      controller: 'AllPostsController',
      templateUrl: 'views/allposts.html'
    })
    .when('/author/:id' ,{
      controller: 'AuthorController',
      templateUrl: 'views/author.html'
    })
    .when('/:id', {
    	controller: 'SingleItemController',
    	templateUrl: 'views/singleItem.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

angular.module('testing').run(function($FB){
  $FB.init('1718092488456329');
});