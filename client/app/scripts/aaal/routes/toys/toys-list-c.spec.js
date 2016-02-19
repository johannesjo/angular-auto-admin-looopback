'use strict';

describe('Controller: ToysListCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    var ToysListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ToysListCtrl = $controller('ToysListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
