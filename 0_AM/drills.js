const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
    return str.split(" ")
};

// TODO - write a function which reverses the string
const reverse = str => {
    return str.split("").reverse().join("")
};

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => {
    return Array.from(new Set(arr))
};

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
    if (num === 0){
        return 1
    } 
    return factorial(num-1) * num
};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if (arr1.length != arr2.length){
        return -1
    }
    let farr = []
    for (i = 0; i < arr1.length; i++){
        farr.push([arr1[i], arr2[i]])
    }
    return farr
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
let arr1 = []
let arr2 = []
for (i = 0; i < arr.length; i++){
    arr1.push(arr[i][0])
    arr2.push(arr[i][1])
}
return [arr1, arr2]
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    return str.substring(num-1).concat(str.substring(0, num-1)) 
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

    const date = new Date()

    var converter = require('number-to-words');
    let ampm = ""

    if (date.getHours() > 18){
        ampm = " in the evening."
    }else if (date.getHours() >= 12){
        ampm = " in the afternoon."
    }else{
        ampm = " in the morning."
    }

    let hour = date.getHours()
    if (hour > 12) {
        hour = hour-12
    }

    return "Today's date is " + monthNames[date.getMonth()] + ' ' + converter.toOrdinal(date.getDate()) +", " + date.getFullYear().toString(10) + ". It is " + converter.toWords(hour) + " " + converter.toWords(date.getMinutes()) + ampm
};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);

console.log(tokenize("HI My name is Lucy"))
console.log(reverse("Hello ayayay"))
console.log(uniqueOnes([1,1,1, 2,1, 3]))
console.log(factorial(5))
console.log(zip([1,2,3,4], [5,6,7,8]))
console.log(zip([1], [1,2]))
console.log(unzip([[ 1, 5 ], [ 2, 6 ], [ 3, 7 ], [ 4, 8 ]]))
console.log(shiftRight("Hello", 3))
console.log(announceDate())