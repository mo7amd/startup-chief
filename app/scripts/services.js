'use strict';

angular.module('IndexOfApp')

.constant('baseURL','http://localhost:3000/')

.service('IndexFactory', ['$resource', 'baseURL',
  function($resource,baseURL) {
    this.getHellow = function() {
      return $resource(baseURL + 'hellow/', null, {
          'update': {
              method: 'PUT'
          }
      });
    };
  }
])


;
