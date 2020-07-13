//**  Task

//* Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Notes:

// *    Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// * Input >> Output Examples

// * minValue ({1, 3, 1})  ==> return (13)

// * minValue({5, 7, 5, 9, 7})  ==> return (579)

const minValue = (values) => {
  let noDuplicate = [...new Set(values)];
  return parseInt(noDuplicate.sort().join(""));
};

let value = minValue([9, 7, 5, 5, 7]);
console.log(value);
