const fibonacci = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]); //! add the previous two elements and push the result to the array.
  }

  return arr.join(" ");
};

//! TEST

let value = fibonacci(6);
console.log(value);
