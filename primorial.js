/*
*Definition (Primorial Of a Number)

Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.
Task

* Given a number N , calculate its primorial. 
* numPrimorial (5) ==> return (2310)
* numPrimorial (3) ==> return (30)

*/
function numPrimorial(n) {
  const primorialList = [];
  let t = 2; // 2 is the first prime number
  while (primorialList.length < n) {
    if (isPrime(t)) primorialList.push(t);
    t++;
  }
  return primorialList.reduce((acc, cur) => acc * cur, 1);
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let result = numPrimorial(3);
console.log(result);
