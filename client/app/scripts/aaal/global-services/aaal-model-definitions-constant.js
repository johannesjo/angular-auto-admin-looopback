/**
 * @ngdoc constant
 * @name aaal.aaalModelDefinitions
 * @description
 * # aaalModelDefinitions
 * Constant in the aaal.
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .constant('aaalModelDefinitions', {
            'AnotherModel': {
                'name': 'AnotherModel',
                'properties': {
                    'title': {
                        'type': 'string',
                        'required': true
                    },
                    'description': {
                        'type': 'string',
                        'format': 'html',
                        'required': true
                    },
                    'amount': {
                        'type': 'number'
                    }
                },
                'validations': [
                ],
                'relations': {
                },
                'acls': [
                ],
                'mixins': [
                ]
            },
            'Beer': {
                'name': 'Beer',
                'properties': {
                    'title': {
                        'type': 'string',
                        'required': true
                    },
                    'ingredients': {
                        'type': [
                            'string'
                        ],
                        'required': true
                    },
                    'anything': {
                        'type': 'any'
                    },
                    'number': {
                        'type': 'number'
                    },
                    'date': {
                        'type': 'date'
                    }
                },
                'validations': [
                ],
                'relations': {
                },
                'acls': [
                ],
                'mixins': [
                ]
            },
            'TestModel': {
                'name': 'TestModel',
                'properties': {
                    'name': {
                        'type': 'string',
                        'showInOverview': true
                    },
                    'description': {
                        'type': 'string',
                        'format': 'html'
                    },
                    'someDate': {
                        'type': 'date',
                        'showInOverview': true
                    },
                    'somethingRequired': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                },
                'acls': [
                ],
                'mixins': [
                ]
            },
            'Toys': {
                'name': 'Toys',
                'properties': {
                    'title': {
                        'type': 'string',
                        'required': true
                    },
                    'parts': {
                        'type': [
                            'object'
                        ],
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                },
                'acls': [
                ],
                'mixins': [
                ]
            }
        });
})();
