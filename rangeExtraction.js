// A format for expressing an ordered list of integers is to use a comma separated list of either

//     individual integers
//     or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

//* solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
//* returns "-6,-3-1,3-5,7-11,14,15,17-20"
function solution(list) {
  let count = 0;
  const output = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length; j++) {
      if (list[i] + j !== list[i + j]) {
        break;
      }
      count++;
    }
    if (count < 2) {
      output.push(list[i]);
    } else {
      output.push(list[i]);
      output.push("-");
      output.push(list[list.indexOf(list[i]) + count]);
      i = list.indexOf(list[i]) + count;
    }
    count = 0;
  }
  return output.join(",").replace(/,-,/g, "-");
}
let result = solution([
  -6,
  -3,
  -2,
  -1,
  0,
  1,
  3,
  4,
  5,
  7,
  8,
  9,
  10,
  11,
  14,
  15,
  17,
  18,
  19,
  20,
]);
console.log(result);