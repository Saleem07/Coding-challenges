//* Replace With Alphabet Position

//* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  text = text.toLowerCase();
  let onlyAlphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let output = [];

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < onlyAlphabets.length; j++) {
      if (text[i] === onlyAlphabets[j]) {
        output.push(j + 1);
      }
    }
  }
  return output.join(" ");
}

//! Test

let result = alphabetPosition("The sunset sets at twelve o' clock.");
result = alphabetPosition("The narwhal bacons at midnight.");
console.log(result);
