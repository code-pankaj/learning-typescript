function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// it is better than any as it logs the details 
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("3");
// we can write anything here T,H,anything but all three must be same
function identityFour(val) {
    return val;
}
function getSearchProducts(products) {
    return products[3];
}
// arrow function using generics
var getMoreProducts = function (products) {
    return products[2];
};
// here i used a comma after T it just a syntax people use to represent that it is a generic not a component of react
var getMoreInfoProducts = function (products) {
    return products[2];
};
function anotherFuntion(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
