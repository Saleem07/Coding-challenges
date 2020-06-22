// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

const iqTest = (numbers) => {
  let nums = numbers.split(" ").map((x) => x % 2);
//   console.log(nums);

  let sums = nums.reduce((x, y) => x + y, 0);

  let target = sums > 1 ? 0 : 1;

  return nums.indexOf(target)+1;
};

let num = iqTest("2 4 7 8 10");

console.log(num)
iqTest("1 2 1 1");



