(function () {

    'use strict';
    angular.module('DIapp', [])
        .controller('DIcontroller', DIcontroller);

    DIcontroller.$inject = ['$scope', '$filter'];
    function DIcontroller($scope, $filter) {
        $scope.name = "Heet's best logical developer";

        $scope.upper = function () {
            var upCasae = $filter('uppercase');
            $scope.name = upCasae($scope.name);
        };
        //console.log($injector.annotate(DIcontroller));
    };
})(); 