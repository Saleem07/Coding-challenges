/* 
* Consider a staircase of size n = 4:

   #
  ##
 ###
####


* Write a program that prints a staircase of size n. 

*/

function staircase(n) {
  //   let output = "";
  let filledArr = new Array(n).fill(" ");

  while (filledArr.indexOf(" ") !== -1) {
    filledArr.shift();
    filledArr.push("#");
    console.log(filledArr.join(""));
    // n--;
  }
}
staircase(5);
