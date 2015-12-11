'use strict';

angular.module('touchReddit', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial',
    'touchReddit.controllers',
    'touchReddit.services'
    ])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'partials/home.html',
        controller : 'HomeCtrl'
    });
}])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('cyan');
});