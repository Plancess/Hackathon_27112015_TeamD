'use strict';

/*
	Datasource Factory
*/
angular.module('hackathon27112015TeamDApp')
  .factory('DataSource', ['$http', '$cookies', function ($http, $cookies) {
    	return {
    		searchData: function() {
	        	return $http.get('');
	      	},
	      	signupData : function(data) {
	      		$http.post('http://192.168.0.94:8000/users/', data);
	      		
	      	},
	      	loginData : function(data) {
	      		$cookies.put('user_email', data.loginemail);
	      		$cookies.put('user_password', data.loginPass);	      		
	      	}
    	}
  }]);
