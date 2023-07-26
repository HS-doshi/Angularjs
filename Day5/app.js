(function () {
    'use-strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController)

    CounterController.$inject = ['$scope'];

    function CounterController($scope) {

        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.name = "Heet";

        $scope.showNoOfWatchers = function () {
            console.log("# of watchers : ", $scope.$$watchersCount)
        }
        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        }
        $scope.upCounter = function () {
            $scope.counter += 2;
        }
        $scope.$watch(function () {
            console.log("Digest loop Fired!")
        })

        // $scope.$watch('onceCounter', function (newValue, oldValue) {
        //     console.log("OnceCounter Value  : ", oldValue);
        //     console.log("OnceCounter Value  : ", newValue);
        // })

        // $scope.$watch('counter', function (newValue, oldValue) {
        //     console.log("Old Value : ", oldValue);
        //     console.log("New Value : ", newValue);
        // })
    }
})();