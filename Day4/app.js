(function () {
    'use-strict';

    angular.module("filter-app", [])
        .controller('filterMethod', filterMethod);

    filterMethod.$inject = ['$scope', '$filter'];

    function filterMethod($scope, $filter) {
        $scope.name = "Heet";
        $scope.stateOfBeing = "Doshi";
        $scope.cokkie = .45;

        $scope.Message = function () {
            var msg = "I love to do code in angular & react js!!";
            var output = $filter('uppercase')(msg)
            return output;
        };
    }
})();