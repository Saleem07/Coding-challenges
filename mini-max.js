//* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// For example, arr = [1, 3, 5, 7, 9]
// . Our minimum sum is 1+3+5+7 = 16 and our maximum sum is 3+5+7+9 = 24. We would print 16 24

function miniMaxSum(arr) {
  let val = [];
  arr = arr.sort();
  let reduced = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  val.push(reduced - arr[arr.length - 1]);
  val.push(reduced - arr[0]);
  return val.join(" ");
}

let val = miniMaxSum([1, 2, 3, 4, 5]);
val = miniMaxSum([7, 69, 2, 221, 8974]);
console.log(val);
