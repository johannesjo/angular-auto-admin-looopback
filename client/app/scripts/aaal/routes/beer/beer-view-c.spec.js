'use strict';

describe('Controller: BeerViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var BeerViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //BeerViewCtrl = $controller('BeerViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
