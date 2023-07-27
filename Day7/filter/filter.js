var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Number Array  : ", numArr);

function above5filter(value) {
    return value > 5;
}
var filteredNumArr = numArr.filter(above5filter);
console.log("Filtered Number in Arr : ", filteredNumArr)

var ShoppingList1 = [
    "Milk", "Bornvita", "Chocolate",
    "Butter Milk", "Cake", "Pestry",
    "Red-velvet", "Black Forest", "Wip-cream"
];
console.log("Shopping list in arr : ", ShoppingList1)

var searchValue = "Milk";
function containsFilter(value) {
    return value.indexOf(searchValue) != -1;
}
var searchedShoppingList = ShoppingList1.filter(containsFilter)
console.log("Filtered Shopping in arr : ", searchedShoppingList)