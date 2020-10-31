// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

const dashatize = (num) => {
  const regex = /[13579]+/g;
  const dashReg = /--/g;
  const dashes = /^-| * |-$/g;
  const minus = /^-/g;

  if (isNaN(num)) {
    return "" + NaN;
  }

  num = String(num).replace(minus, "");

  let eachOne = num.toString().split("");

  let arr = [];
  for (let i = 0; i < eachOne.length; i++) {
    if (eachOne[i] % 2 !== 0) {
      arr.push(`-${eachOne[i]}-`);
    } else {
      arr.push(eachOne[i]);
    }
  }
  let dashedStr = arr.join("");

  dashedStr = dashedStr.replace(dashReg, "-");
  dashedStr = dashedStr.replace(dashes, "");

  return dashedStr;
};

let result = dashatize(NaN);
console.log(result);
