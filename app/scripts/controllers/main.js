'use strict';

/**
 * @ngdoc function
 * @name hackathon27112015TeamDApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackathon27112015TeamDApp
 */
angular.module('hackathon27112015TeamDApp')
  .controller('MainCtrl', ['$scope', '$state', 'DataSource', function ($scope, $state, DataSource) {
    	
    $scope.logged_in = DataSource.isUserLoggedin();

    if( $scope.logged_in ) {
    	$scope.most_popular = [];
    	var userID = $scope.logged_in;

    	//most popular data
	    DataSource.getmostPopular( userID )
		.then(function(res){
			for(var i=0; i<res[0].most_popular.length; i++) {
				var tags_name = [];
				for(var j=0; j<res[0].most_popular[i].course_tags.length; j++) {
					tags_name.push( res[0].most_popular[i].course_tags[j].name ); 
				}
				res[0].most_popular[i].tags = tags_name.join(', ');
				$scope.most_popular.push( res[0].most_popular[i] );
			}
		})
		.catch(function(){
			console.log('Failed to get most popular data');
		});
	}

  }]);
