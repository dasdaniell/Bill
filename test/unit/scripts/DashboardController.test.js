describe('Unit: Testing DashboardController.js', function () {
    var mockRepository,
        deferred,
        scope,
        $q,
        $controller,
        $rootScope;

    beforeEach(module('chromePlusApp'));

    beforeEach(inject(function ($injector) {

        $q = $injector.get('$q');
        deferred = $q.defer();
        $controller = $injector.get('$controller');
        $rootScope = $injector.get('$rootScope');

        mockRepository = {
            getBillDetails: jasmine.createSpy('getBillDetails').and.returnValue(deferred.promise)
        };

        scope = $rootScope.$new();

        $controller('DashboardController', { $scope: scope, repository: mockRepository});
    }));

    it('should get bill data from server and display it in the ui', function () {
        var billData = {test: []};

        deferred.resolve(billData);
        mockRepository.getBillDetails.and.returnValue(deferred.promise);
        scope.toggleBillDetails();
        scope.$digest();
        expect(scope.billDetails).toEqual(billData);
    });

    it('should get bill data from server and count purchased movies value', function () {
        var billData = {
            skyStore: {
                buyAndKeep: [1, 2, 3]
            }
        };

        deferred.resolve(billData);
        mockRepository.getBillDetails.and.returnValue(deferred.promise);
        scope.toggleBillDetails();
        scope.$digest();
        expect(scope.billDetails).toEqual(billData);
        expect(scope.numberOfPurchasedMovies).toEqual(3);
    });

    it('should try to get bill data from server and receive error', function () {
        var billData = {test: []};

        deferred.reject('error');
        mockRepository.getBillDetails.and.returnValue(deferred.promise);
        scope.toggleBillDetails();
        scope.$digest();
        expect(scope.billDetails).toEqual(null);
    });
});