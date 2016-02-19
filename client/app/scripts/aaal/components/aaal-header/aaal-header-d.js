/**
 * @ngdoc directive
 * @name aaal.directive:aaalHeader
 * @description
 * # aaalHeader
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .directive('aaalHeader', function() {
            return {
                templateUrl: 'scripts/aaal/components/aaal-header/aaal-header-d.html',
                restrict: 'E',
                scope: {},
                controller: function($scope, $state, $rootScope, Auth) {
                    $scope.$state = $state;
                    $scope.r = $rootScope;
                    $scope.logout = function() {
                        Auth.logout();
                    };
                }
            };
        });
})();
