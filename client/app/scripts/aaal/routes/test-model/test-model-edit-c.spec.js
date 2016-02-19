'use strict';

describe('Controller: TestModelEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var TestModelEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //TestModelEditCtrl = $controller('TestModelEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
