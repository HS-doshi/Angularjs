(function () {
    'use-strict';

    angular.module("filter-app", [])
        .controller('MsgController', MsgController)
        .filter('loves', LovesFilter)
        .filter('truth', TruthFilter);

    MsgController.$inject = ['$scope', 'lovesFilter'];

    function MsgController($scope, lovesFilter) {

        $scope.stateOfBeing = "Heet";
        $scope.Message = function () {
            var msg = "I likes to do code in angular & react js!!";
            return msg;
        };
        $scope.sayLovesMsg = function () {
            var msg = "I likes to do code in angular & javascript!";
            msg = lovesFilter(msg);
            return msg;
        }
    }

    function LovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        }
    }

    function TruthFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }
})();