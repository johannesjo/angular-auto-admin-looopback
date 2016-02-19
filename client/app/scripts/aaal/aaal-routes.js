/**
 * @ngdoc overview
 * @name aaal.routes
 * @description
 * # aaal.routes
 *
 * Routes module. All app states are defined here.
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .config(routerHelperProvider)
        .run(function($rootScope, $state, ngToast, $localStorage) {
            if ($localStorage.currentUser) {
                $rootScope.currentUser = $localStorage.currentUser;
            }

            // prevent private loads from loading if not logged in
            $rootScope.$on('$stateChangeStart', function(event, next, nextParams) {
                // redirect to login page if not logged in
                if (next.data && next.data.authenticate && !$rootScope.currentUser) {
                    event.preventDefault(); //prevent current page from loading
                    $state.nextAfterLogin = next;
                    $state.nextAfterLoginParams = nextParams;
                    ngToast.danger('You\'re note logged in, please proceed');
                    $state.go('login');
                }
            });
        });
    ;

    /* @ngInject */
    function routerHelperProvider($stateProvider, $urlRouterProvider) {

        var AAAL_BASE_STATE = 'private.';
        var aaalBaseWithoutDot = AAAL_BASE_STATE.substring(0, AAAL_BASE_STATE.length - 1);

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                template: '<div class="login-page"><login></login></div>'
            })
            .state(aaalBaseWithoutDot, {
                url: '/private',
                abstract: true,
                template: '<aaal-header></aaal-header><main ui-view class="container"></main>',
                data: {
                    authenticate: true
                }
            })
            .state(AAAL_BASE_STATE + 'dashboard', {
                url: '/dashboard',
                template: '<div>Hello!</div>'
            })

            .state(AAAL_BASE_STATE + 'AnotherModelList', {
                url: '/another-model/list',
                controller: 'AnotherModelListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/another-model/another-model-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'AnotherModelEdit', {
                url: '/another-model/edit/:id',
                controller: 'AnotherModelEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/another-model/another-model-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'AnotherModelView', {
                url: '/another-model/view/:id',
                controller: 'AnotherModelViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/another-model/another-model-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'BeerList', {
                url: '/beer/list',
                controller: 'BeerListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/beer/beer-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'BeerEdit', {
                url: '/beer/edit/:id',
                controller: 'BeerEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/beer/beer-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'BeerView', {
                url: '/beer/view/:id',
                controller: 'BeerViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/beer/beer-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'TestModelList', {
                url: '/test-model/list',
                controller: 'TestModelListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/test-model/test-model-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'TestModelEdit', {
                url: '/test-model/edit/:id',
                controller: 'TestModelEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/test-model/test-model-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'TestModelView', {
                url: '/test-model/view/:id',
                controller: 'TestModelViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/test-model/test-model-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'ToysList', {
                url: '/toys/list',
                controller: 'ToysListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/toys/toys-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'ToysEdit', {
                url: '/toys/edit/:id',
                controller: 'ToysEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/toys/toys-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'ToysView', {
                url: '/toys/view/:id',
                controller: 'ToysViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/toys/toys-view-c.html'
            })
            /* STATES-NEEDLE - DO NOT REMOVE THIS */;
    }
})();

