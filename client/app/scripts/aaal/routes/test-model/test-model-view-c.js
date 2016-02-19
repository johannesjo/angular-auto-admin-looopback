/**
 * @ngdoc function
 * @name aaal.controller:TestModelCtrl
 * @description
 * # TestModelCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('TestModelViewCtrl', TestModelViewCtrl);

    /* @ngInject */
    function TestModelViewCtrl($scope, $state, TestModel) {
        var vm = this;
        var ModelService = TestModel;
        vm.modelName = 'TestModel';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
