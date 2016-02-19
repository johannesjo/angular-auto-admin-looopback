'use strict';

describe('Controller: ToysEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var ToysEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //ToysEditCtrl = $controller('ToysEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
