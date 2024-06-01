"use strict";

function makeArray(firstArray, secondArray, maxLength) {
    const concatenatedArr = firstArray.concat(secondArray);
    let newArr = [];

    if (concatenatedArr.length >= maxLength) {
        newArr = concatenatedArr.slice(0, maxLength);
    }

    return newArr;

}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); 
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); 