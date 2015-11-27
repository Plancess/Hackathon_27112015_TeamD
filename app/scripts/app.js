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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
