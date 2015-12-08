'use strict';

/**
 * @ngdoc function
 * @name hackathon27112015TeamDApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the hackathon27112015TeamDApp
 */
angular.module('hackathon27112015TeamDApp')
  .controller('HeaderCtrl', ['$scope', '$state', 'DataSource', '$cookies', '$location', function ($scope, $state, DataSource, $cookies, $location) {

    $scope.logged_in = false;
    var logged_in_useremail = $cookies.get('user_email'),
        logged_in_userid = $cookies.get('user_id');

    if(logged_in_useremail && logged_in_userid) {
        $scope.logged_in = true;
    }

    //logout
    $scope.logOut = function() {
    	$cookies.remove('user_email');
    	$cookies.remove('user_id');
    	$cookies.remove('cookieData');
    	location.reload();
    }

  }]);