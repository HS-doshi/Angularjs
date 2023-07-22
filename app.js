(function () {
    'use strict';  // it's help us for out mistake if occur.
    // var x = "hello";
    // angular.module("myapp", [])
    //     .controller('Myfirstcontroller', function ($scope) {
    //         $scope.name = "Heet";
    //         $scope.sayHello = function () {
    //             return "Hello best logical developer!"
    //         }
    //     });


    angular.module('Calculator', [])
        .controller('namecalculator', function ($scope) {
            $scope.name = "";
            $scope.totalValue = 0;

            $scope.displayNumeric = function () {
                var totalNamevalue = CalculateNumericForString($scope.name); //get the total value.
                $scope.totalValue = totalNamevalue;
            };

            function CalculateNumericForString(string) {
                var totalstringvalue = 0;
                for (var i = 0; i < string.length; i++) {
                    totalstringvalue += string.charCodeAt(i);
                }
                return totalstringvalue;
            }
        });
})();
