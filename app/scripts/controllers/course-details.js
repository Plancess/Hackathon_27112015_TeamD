'use strict';

/**
 * @ngdoc function
 * @name hackathon27112015TeamDApp.controller:CourseDetailsCtrl
 * @description
 * # CourseDetailsCtrl
 * Controller of the hackathon27112015TeamDApp
 */
angular.module('hackathon27112015TeamDApp')
  .controller('CourseDetailsCtrl', ['$scope', '$state', 'DataSource', '$stateParams', function ($scope, $state, DataSource, $stateParams) {
    	
    $scope.logged_in = DataSource.isUserLoggedin();

    if( ($scope.logged_in === false) || (!$stateParams.courseID) ) {
    	window.location.href="#/";
    }

    //if( $scope.logged_in ) {

    	//get course details
    	DataSource.getCourseDetails( $scope.logged_in, $stateParams.courseID )
    	.then(function( data ){
    		//console.log('success data ', data);
    		$scope.course_title = data.course_title;
    		$scope.course_description = data.course_description;
    		$scope.prerequisite = data.prerequisite;
    		$scope.allvideos = data.videos;
    	})
    	.catch(function( data ){
    		console.log('cannot get course details');
    	});

    	$scope.courseID = $stateParams.courseID;

	//}

  }]);
