billManager.mainApp.controller('DashboardController', ['$scope', 'repository',
    function ($scope, repository) {
        'use strict';

        /**
         * Method that retrieve and display bill details from server
         */
        $scope.toggleBillDetails = function () {
            if (!$scope.billDetails) {
                repository.getBillDetails().then(function (billDetails) {
                    if (billDetails) {
                        $scope.billDetails = billDetails;
                        $scope.numberOfPurchasedMovies = billDetails.skyStore && billDetails.skyStore.buyAndKeep ? billDetails.skyStore.buyAndKeep.length : 0;
                    }
                }, function (error) {
                    console.log(error);
                });
            } else {
                $scope.billDetails = null;
            }
        };
    }]);