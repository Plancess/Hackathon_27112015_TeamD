'use strict';

/**
 * @ngdoc function
 * @name hackathon27112015TeamDApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the hackathon27112015TeamDApp
 */
angular.module('hackathon27112015TeamDApp')
  .controller('HeaderCtrl', ['$scope', '$state', 'DataSource', '$cookies', function ($scope, $state, DataSource, $cookies) {

    $scope.logged_in = false;

    var logged_in_useremail = $cookies.get('user_email'),
        logged_in_userpass = $cookies.get('user_password');

    if(logged_in_useremail && logged_in_userpass) {
        $scope.logged_in = true;
    }

  }]);