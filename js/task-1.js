"use strict";

function slugify(title) {
    const re = / /gi;
    const slug = title.toLowerCase().replace(re, '-');
    
    return slug;
}


console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));