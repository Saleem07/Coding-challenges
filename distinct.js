// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

//     each taken only once - coming from s1 or s2.

// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => {

  //SOLUTION 1

  // let a =  [...new Set(s1+s2)]
  // return a.sort().join('')

  //SOLUTION 2

  let a = new Set(s1 + s2);
  let arr = Array.from(a);

  return arr.sort().join("");
};

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(longest(a, b)); //abcdefklmopqwxy

//removing duplicate letters from a string using sets while converting it into an array

// const removeDuplicate = ( str ) => {
//     let arr = str.split('');
//     return [...new Set(arr)]
// }

// console.log(removeDuplicate('saleem'))
