'use strict';

describe('Directive: pageHeader', function() {

    // load the directive's module
    beforeEach(module('angularAutoAdminLoopback'));

    var element,
        scope;

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should do something', inject(function($compile) {
        element = $compile('<page-header></page-header>');
        expect(true).toBe(true);
    }));
});
