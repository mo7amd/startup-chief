'use strict';

angular.module('IndexOfApp')

.controller('IndexController', ['$scope', 'IndexFactory',
  function($scope, IndexFactory) {

    $scope.showHellow      = false;
    $scope.message       = 'Loading ...';
    // ******************fetch dishes data from server**************************
    $scope.hellow = IndexFactory.getHellow().query(
      function(response) {
        $scope.Hellow   = response;
        $scope.showHellow = true;
      },
      function(response) {
        $scope.message = 'Error:'  + response.status + ' ' + response.statusText;
      }
    );
  }
])
;
