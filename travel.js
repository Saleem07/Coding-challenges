/*

* group the list by zipcode.

!Task

The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

* EXAMPLE

r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"



travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"



*/

function travel(r, zipcode) {
  if (!zipcode) {
    return ":/";
  }
  let regex = new RegExp(" " + zipcode, "g");

  // console.log(r.match(regex));
  //   console.log(regex.exec(r));

  //   if(r.includes(regex))
  let sameAddress = r
    .split(",")
    .filter((add) => add.includes(zipcode) && /[A-Z]{2}\s\d{5}/.test(zipcode));

  let removedZip = sameAddress.toString().replace(regex, ""); //* without  zip codes

  console.log(removedZip);

  let streetReg = /[0-9]+ /g;
  let streets = /[0-9]+/g;
  let removeStreetNum = removedZip.replace(streetReg, ""); //* remove street num from the string

  console.log(removeStreetNum);

  let streetNum = removedZip.match(streets); //* get all street number in array

  return `${zipcode}:${removeStreetNum}/${streetNum.join(",")}`;
}

addStr =
  "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432";
let result = travel(addStr, "OH 43071");
console.log(result);
