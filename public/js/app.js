var app = angular.module('blondiebits', ['ngRoute'])

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