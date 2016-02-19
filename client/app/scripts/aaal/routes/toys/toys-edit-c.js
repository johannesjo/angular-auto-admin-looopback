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
        .controller('ToysEditCtrl', ToysEditCtrl);

    /* @ngInject */
    function ToysEditCtrl($state, ngToast, aaalToSchemaForm, Toys) {
        var vm = this;
        var ModelService = Toys;
        vm.modelName = 'Toys';

        //form and schema definition
        vm.schema = aaalToSchemaForm('Toys');
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
            $state.go('private.ToysList');
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
