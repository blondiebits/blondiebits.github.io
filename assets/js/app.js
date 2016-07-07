var app = angular.module('blondiebits', ['ngRoute'])

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'assets/views/home.html' 
    }) 
    .when('/single/', {
    	controller: 'SingleItemController.js',
    	templateUrl: 'assets/views/singleItem.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});