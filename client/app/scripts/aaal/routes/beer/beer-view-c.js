/**
 * @ngdoc function
 * @name aaal.controller:BeerCtrl
 * @description
 * # BeerCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('BeerViewCtrl', BeerViewCtrl);

    /* @ngInject */
    function BeerViewCtrl($scope, $state, Beer) {
        var vm = this;
        var ModelService = Beer;
        vm.modelName = 'Beer';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
