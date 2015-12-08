'use strict';

/**
 * @ngdoc overview
 * @name hackathon27112015TeamDApp
 * @description
 * # hackathon27112015TeamDApp
 *
 * Main module of the application.
 */
angular
  .module('hackathon27112015TeamDApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'restangular',
    'imageupload',
    'LocalStorageModule'
  ])
  .config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    $urlRouterProvider.otherwise("/");
    //$routeProvider
      /*.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })*/
      /*.otherwise({
        redirectTo: '/'
      });*/

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: "MainCtrl"
      })
      .state('search-result', {
        url: "/search-result",
        templateUrl: "views/tmpl/search-result.html",
        controller: "SearchCtrl"
      })
      .state('create-course', {
        url: "/create-course",
        templateUrl: "views/tmpl/create-course.html",
        controller: "CreateCourseCtrl"
      })
      .state('course-details', {
        url: "/course-details/:courseID",
        templateUrl: "views/tmpl/course-details.html",
        controller: "CourseDetailsCtrl"
      });

      RestangularProvider.setBaseUrl(APP_CONSTANTS.apiEndpoint);

  }]);
