'use strict';

describe('Controller: TestModelListCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    var TestModelListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        TestModelListCtrl = $controller('TestModelListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
