'use strict';

/*
	Datasource Factory
*/
angular.module('hackathon27112015TeamDApp')
  .factory('DataSource', ['$http', '$cookies', '$location', 'Restangular', function ($http, $cookies, $location, Restangular) {
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

	      		/*$http({
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
				});*/



				$.ajax({
			      type: "POST",
			      url: APP_CONSTANTS.apiEndpoint + '/auth/token/',
			      data: data,
			      success: function(data) {
			      	console.log('login success :: ', data);
			        var cookieData = {
			          'access_token': data.access_token,
			          'refresh_token': data.refresh_token,
			          'token_type': data.token_type,
			          'login_time' : new Date()
			        };
			        $.ajax({
			          type: "GET",
			          url: APP_CONSTANTS.apiEndpoint + "/users/details/",
			          headers: {
			            'Authorization': cookieData.token_type + " " + cookieData.access_token
			          },
			          contentType: 'application/json',
			          success: function(data) {
			            cookieData.user_id = data.user_id;
			            cookieData.email = data.email;
			            $cookies.put('user_id', data.user_id);
			            $cookies.put('user_email', data.email);
			        	$cookies.put('cookieData', cookieData);
			        	location.reload();
			          },
			          error: function(xhr, status, error) {
			            console.log('Error with status code', error);
			          }
			        });
			      },
			      error: function(xhr, status, error) {
			        console.log('Error with status code', xhr.status);
			        if (xhr.status === 401) {
			          $("#loginError").text("Your username and password did not match. Please try again");
			        }
			      }
			    });
	      	},

	      	isUserLoggedin : function() {
	      		var logged_in_useremail = $cookies.get('user_email'),
        			logged_in_userid = $cookies.get('user_id'),
        			cookieData = $cookies.get('cookieData');;
	      		if( logged_in_useremail && logged_in_userid && cookieData ) {
	      			return logged_in_userid;
	      		} else {
	      			return false;
	      		}
	      	},

	      	createCourse : function(data) {
				var userid = $cookies.get('user_id');

				// This will do ONE get to /accounts/123/buildings/456/spaces/789
				//Restangular.one("accounts", 123).one("buildings", 456).one("spaces", 789).get()

				// POST /accounts/123/buildings/456/spaces
				//Restangular.one("accounts", 123).one("buildings", 456).all("spaces").post({name: "New Space"});

				return Restangular.one("users", userid).all("courses/").post(data);
	      	},

	      	getmostPopular : function(userid) {
	      		return Restangular.one('users', userid).all("courses?course_type=home").get({'format':'json'},{}); 
	      	},

	      	getCourseDetails : function(userid, courseID) {
	      		return Restangular.one('users', userid).one('courses', courseID).get({'format':'json'},{});
	      	}

    	}
  }]);
