const assert = require('assert')

/**
 * Complete the implementation below such that all elements of the array
 * that are not multiples of 7 are removed.
 * HINT: You may need to use the typeof operator
 */

// TODO
const multOf7 = el => {
    if (typeof(el) === "number"){
        return !(el%7)
    }
    else{
        return false
    }
};

// TODO
Array.prototype.filter = function(fun) {
    const arr = []
    this.forEach(n => fun(n)? arr.push(n): null)
    return arr
};

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];
const solution = [7, 14, 70, 35, 77];

//console.log(arr.filter(multOf7))
assert(arr.filter(multOf7).every((v, i) => v === solution[i]))
