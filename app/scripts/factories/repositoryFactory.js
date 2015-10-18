// factory service for http calls
/*jslint newcap: true, browser: true, devel: true, nomen: true */
/*global servicesModule,jQuery, _ */

factoriesModule.factory('repository', ['$http', '$q', function ($http, $q) {
    'use strict';

    var repository = {},
        request;

    /**
     *  Method used for server calls
     * @param url - The url address where the request will be made
     * @param method - The method used for request: GET, POST, HEAD, PUT, DELETE
     * @param params - The params that will be send to server
     * @param data - The data that will be send to server
     * @param responseType - response type
     * @returns {Function|promise}
     */
    request = function (url, method, params, data, responseType) {
        var deferred = $q.defer(),
            contentType;
        if (!responseType) {
            responseType = "json";
            contentType = "application/json";
        } else {
            contentType = "text/plain";
        }

        $http({
            method: method,
            url: url,
            responseType: responseType,
            contentType: contentType,
            params: params || '',
            data: data || ''
        }).success(function (response) {
            deferred.resolve(response);
        }).error(function (error) {
            console.log(error);
        });
        return deferred.promise;
    };


    repository.getBillDetails = function () {
        var url = 'https://still-scrubland-9880.herokuapp.com/bill.json';

        return request(url, 'GET');
    };


    return repository;
}]);