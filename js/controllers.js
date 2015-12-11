'use strict';

angular.module('touchReddit.controllers', [])
.controller('HomeCtrl', ['$scope', 'apiWrapper', '$window', function ($scope, apiWrapper, $window) {

    // holds the data from the reddit api
    $scope.apiData;
    apiWrapper.get().then(function (response) {
        $scope.apiData = response;
    });

    // change the url to a new url outside of app - for making a md-card a link
    $scope.changeUrl = function (url) {
        $window.location = url;
    };

}]);