'use strict';

/**
 * @ngdoc function
 * @name hackathon27112015TeamDApp.controller:CreateCourseCtrl
 * @description
 * # CreateCourseCtrl
 * Controller of the hackathon27112015TeamDApp
 */
angular.module('hackathon27112015TeamDApp')
  .controller('CreateCourseCtrl', ['$scope', '$state', 'DataSource', '$cookies', function ($scope, $state, DataSource, $cookies) {

  	if( DataSource.isUserLoggedin() === false ) {
  		window.location.href="#/";
  	}

  	$scope.fields = 1;
  	$scope.getNumber = function(num) {
  		return new Array(num);
  	};
  	$scope.AddUrlField = function(fieldNo) {
  		$scope.fields = fieldNo + 1;
    };
    $scope.DeleteUrlField = function(index) {
    	$scope.fields -= 1;
    }

    //create course
    $scope.createCourse = function(course) {
    	if( course ) {
    		var course_tags_list = course.tags.split(','),
    			videos_url_list = [];    		

    		/*var formData = new FormData();
            formData.append('image', image, image.name);*/

            for(var i in course.url.text) {
            	videos_url_list.push( course.url.text[i] );
            }

    		var courseData = {
        			course_tags : course_tags_list,
        			videos : videos_url_list,
                    title : course.title,
                    description : course.description,
                    prerequisite : course.prerequisite
        		};

        	DataSource.createCourse( courseData )
        	.then(function(){
        		window.location.href="#/";
        	})
        	.catch(function(){
        		console.log('course creation failed');
        	});
    	}    	
    }

  }]);
