/*Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns '' */

function list(names) {
  let sentence = [];
  if (!names.length) {
    return "";
  } else if (names.length === 1) {
    return names[0].name;
  } else {
    const lastVal = names[names.length - 1];
    for (let i = 0; i < names.length - 1; i++) {
      sentence.push(names[i].name);
    }
    return `${sentence.join(", ")} & ${lastVal.name}`;
  }
}

const nameString = list([
  { name: "Bart" },
  { name: "Lisa" },
  { name: "Maggie" },
]);
console.log(nameString);
const anotherNameString = list([{ name: "Bart" }, { name: "Lisa" }]);
console.log(anotherNameString);

const singleName = list([{ name: "Saleem" }]);
console.log(singleName);
