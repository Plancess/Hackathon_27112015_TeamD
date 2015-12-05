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
	      		/*$http.post('http://192.168.0.94:8000/users/', data)
	      		.then(function(res) {
	      			//return 'signup success';
	      			console.log('signup success' , res)
	      		})
	      		.catch(function(res) {
	      			console.log('signup failed', res);
	      		});*/
	      	},
	      	loginData : function(data) {

	      		$http({
					method: 'POST',
					url: APP_CONSTANTS.apiEndpoint + '/auth/token/',
					data: data,
					headers: {'Content-Type': 'application/json'}
					})
	      		.success(function() {
	      			console.log('login success');
				})
				.error(function() {
					console.log('login failed');
				});

	      		/*$cookies.put('user_email', data.loginemail);
	      		$cookies.put('user_password', data.loginPass);	  */    	

	      		/*var req = {
				 	method: 'POST',
				 	url: APP_CONSTANTS.apiEndpoint + '/auth/token/',
				 	data: {client_id: "y3jJVGzLMbkNQlbgvIR7gkdV3ZUG5yyHMwn7PJJr",
client_secret: "vg8TdSyUCaONUtAgTRBR0c41jDAiYaeDB3ssKLAUyAHXZAHHBpgz4tEHL4TgDoh99hReOhb1bnP5UArCRlx8ItN0ywaMNWKY6DpxGWVDZO8Aa9N9VAvgaQBeS7IKhem1",
grant_type: "password",
password: "rick@123",
username: "rick.r@plancess.com"}
				};

				$http(req).then(function(){
					console.log('login success');
				}, 
				function(){
					console.log('login failed');
				});*/

				//var data = JSON.parse( data );

				//console.log( 'post data ::', data ); //\\	

	      		//$http.post(APP_CONSTANTS.apiEndpoint + '/auth/token/', data)
	      		//.then(function(res, status) {
	      			//return 'signup success';
	      			//console.log('login success' , res)
	      			/*var cookieData = {
			          'access_token': res.access_token,
			          'refresh_token': res.refresh_token,
			          'token_type': res.token_type
			        };
			        $http.get(APP_CONSTANTS.apiEndpoint + '/users/details/', {
			        	headers: {'Authorization': cookieData.token_type + " " + cookieData.access_token}			        	
			        })
			        .then(function(response) {
			        	cookieData.user_id = response.user_id;
            			cookieData.email = response.email;
            			//$cookies.put('myFavorite', 'oatmeal');
			        })
			        .catch(function(response) {
			        	console.log('User getting information failed', response);
			        })*/
	      		/*})
	      		.catch(function(res) {
	      			console.log('login failed', res);
	      		});*/

	      	}
    	}
  }]);
