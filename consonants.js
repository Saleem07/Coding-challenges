// ! Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

//* We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

//* For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// * -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// * solve("zodiacs") = 26

//* For the word "strength", solve("strength") = 57
// *-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57;

function solve(s) {
  let charCode = [];
  let greatest;
  let regex = /[^aeiou]+/gi;
  let vowelLess = s.match(regex).map((each) => each.split(""));

  vowelLess.forEach((vow) => {
    charCode.push(vow.map((vo) => vo.charCodeAt() - 96));
  });
  const finalSum = charCode.map((el) => el.reduce((total, add) => total + add));
  greatest = finalSum.reduce((a, b) => Math.max(a, b));
  return greatest;
}

//! TEST
let value = solve("strength");
value = solve("mischtschenkoana");
console.log(value);

//* PRACTICE

// let arr = [
//   [1, 2, 4, 45, 66],
//   [45, 55, 88, 96],
// ];

// let highest = [];
// let val = 0;

// const arr2 = arr.map((el) => el.reduce((total, add) => total + add));
// console.log(arr2);
