'use strict';

angular.module('touchReddit', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial',
    'touchReddit.controllers'
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'partials/home.html',
        controller : 'HomeCtrl'
    });
}]);