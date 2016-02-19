/**
 * @ngdoc directive
 * @name aaal.directive:login
 * @description
 * # login
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .directive('login', function() {
            return {
                templateUrl: 'scripts/aaal/components/auth/login/login-d.html',
                restrict: 'E',
                scope: {},
                controller: function($scope, Auth) {
                    $scope.login = function() {
                        return Auth.login($scope.user.email, $scope.user.password);
                    };
                }
            };
        });
})();
