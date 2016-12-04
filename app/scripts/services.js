'use strict';

angular.module('IndexOfApp')

.constant('baseURL', 'https://mo7amd-startup-chief-v1.p.mashape.com/')

.service('IndexFactory', ['$resource', 'baseURL',
        function($resource, baseURL) {
            this.getHellow = function() {
                return $resource(baseURL + 'hellow/', null, {
                    'update': {
                        method: 'PUT'
                    }
                });
            };
        }
    ])
    .service('feedbackFactory', ['$resource', 'baseURL',
        function($resource, baseURL) {
            this.savefeedback = function() {
                return $resource(baseURL + 'contact/', null);
            };
        }
    ])

.service('subscribeFactory', ['$resource', 'baseURL',
    function($resource, baseURL) {
        this.saveSubscribe = function() {
            return $resource(baseURL + 'subscribe/', null);
        };
    }
])

;