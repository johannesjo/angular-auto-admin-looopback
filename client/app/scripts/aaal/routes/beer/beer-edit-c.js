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
        .controller('BeerEditCtrl', BeerEditCtrl);

    /* @ngInject */
    function BeerEditCtrl($state, ngToast, aaalToSchemaForm, Beer) {
        var vm = this;
        var ModelService = Beer;
        vm.modelName = 'Beer';

        //form and schema definition
        vm.schema = aaalToSchemaForm('Beer');
        vm.form = [
            '*',
            {
                type: 'submit',
                title: 'Save'
            }
        ];

        // load or create new instance
        if ($state.params.id) {
            ModelService.findById({id: $state.params.id})
                .$promise
                .then(function(model) {
                    vm.model = model;
                }, function() {
                    ngToast.danger('Could not load model #' + $state.params.id);
                    $state.go('private.TestModelList');
                });
        } else {
            vm.model = {};
        }


        function postSave() {
            ngToast.create('Saved');
            $state.go('private.BeerList');
        }

        vm.createOrUpdate = function() {
            // update
            if (vm.model.id) {
                var modelInstance = new ModelService(vm.model);
                vm.submitPromise = modelInstance.$save()
                    .then(postSave);
            }
            // create
            else {
                vm.submitPromise = ModelService.create(vm.model)
                    .$promise
                    .then(postSave);
            }
        };
    }
})();
