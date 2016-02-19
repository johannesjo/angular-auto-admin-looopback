'use strict';

describe('Controller: AnotherModelEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var AnotherModelEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //AnotherModelEditCtrl = $controller('AnotherModelEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
