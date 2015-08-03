'use strict';

/**
 * @ngdoc overview
 * @name cheviotConsultingcoukApp
 * @description
 * # cheviotConsultingcoukApp
 *
 * Main module of the application.
 */
angular
  .module('cheviotConsultingcoukApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl'
      })
      .when('/info/cloud', {
        templateUrl: 'views/info-cloud.html',
        controller: 'AboutCtrl'
      })
      .when('/info/web', {
        templateUrl: 'views/info-web.html',
        controller: 'AboutCtrl'
      })
      .when('/info/software', {
        templateUrl: 'views/info-software.html',
        controller: 'AboutCtrl'
      })
      .when('/info/mobile', {
        templateUrl: 'views/info-mobile.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
