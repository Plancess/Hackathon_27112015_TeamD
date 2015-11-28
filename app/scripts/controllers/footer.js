'use strict';

/**
 * @ngdoc function
 * @name hackathon27112015TeamDApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the hackathon27112015TeamDApp
 */
angular.module('hackathon27112015TeamDApp')
  .controller('FooterCtrl', ['$scope', '$state', 'DataSource', function ($scope, $state, DataSource) {
    //signup data
    $scope.submitsignupData = function(fname, lname, email, pass) {
    	//console.log('signup firstname :: ', fname, lname, email, pass);

    	if( email ) {
    		var data = {
	    		fname : fname,
	    		lname : lname,
	    		email : email,
	    		pass : pass
	    	};
	    	// var datas = DataSource.signupData( data );
    		// console.log('datas ', datas);
    	}
    	
    	
    }
  }]);