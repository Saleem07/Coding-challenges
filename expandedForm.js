/*
* Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

*/

function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((item, index, list) => {
      let temp = `${item}${"0".repeat(list.length - index - 1)}`; //4 ,
      console.log(temp);
      if (temp != 0) {
        return temp;
      }
    })
    .join(" ")
    .replace(/  | /g, " + ")
    .replace(/ \+ $/g, "")
    .replace(/ \+  \+ /g, " + ")
    .replace(/ \+ $/g, "");
}

const result = expandedForm(70304);
console.log(result);
