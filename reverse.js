//* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
  let toReverse = [];
  let notReverse = [];
  const finalArr = [];
  let arrStr = str.split(" ");
  let arrStr2 = str.split(" ");

  for (let i = 1; i < arrStr.length; i += 2) {
    toReverse.push(arrStr[i]);
  }

  for (let i = 0; i < arrStr2.length; i += 2) {
    notReverse.push(arrStr2[i]);
  }

  let reverseArr = toReverse
    .join(" ")
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse();

  for (let i = 0; i < str.length; i++) {
    finalArr.push(notReverse[i], reverseArr[i]);
  }
  return String(finalArr.join(" ").trim());
}

let result = reverse("Reverse this string, please!"); //* Reverse siht string, !esaelp
result = reverse("I really don't like reversing strings!"); //*I yllaer don't ekil reversing !sgnirts
console.log(result);
