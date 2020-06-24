/* If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty. */

// The charCodeAt() method returns the Unicode of the character at the specified index in a string.

// The index of the first character is 0, the second character 1, and so on.

function wordsToMarks(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    total = total + str.toLowerCase().charCodeAt(i) - 96;
  }
  return total;
}

wordsToMarks("attitude");
let word = wordsToMarks("coding");
console.log(word);
