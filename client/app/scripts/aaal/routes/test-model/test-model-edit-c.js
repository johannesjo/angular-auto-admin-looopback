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
        .controller('TestModelEditCtrl', TestModelEditCtrl);

    /* @ngInject */
    function TestModelEditCtrl($state, ngToast, aaalToSchemaForm, TestModel) {
        var vm = this;
        var ModelService = TestModel;
        vm.modelName = 'TestModel';

        //form and schema definition
        vm.schema = aaalToSchemaForm('TestModel');
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
            $state.go('private.TestModelList');
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
