'use strict';

/**
 * @ngdoc directive
 * @name angularAutoAdminLoopback.directive:pageHeader
 * @description
 * # pageHeader
 */
angular.module('angularAutoAdminLoopback')
    .directive('pageHeader', function() {
        return {
            templateUrl: 'scripts/page-header/page-header-d.html',

            restrict: 'EA',
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
