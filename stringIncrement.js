//* Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// function incrementString(string) {
//   let splitted = string.split("");

//   const regex = /^[a-z]+$/gi;
//   const numReg = /([1-9]+)$/g;

//   if (regex.test(string)) {
//     return string + 1;
//   } else if (numReg.test(string)) {
//     let val = string.match(numReg);
//     val = +val + 1;
//     string = string.replace(numReg, "");
//     let result = string.split("");
//     result.push(val);
//     return result.join("");
//   } else {
//     let val = splitted.pop();
//     splitted.push(++val);
//     return splitted.join("");
//   }
// }

function incrementString(str) {
  const regex = /[0-9]+/.exec(str); //* returns the match as an array or null if there is no match
  if (regex) {
    const numStr = regex.pop(); //* poping the match out and into numStr 014

    const newNums = +numStr + 1; //Number(numStr)+1 14
    // console.log(newNums);

    const zeroNums = numStr.length - newNums.toString().length; //* 2

    const zeroStr = zeroNums > 0 ? Array(zeroNums).fill("0").join("") : ""; //* Genius
    // console.log(zeroStr);
    return str.replace(numStr, `${zeroStr}${newNums}`);
  }
  return `${str}1`;
}

//!TEST

let result = incrementString("foo14");
// result = incrementString("foo001");
console.log(result);
