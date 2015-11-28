'use strict';

/*
	Datasource Factory
*/
angular.module('hackathon27112015TeamDApp')
  .factory('DataSource', function ($http) {
    	return {
    		searchData: function() {
	        	return $http.get('');
	      	},
	      	signupData : function(data) {
	      		$http.post('https://api.github.com/users/peterbe/gists', data)
	      		.then(function(response) {
	      			//return 'signup success';
	      			console.log('signup success' , response)
	      		})
	      		.catch(function(reponse) {
	      			console.log('signup failed', response);
	      		});
	      	}
    	}
  });
