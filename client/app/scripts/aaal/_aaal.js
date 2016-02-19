/**
 * @ngdoc overview
 * @name aaal
 * @description
 * # aaal
 *
 * Main module of the application.
 */

(function() {
    'use strict';

    angular
        .module('aaal', [
            'ngToast',
            'schemaForm',
            'ui.router',
            'smart-table',
            'lbServices',
            'ngStorage',
            'ui.tinymce']);
})();
