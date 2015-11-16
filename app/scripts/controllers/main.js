'use strict';
angular.module('devopsApp').controller('MainCtrl', ['$scope','$rootScope','$auth', function ($scope, $rootScope, $auth) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function(response) {
          response.config.data.provider = "github";
          UserService.githubAuthCreate(response.config.data, $rootScope.loginUser.account_id).then(function(data){
             if(data.success){
              $scope.githubAccessTable.reload();
             }else{
                Notification.warning({message: data.message});

             }
          });
        })
        .catch(function(response){
        });
    };
  }]);
