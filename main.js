// Write a function that takes an array of integers, and finds the pair of adjacent elements that has the largest product and return that product.


// given
var numbers = [1, 3, 5, 8];
var products = [];


for (let i = 0; i < numbers.length; i++) {
    var currentNum = numbers[i];
    var nextNum = numbers[i + 1];
    var product = currentNum * nextNum;

    if (product) {
        products.push(product);
    }
    
}
var largestProduct = Math.max(...products);

console.log(largestProduct);