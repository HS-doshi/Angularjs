(function () {
    'use-strict';

    var ShoppingList1 = [
        "Milk", "Bornvita", "Chocolate",
        "Butter Milk", "Cake", "Pestry",
        "Red-velvet", "Balck Forest", "Wip-cream"
    ];

    var ShoppingList2 = [
        {
            name: "Milk",
            quantity: "2"
        },
        {
            name: "Bornvita",
            quantity: "3"
        },
        {
            name: "Chocalate",
            quantity: "20"
        },
        {
            name: "butter Milk",
            quantity: "4"
        },
        {
            name: "Cake",
            quantity: "500"
        },
        {
            name: "Pestry",
            quantity: "8"
        },
        {
            name: "Red velvet",
            quantity: "250"
        },
        {
            name: "Black Forest",
            quantity: "200"
        },
        {
            name: "Wip-cream",
            quantity: "6"
        },
    ];

    angular.module('ShoppingList', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
        $scope.ShoppingList1 = ShoppingList1;
        $scope.ShoppingList2 = ShoppingList2;

        $scope.addToList = function () {
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };
            $scope.ShoppingList2.push(newItem)
        }
    }
})();