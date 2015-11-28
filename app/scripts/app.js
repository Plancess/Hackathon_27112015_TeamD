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
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
      });

  }]);
