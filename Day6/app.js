(function () {
    'use-strict';

    angular.module('Digest-app', [])
        .controller('CounterController', CounterController)

    CounterController.$inject = ['$scope', '$timeout']

    function CounterController($scope, $timeout) {
        $scope.counter = 0;

        $scope.upCounter = function () {
            $timeout(function () {
                $scope.counter++;
                console.log("Counter Incremented!");
            }, 2000)
        }

        // $scope.upCounter = function () {
        //     setTimeout(function () {
        //         $scope.$apply(function () {
        //             $scope.counter++;
        //             console.log("Counter Implemented!");
        //         });
        //     }, [2000])
        // }

        // $scope.upCounter = function () {
        //     setTimeout(function () {
        //         $scope.counter++;
        //         console.log("Counter Implemented!");
        //         $scope.$digest();
        //     }, [2000])
        // }
    }
})()