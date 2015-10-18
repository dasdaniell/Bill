var billManager = {};

billManager.mainApp = angular.module('billManager', ['ngRoute', 'billManagerFactories']);

billManager.mainApp.config(['$routeProvider', function ($routeProvider) {
    'use strict';

    $routeProvider
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController'
        })
        .otherwise({
            redirectTo: '/dashboard'
        });
}]);