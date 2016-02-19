'use strict';

describe('Controller: AnotherModelListCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    var AnotherModelListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        AnotherModelListCtrl = $controller('AnotherModelListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
