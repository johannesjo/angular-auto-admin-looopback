'use strict';

describe('Controller: TestModelViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var TestModelViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //TestModelViewCtrl = $controller('TestModelViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
