'use strict';

angular.module('touchReddit.controllers', [])
.controller('HomeCtrl', ['$scope', 'apiWrapper', function ($scope, apiWrapper) {

    // holds the data from the reddit api
    $scope.apiData;
    apiWrapper.get().then(function (response) {
        $scope.apiData = response;
    });
}]);