/**
 * @ngdoc function
 * @name aaal.controller:ToysCtrl
 * @description
 * # ToysCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('ToysViewCtrl', ToysViewCtrl);

    /* @ngInject */
    function ToysViewCtrl($scope, $state, Toys) {
        var vm = this;
        var ModelService = Toys;
        vm.modelName = 'Toys';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
