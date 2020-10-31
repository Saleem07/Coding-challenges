// Write

// function smaller(arr)

// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

// For example:

// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]

function smaller(arr) {
  let final = [];
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) temp++;
    }
    final.push(temp);
    temp = 0;
  }
  return final;
}

//* SOLUTION 2
function smaller(arr) {
  let list = [...arr].sort((a, b) => a - b);
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    final.push(list.indexOf(arr[i]));
    list.splice(list.indexOf(arr[i]), 1);
  }
  return final;
}

let result = smaller([5, 4, 3, 2, 1]);

console.log(result);
