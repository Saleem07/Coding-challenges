// Task
//   	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//   	1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  let arr = str.split("");
  let output = [];

  for (let i = 0; i < str.length; i++) {
    if (arr[i] === " ") {
      continue;
    }
    arr[i] = arr[i].toUpperCase();
    output.push(arr.join(""));
    arr[i] = arr[i].toLowerCase();
  }

  return output;
}

// function wave(str) {
//   let abc = str.split("");
//   console.log(abc);
//   let final = [];
//   for (i = 0; i < abc.length; i++) {
//     for (j = 0; j < abc.length; j++) {
//       final[j] = abc[j]; //h,e
//       final[i] = abc[i].toUpperCase(); // H,
//     }
//     console.log(final.join(""));
//   }
// }

let result = wave(" gap ");
console.log(result);
