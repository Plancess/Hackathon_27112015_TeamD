'use strict';

/**
 * @ngdoc function
 * @name hackathon27112015TeamDApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the hackathon27112015TeamDApp
 */
angular.module('hackathon27112015TeamDApp')
  .controller('CreateCourseCtrl', ['$scope', '$state', 'DataSource', function ($scope, $state, DataSource) {

  	$scope.fields = 1;

  	$scope.getNumber = function(num) {
  		return new Array(num);
  	};

  	$scope.AddUrlField = function(fieldNo) {
  		$scope.fields = fieldNo + 1;
    };

    $scope.DeleteUrlField = function(index) {
    	//console.log('index :: ', index);
    	$scope.fields -= 1;
    }

  }]);
