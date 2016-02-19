'use strict';

describe('Controller: AnotherModelViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var AnotherModelViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //AnotherModelViewCtrl = $controller('AnotherModelViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
