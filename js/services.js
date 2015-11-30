'use strict';

angular.module('touchReddit.services', [])
/*
        wrapper to fetch the reddit json data
        returns an promise which returns an object with : {
            error : null,
            data : ...
        }
        data is the json data returned by the reddit api
        data will be null if there was an error
        error will be null if there was no error
        if there was an error, error will have a message property detailing the error
     */
.factory('apiWrapper', ['$http', function ($http) {

    var service = {

        get : function () {

            var promise = $http({
                method : 'GET',
                url : 'https://www.reddit.com/.json'
            }).then(function successCallback (response) {

                var out = {
                    error : null,
                    data : response.data
                };

                return out;
            }, function errorCallback (response) {
                var out = {
                    error : {
                        message : 'Error getting data from reddit.com'
                    },
                    data : null
                };
                return out
            });

            return promise;
        }
    };

    return service;
}]);