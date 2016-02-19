/**
 * @ngdoc overview
 * @name aaal
 * @description
 * # aaal
 *
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .constant('aaalNavListConstant',
            [
                //
        {
            name: 'AnotherModel',
            stateName: 'private.AnotherModelList'
        },
        {
            name: 'Beer',
            stateName: 'private.BeerList'
        },
        {
            name: 'TestModel',
            stateName: 'private.TestModelList'
        },
        {
            name: 'Toys',
            stateName: 'private.ToysList'
        }
            ]);
})();
