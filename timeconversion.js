//* Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s) {
  let regex = /[^a-z]/gi;
  let mutated = s.match(regex).join("").split(":");

  if (s.includes("PM") && mutated[0] < 12) {
    mutated[0] = +mutated[0] + 12;
  } else if (s.includes("AM")) {
    mutated[0] = mutated[0] == 12 ? "00" : mutated[0];
  }

  return mutated.join(":");
}

//!Test
let val = timeConversion("1:40:22PM");
console.log(val);
