// * Complete the solution so that the function will break up camel casing, using a space between words.
// * Example

// * solution("camelCasing")  ==  "camel Casing"

// TODO we gotta refactor this method
// * DONE refactoring

const breakCase = (string) => {
  let regex = /^[a-z]+|[A-Z]+[a-z]+|[A-Z]+[a-z]+$/g;
  let value = string.match(regex);
  return value.join(" ");
};

let value = breakCase("camelCasingTestOkayThisLooksGreat");
// value = breakCase("camelCasing");
console.log(value);
