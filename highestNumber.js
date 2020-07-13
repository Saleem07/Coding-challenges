//* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  let obj1 = {};
  arr.map((v) => (obj1[v] = obj1[v] ? obj1[v] + 1 : 1));

  let num1 = 0;
  let num2 = 0;
  for (let prop in obj1) {
    prop = prop * 1;
    if (obj1[prop] >= num1) {
      num1 = obj1[prop];
      num2 = prop;
    }
  }
  return num2;
}

//! TEST
let val = highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]);
// val = highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]);
console.log(val);
