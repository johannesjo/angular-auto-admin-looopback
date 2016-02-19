'use strict';

describe('Controller: ToysViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var ToysViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //ToysViewCtrl = $controller('ToysViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
