'use strict';

describe('Controller: BeerListCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    var BeerListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        BeerListCtrl = $controller('BeerListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
