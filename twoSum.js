//! Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

//* twoSum [1, 2, 3] 4 === (0, 2)

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

//* Working
//* outer
//* inner
//* inner
//* inner
//* inner
//* inner
//* inner
//* inner
//* inner
//* inner
//* repeat until found

//! TEST

let value = twoSum([2, 1, 2], 4);
value = twoSum([1234, 5678, 9012], 14690);
value = twoSum([2, 2, 3], 4);
value = twoSum([666, 81, 24, 799, 864, 862, 783, 648, 258, 833], 1499);

console.log(value);
