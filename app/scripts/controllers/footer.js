'use strict';

/**
 * @ngdoc function
 * @name hackathon27112015TeamDApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the hackathon27112015TeamDApp
 */
angular.module('hackathon27112015TeamDApp')
  .controller('FooterCtrl', ['$scope', '$state', 'DataSource', '$location', '$timeout', function ($scope, $state, DataSource, $location, $timeout) {
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
	    	var datas = DataSource.signupData( data );
    		console.log('datas ', datas);
    	}
    	
    	
    }

    //login data
    $scope.loginData = function(loginemail, loginPass) {
    	if(loginemail && loginPass) {
    		var data = {
    			username : loginemail,
    			password : loginPass,
                grant_type: "password",
                client_id: APP_CONSTANTS.client_id,
                client_secret: APP_CONSTANTS.client_secret
    		};
    		DataSource.loginData( data, {contentType: 'application/json'} );

    		$location.path();


            //console.log('APP_CONSTANTS == ', APP_CONSTANTS);




    		//$state.go('main', {url: '/'});
/*

    		$timeout(function () {
			    $location.path('/');
			});*/
    	}
    }

    /*function init() {
    	$location.path();
    }
*/
  }]);