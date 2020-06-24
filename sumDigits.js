// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// EXAMPLE

// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5

const sumDigits = (number) =>(Math.abs(number).toString().split('').reduce((a,b)=>a + +b,0))
let value = sumDigits(-32);
console.log(value);


//So basically what will happen in this function is : 
// -> Getting absolute value of the number 
// -> converting it into a string 
// -> converting it into an array 
// -> reducing it into a single value
// -> The unary plus (+) operator is the fastest (and preferred) method of converting something into a number.(+b)





// let a = 0
// let b  = '5'
// // console.log(a+b)
// console.log(a + +b)