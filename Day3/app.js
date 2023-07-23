(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('Msgcontroller', Msgcontroller);

    Msgcontroller.$inject = ['$scope'];
    function Msgcontroller($scope) {
        $scope.name = "Hello Heet!";
        $scope.stateOfBeing = "img";

        $scope.sayMessage = function () {
            return "I love to do code in React js & Angular js!!";
        };

        $scope.image = function () {
            $scope.stateOfBeing = "img";
        };
    }
})();
