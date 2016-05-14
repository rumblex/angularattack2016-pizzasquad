'use strict';

/**
 * @ngdoc overview
 * @name geeGeeApp
 * @description
 * # geeGeeApp
 *
 * Main module of the application.
 */
angular
    .module('geeGeeApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/level/:mapName', {
                templateUrl: 'views/level.html',
                controller: 'LevelCtrl',
                controllerAs: 'level'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
