'use strict';

describe('Controller: BeerEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var BeerEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //BeerEditCtrl = $controller('BeerEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
