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
        .controller('AnotherModelListCtrl', AnotherModelListCtrl);

    /* @ngInject */
    function AnotherModelListCtrl(AnotherModel) {
        var vm = this;
        var ModelService = AnotherModel;

        function loadModel() {
            vm.rowCollection = ModelService.find();
        }

        //remove to the real data holder
        vm.removeItem = function removeItem(row) {
            var index = vm.rowCollection.indexOf(row);

            if (index !== -1) {
                vm.rowCollection.splice(index, 1);

                return ModelService.deleteById({id: row.id})
                    .$promise
                    .then(function() {
                        loadModel();
                    }, function() {
                        loadModel();
                    });
            }
        };

        // INIT
        loadModel();
    }
})();
