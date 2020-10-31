// Given a string, return a new string that has transformed based on the input:

//     Change case of every character, ie. lower case to upper case, upper case to lower case.
//     Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

function stringTransformer(str) {
  let arr = str.split("");

  //* solution 1
  //   let output = [];
  //   arr.forEach((item, i, list) => {
  //     if (item === item.toUpperCase()) {
  //       output.push(item.toLowerCase());
  //     } else if (item === item.toLowerCase()) {
  //       output.push(item.toUpperCase());
  //     }
  //   });
  //   return output.join("").split(" ").reverse().join(" ");
  //* solution 2
  let output = arr
    .map((item) => {
      return item === item.toUpperCase()
        ? item.toLowerCase()
        : item.toUpperCase();
    })
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  return output;
}

let result = stringTransformer("Example string");
console.log(result);
