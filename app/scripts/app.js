'use strict';

// angular.module('devopsApp', [])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });




var app = angular.module('devopsApp', ['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'satellizer']);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {     
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/',
      });
  }]);

  app.config(function($authProvider) {
    
    $authProvider.google({
      clientId: '756067017075-9r7dbs2re2r87gp66sku8bmk2l8p5tic.apps.googleusercontent.com'
    });

    
  $authProvider.google({
         name: 'google',
          url: '/auth/google',
          authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
          redirectUri: 'http://localhost:8080',
          requiredUrlParams: ['scope'],
          optionalUrlParams: ['display'],
          scope: ['profile', 'email'],
          scopePrefix: 'openid',
          scopeDelimiter: ' ',
          display: 'popup',
          type: '2.0',
          popupOptions: { width: 452, height: 633 }
  });
});
    
      
