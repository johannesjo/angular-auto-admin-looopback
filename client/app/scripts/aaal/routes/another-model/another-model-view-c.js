/**
 * @ngdoc function
 * @name aaal.controller:AnotherModelCtrl
 * @description
 * # AnotherModelCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('AnotherModelViewCtrl', AnotherModelViewCtrl);

    /* @ngInject */
    function AnotherModelViewCtrl($scope, $state, AnotherModel) {
        var vm = this;
        var ModelService = AnotherModel;
        vm.modelName = 'AnotherModel';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
