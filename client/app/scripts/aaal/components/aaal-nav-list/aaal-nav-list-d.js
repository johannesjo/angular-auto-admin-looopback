/**
 * @ngdoc directive
 * @name aaal.directive:aaalNavList
 * @description
 * # aaalNavList
 */
(function() {
    'use strict';

    angular
        .module('aaal')
        .directive('aaalNavList', function() {
            return {
                templateUrl: 'scripts/aaal/components/aaal-nav-list/aaal-nav-list-d.html',
                restrict: 'E',
                scope: {},
                controller: function($scope, aaalNavListConstant) {
                    $scope.aaalNavList = aaalNavListConstant;
                }
            };
        });
})();
