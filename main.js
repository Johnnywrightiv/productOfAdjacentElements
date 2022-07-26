// Write a function that takes an array of integers, and finds the pair of adjacent elements that has the largest product and return that product.

// NOTE: I just realized my logic is flawed in the way I tried to approach this problem. Saving in repo to look back on and learn from.


// given
var arrOfInts = [9, 5, 10, 2, 24, -1, -48]
var multiplier = 0;

// find largest element of array -- some sort of SORTing (no sorting, that changes the array... instead reduce!)
function findLargestElement(arr, length) {
    var largestElement = arr.reduce(function(a,b){
        return Math.max(a, b);
    });
    return multiplier = largestElement;
};

// compare adjascent numbers to largest element to find larger of the two
function findLargestAdjascentElement(arr) {
    var indexOfLargest = arr.findIndex(element => element === multiplier);
    // console.log(indexOfLargest);
    var numberBefore = arr[indexOfLargest-1];
    var numberAfter = arr[indexOfLargest+1];
    if (numberBefore > numberAfter) {
        return numberBefore
    } else {
        return numberAfter
    };
    
    // return adjacentNumbers;
};

// multiply those two elements together and return
function getResult(a, b) {
    return multiplier * multiplicand;
};


console.log(findLargestElement(arrOfInts, (arrOfInts.length - 1)));
// console.log(arrOfInts);
largestAdjascentElement = findLargestAdjascentElement(arrOfInts);
var multiplicand = largestAdjascentElement
console.log(getResult(multiplier, multiplicand));