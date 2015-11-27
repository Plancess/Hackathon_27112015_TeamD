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
    	}
  });
